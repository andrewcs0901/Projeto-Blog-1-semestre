var dataBase = {
    postagem: [
        {
            id: 0,
            titulo: 'História da Web',
            imagem: '',
            autor: 'Andrew Costa',
            data: '11/06/2019',
            curtidas: 0,
            comentarios: [
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
            ]

        }, {
            id: 1,
            titulo: 'Como funciona a Internet: Protocolo HTTP',
            imagem: '',
            autor: 'Andrew Costa',
            data: '11/06/2019',
            curtidas: 0,
            comentarios: [
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
            ]

        }, {
            id: 2,
            titulo: 'Como se tornar um Web Developer',
            imagem: '',
            autor: 'Andrew Costa',
            data: '12/06/2019',
            curtidas: 0,
            comentarios: [
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
            ]

        }, {
            id: 3,
            titulo: 'O que é HTML, CSS e JavaScript',
            imagem: '',
            autor: 'Andrew Costa',
            data: '13/06/2019',
            curtidas: 0,
            comentarios: [
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
            ]

        }, {
            id: 4,
            titulo: 'Entenda sobre as Plataformas de desenvolvimento Web',
            imagem: '',
            autor: 'Andrew Costa',
            data: '13/06/2019',
            curtidas: 0,
            comentarios: [
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
                {
                    nome: '',
                    data: '',
                    comentario: '',
                },
            ]

        }
    ]
}

$(document).ready(function(){ loadDataBase();});

document.getElementById('add-post').addEventListener('click', function(){
    insertPost()});
document.getElementById('add-post').addEventListener('mouseover', function(){
    document.getElementById('show-add').style.display = 'inline';
    this.addEventListener('mouseout',function(){
        document.getElementById('show-add').style.display = 'none';
    })
})

function loadDataBase(){
    let db = JSON.parse(localStorage.getItem("Andrew Costa"));
    if(!db){
        db = dataBase;
    }
    return db;
}

function insertPost(){
    document.getElementById('insert-post').style.display = 'block';
    document.getElementById('content').style.display = 'none';
    document.getElementById('submit').addEventListener('click', function(){
    document.getElementById('content').style.display = 'flex';   
    })
}
     