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

const savedBlogs = [];

const usersRegistered = [];

const products = [
    {
        id: "web-development-01",
        title: 'Javascript',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Webdevelopment',
            id: 'webdevelopment'
        },
        price: 1000,
    },
    {
        id: "web-development-02",
        title: 'Css',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Webdevelopment',
            id: 'webdevelopment'
        },
        price: 1000,
    },
    {
        id: "web-development-03",
        title: 'Html',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Webdevelopment',
            id: 'webdevelopment'
        },
        price: 1000,
    },
    {
        id: "web-development-04",
        title: 'React',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Webdevelopment',
            id: 'webdevelopment'
        },
        price: 1000
    },
    {
        id: "data-science-01",
        title: 'Phyton',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Datascience',
            id: 'datascience'
        },
        price: 1000
    },
    {
        id: "data-science-02",
        title: 'Machine Learning',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Datascience',
            id: 'datascience'
        },
        price: 1000
    },
    {
        id: "data-science-03",
        title: 'Data Analisys',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Datascience',
            id: 'datascience'
        },
        price: 1000
    },
    {
        id: "data-science-04",
        title: 'Deep Learning',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Datascience',
            id: 'datascience'
        },
        price: 1000
    },
    {
        id: "software-engineering-01",
        title: 'Data Structures',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Softwareenginneering',
            id: 'softwareenginneering'
        },
        price: 1000
    },
    {
        id: "software-engineering-02",
        title: 'Algorithms',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Softwareenginneering',
            id: 'softwareenginneering'
        },
        price: 1000
    },
    {
        id: "software-engineering-03",
        title: 'Software Architecture',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Softwareenginneering',
            id: 'softwareenginneering'
        },
        price: 1000
    },
    {
        id: "software-engineering-04",
        title: 'Microservices',
        imagen: '../assets/images/productoJs.webp',
        category: {
            name: 'Softwareenginneering',
            id: 'softwareenginneering'
        },
        price: 1000
    },
];






