using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SoftuniBlog.Models;

namespace SoftuniBlog.Controllers
{
    public class ArticleController : Controller
    {
        // GET: Article
        public ActionResult Index()
        {
            return RedirectToAction("List");
        }

        //Get article/create
        [Authorize]
        public ActionResult Create()
        {
            using(var database = new BlogDbContext())
            {
                var model = new ArticleViewModel();
                model.Categories = database.Categories.OrderBy(c => c.Name).ToList();

                return View(model);
            }
        }

        //POST: Article/Create
        [HttpPost]
        [Authorize]
        public ActionResult Create(ArticleViewModel model)
        {
            if (ModelState.IsValid)
            {
                using (var database = new BlogDbContext())
                {
                    var authorId = database.Users
                        .First(u => u.UserName == this.User.Identity.Name)
                        .Id;

                    var article = new Article(authorId, model.Title, model.Content, model.CategoryId);

                    this.SetArticleTags(article, model, database);

                    database.Articles.Add(article);
                    database.SaveChanges();

                    return RedirectToAction("Index");
                }
            }

            return View(model);
        }

        //Get:Article/list
        public ActionResult List()
        {
            using (var database = new BlogDbContext())
            {
                var articles = database.Articles
                    .Include(a => a.Author)
                    .Include(a=>a.Tags)
                    .ToList();
                return View(articles);
            }
        }

        //get:article/details
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            using (var database = new BlogDbContext())
            {
                var article = database.Articles
                    .Where(a => a.Id == id)
                    .Include(a => a.Author)
                    .Include(a => a.Tags)
                    .First();

                if (article == null)
                {
                    return HttpNotFound();
                }

                return View(article);
            }
        }

        //GET: Article/Delete 
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            using(var database = new BlogDbContext())
            {
                //Get article from database
                var article = database.Articles
                    .Where(a => a.Id == id)
                    .Include(a => a.Author)
                    .Include(a=>a.Category)
                    .First();
                //check if user is authorized
                if(!IsUserAuthorizedToEdit(article))
                {
                    return new HttpStatusCodeResult(HttpStatusCode.Forbidden);
                }

                ViewBag.TagsString = string.Join(", ", article.Tags.Select(t => t.Name));

                //Check if exists
                if(article == null)
                {
                    return HttpNotFound();
                }
                //Pass article to view
                return View(article);
            }
        }

        //Post: Article/Delete
        [HttpPost]
        [ActionName("Delete")]
        public ActionResult DeleteConfirmed(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            using(var database = new BlogDbContext())
            {
                //Get Article from database
                var article = database.Articles.Where(a => a.Id == id)
                    .Include(a => a.Author)
                    .First();

                //Check if article exists
                if (article == null)
                {
                    return HttpNotFound();
                }

                //Delete article from database
                database.Articles.Remove(article);
                database.SaveChanges();

                //Return view
                return RedirectToAction("Index");
            }
        }

        //Get: Article/Edit
        public ActionResult Edit(int? id)
        {
            if(id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            using(var database = new BlogDbContext())
            {
                //get article from db
                var article = database.Articles.First(a => a.Id == id);

                //check if user is authorized
                if (!IsUserAuthorizedToEdit(article))
                {
                    return new HttpStatusCodeResult(HttpStatusCode.Forbidden);
                }

                //check if exists
                if (article == null)
                {
                    return HttpNotFound();
                }
                //create view model
                var model = new ArticleViewModel();
                model.Id = article.Id;
                model.Title = article.Title;
                model.Content = article.Content;
                model.CategoryId = article.CategoryId;
                model.Categories = database.Categories.OrderBy(a => a.Name).ToList();
                model.Tags = string.Join(", ", article.Tags.Select(t => t.Name));
                //pass view model to view

                return View(model);
            }
        }

        //Post: Article/Edit
        [HttpPost]
        public ActionResult Edit(ArticleViewModel model)
        {
            //check if model is valid
            if (ModelState.IsValid)
            {
                using (var database = new BlogDbContext())
                {
                    //get article from database
                    var article = database.Articles.FirstOrDefault(a => a.Id == model.Id);
                    //set article properties
                    article.Title = model.Title;
                    article.Content = model.Content;
                    article.CategoryId = model.CategoryId;
                    this.SetArticleTags(article, model, database);
                    //save article state in database
                    database.Entry(article).State = EntityState.Modified;
                    database.SaveChanges();
                    //redirect to index page
                    return RedirectToAction("Index");
                }
            }
            //if it's invalid
            return View(model);
        }

        private void SetArticleTags(Article article, ArticleViewModel model, BlogDbContext database)
        {
            //split tags
            var tagsString = model.Tags
                .Split(new char[] {',', ' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(t=>t.ToLower())
                .Distinct();
            //clear current article tags
            article.Tags.Clear();
            //set new article tags
            foreach (var tagString in tagsString)
            {
                //get  tag from db by its name
                Tag tag = database.Tags.FirstOrDefault(t => t.Name == tagString);
                //if the tag is nyll, create new tag
                if (tag == null)
                {
                    tag = new Tag() {Name = tagString};
                    database.Tags.Add(tag);
                }
                //add tag to article tags
                article.Tags.Add(tag);
            }
        }

        private bool IsUserAuthorizedToEdit(Article article)
        {
            bool isAdmin = this.User.IsInRole("Admin");
            bool isAuthor = article.IsAuthor(this.User.Identity.Name);

            return isAdmin || isAuthor;
        }
    }
}