'use strict';
class Users {
    constructor(name, email, user, password) {
        this.name = name;
        this.email = email;
        this.user = user;
        this.password = password;
    }

}
class ContentBlog {
    constructor(title, typePost, content) {
        this.title = title;
        this.typePost = typePost;
        this.content = content;
        // this.imagen = imagen;
    }
}

/* ARRAY OBJETOS* */

const savedArticles = [
    {
        title: "A random new for testing",
        typePost: "Info",
        content: "A random paragraph without any sense just for testing",
        user: "Mati98",
    },
]

localStorage.setItem("arrayArticles", JSON.stringify(savedArticles));


//  localStorage.setItem("blogPost", JSON.stringify(article1));

const savedBlogs = [];




