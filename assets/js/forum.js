'use strict';

const arrayBlogs = [];
const infoArray = [];
const articleArray = [];
const postArray = [];

/*======================INFO DATE ================================= */
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//WORKIN ON DATE CONTAINER

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
  dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
  dateMonth.textContent = date.toLocaleString('en', { month: 'short' });
  dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
}

setDate();

/*====================== MODAL FUNCTION ================================= */

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("button-open");
const closeModalBtn = document.getElementById("btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

openModalBtn.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener('click', closeModal);

/*====================== WORKING IN INFO OF FORM ============================*/

const form = document.getElementById("form");

form.addEventListener("submit", validationForm);


function validationForm(e) {

  e.preventDefault();

  const deleteEmptyContent = document.getElementById("emptyTitle");
  if (deleteEmptyContent != null) {

    deleteEmptyContent.classList.add("hidden");
  }


  const titleBlog = document.getElementById("title-form").value;

  const contentBlog = document.getElementById("form-txt-area").value;

  const typeBlog = document.getElementById("type-post").value;

  const containerBlog = document.getElementById("containerBlog");


  let article = new ContentBlog(titleBlog, typeBlog, contentBlog);

  switch (article.typePost) {
    case "info":
      infoArray.push(article);
      localStorage.setItem("infoArrayJson", JSON.stringify(infoArray));
      break;
    case "post":
      postArray.push(article);
      localStorage.setItem("postArrayJson", JSON.stringify(postArray));
      break;
    case "article":
      articleArray.push(article);
      localStorage.setItem("articleArrayJson", JSON.stringify(articleArray));
      break;
  }
  savedBlogs.push(article);


  localStorage.setItem("blogPosted", JSON.stringify(savedBlogs));

  const div = document.createElement('div');

  div.innerHTML += `
    <a href="#"><i id="buttonHearth" class="uil uil-heart hearth"></i></a>
          <div class="containerBlog__card">
            <picture>
              <img src="../assets/images/move2.svg" alt="image about post" />
            </picture>
            <div class="containerBlog__content">
              <h2>${titleBlog}</h2>
              <p>
                ${contentBlog}
              </p>
              <div class="containerBlog__info">
                <a class="containerBlog-typePost" href="#">${typeBlog}</a>
                <span class="containerBlog-timePost">42 min ago</span>
                <a class="containerBlog-userPost" href="#">User</a>
              </div>
              <div class="containerBlog__btns">
                <i id="like" class="uil uil-thumbs-up green"></i>
                <i id="dislike" class="uil uil-thumbs-down red"></i>
                <i id="view-ico" class="uil uil-eye view">
                  <span id="view-number" class="count-visit">1</span>
                </i>
              </div>
            </div>
          </div>
          <hr>
    `
  containerBlog.append(div);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    iconColor: '#fff',
    color: '#fff',
    title: 'Article created succesfully🎉',
    background: '#A5DC86',

  })
}

/*============================ POSTS ALREADY SAVED  ==========================================*/

let containerBlog = document.getElementById("containerBlog");

const printBlogs = JSON.parse(localStorage.getItem("blogPosted"));

if (printBlogs !== null) {
  document.addEventListener('DOMContentLoaded', () => {
    const deleteEmptyContent = document.getElementById("emptyTitle");

    deleteEmptyContent.classList.add("hidden");

    printBlogs.forEach(blog => {
      containerBlog.innerHTML += `
        <a href="#"><i id="buttonHearth" class="uil uil-heart hearth"></i></a>
         <div class="containerBlog__card">
            <picture>
              <img src="../assets/images/move2.svg" alt="image about post" />
            </picture>
            <div class="containerBlog__content">
              <h2>${blog.title}</h2>
              <p>
                ${blog.content}
              </p>
            <div class="containerBlog__info">
              <class="containerBlog-typePost"<a href="#">${blog.typePost}</a>
              <span class="containerBlog-timePost">42 min ago</span>
              <a class="containerBlog-userPost" href="#">User</a>
            </div>
            <div class="containerBlog__btns">
              <i id="like" class="uil uil-thumbs-up green"></i>
              <i id="dislike" class="uil uil-thumbs-down red"></i>
              <i id="view-ico" class="uil uil-eye view">
                <span id="view-number" class="count-visit">1</span>
              </i>
            </div>
          </div>
        </div>
        <hr>
        `;
    });
  });
}

/* ======================= FILTERS ================================ */

const buttonSelect = document.getElementById("buttonSelect");
const buttonArticle = document.getElementById("article").value
const buttonInfo = document.getElementById("info").value
const buttonPost = document.getElementById("post").value

buttonSelect.addEventListener('click', reloadContent);

function reloadContent() {
  const infoArrayJson = JSON.parse(localStorage.getItem("infoArrayJson"));
  const postArrayJson = JSON.parse(localStorage.getItem("postArrayJson"));
  const articleArrayJson = JSON.parse(localStorage.getItem("articleArrayJson"));

  switch (buttonSelect.value) {
    case "article":
      containerBlog.innerHTML = "";
      articleArrayJson.forEach(article => {
        containerBlog.innerHTML += `
         <a href="#"><i id="buttonHearth" class="uil uil-heart hearth"></i></a>
          <div class="containerBlog__card">
           <picture>
             <img src="../assets/images/move2.svg" alt="image about post" />
           </picture>
           <div class="containerBlog__content">
             <h2>${article.title}</h2>
             <p>
               ${article.content}
             </p>
           <div class="containerBlog__info">
             <class="containerBlog-typePost"<a href="#">${article.typePost}</a>
             <span class="containerBlog-timePost">42 min ago</span>
             <a class="containerBlog-userPost" href="#">User</a>
           </div>
           <div class="containerBlog__btns">
             <i id="like" class="uil uil-thumbs-up green"></i>
             <i id="dislike" class="uil uil-thumbs-down red"></i>
             <i id="view-ico" class="uil uil-eye view">
               <span id="view-number" class="count-visit">1</span>
             </i>
           </div>
         </div>
       </div>
       <hr>
        `
      });
      break;
    case "post":
      containerBlog.innerHTML = "";
      postArrayJson.forEach(post => {
        containerBlog.innerHTML += `
         <a href="#"><i id="buttonHearth" class="uil uil-heart hearth"></i></a>
          <div class="containerBlog__card">
           <picture>
             <img src="../assets/images/move2.svg" alt="image about post" />
           </picture>
           <div class="containerBlog__content">
             <h2>${post.title}</h2>
             <p>
               ${post.content}
             </p>
           <div class="containerBlog__info">
             <class="containerBlog-typePost"<a href="#">${post.typePost}</a>
             <span class="containerBlog-timePost">42 min ago</span>
             <a class="containerBlog-userPost" href="#">User</a>
           </div>
           <div class="containerBlog__btns">
             <i id="like" class="uil uil-thumbs-up green"></i>
             <i id="dislike" class="uil uil-thumbs-down red"></i>
             <i id="view-ico" class="uil uil-eye view">
               <span id="view-number" class="count-visit">1</span>
             </i>
           </div>
         </div>
       </div>
       <hr>
        `
      });
      break;
    case "info":
      containerBlog.innerHTML = "";
      infoArrayJson.forEach(info => {
        containerBlog.innerHTML += `
         <a href="#"><i id="buttonHearth" class="uil uil-heart hearth"></i></a>
          <div class="containerBlog__card">
           <picture>
             <img src="../assets/images/move2.svg" alt="image about post" />
           </picture>
           <div class="containerBlog__content">
             <h2>${info.title}</h2>
             <p>
               ${info.content}
             </p>
           <div class="containerBlog__info">
             <class="containerBlog-typePost"<a href="#">${info.typePost}</a>
             <span class="containerBlog-timePost">42 min ago</span>
             <a class="containerBlog-userPost" href="#">User</a>
           </div>
           <div class="containerBlog__btns">
             <i id="like" class="uil uil-thumbs-up green"></i>
             <i id="dislike" class="uil uil-thumbs-down red"></i>
             <i id="view-ico" class="uil uil-eye view">
               <span id="view-number" class="count-visit">1</span>
             </i>
           </div>
         </div>
       </div>
       <hr>
        `
      });
      break;
  }

}
