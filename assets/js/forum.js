'use strict';

/*======================INFO DATE ================================= */
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//WORKIN ON DATE CONTAINER

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
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

    const titleBlog = document.getElementById("title-form").value;

    const contentBlog = document.getElementById("form-txt-area").value;

    const typeBlog = document.getElementById("type-post").value;

    const containerBlog = document.getElementById("containerBlog");


    const article1 = new ContentBlog(titleBlog, typeBlog, contentBlog);

    localStorage.setItem("blogPost", JSON.stringify(article1));

    const article1iInJson = JSON.parse(localStorage.getItem("blogPost"));

    savedBlogs.push(article1);

    containerBlog.innerHTML += `
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
    `
}

