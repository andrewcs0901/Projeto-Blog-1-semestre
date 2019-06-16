var dataBase = {
    postagem: [
        {
            id: 1,
            titulo: 'História da Web',
            imagem: "https://home.cern/sites/home.web.cern.ch/files/inline-images/achintya/web%4030_News.png",
            autor: 'Andrew Costa',
            data: '11/06/2019',
            sobre: 'Entenda sobre a maior plataforma de dados do mundo',
            content: 'Os primordios da internet',
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
            titulo: 'Como funciona a Internet: Protocolo HTTP',
            imagem: '',
            autor: 'Andrew Costa',
            data: '11/06/2019',
            sobre: 'Entenda sobre o protocolo que nos proporciona a Web como conhecemos',
            content: '',
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
            titulo: 'Como se tornar um Web Developer',
            imagem: '',
            autor: 'Andrew Costa',
            data: '12/06/2019',
            curtidas: 0,
            content: '',
            sobre: '',
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
            titulo: 'O que é HTML, CSS e JavaScript',
            imagem: '',
            autor: 'Andrew Costa',
            data: '13/06/2019',
            curtidas: 0,
            content: '',
            sobre: '',
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
            id: 5,
            titulo: 'Entenda sobre as Plataformas de desenvolvimento Web',
            imagem: '',
            autor: 'Andrew Costa',
            data: '13/06/2019',
            curtidas: 0,
            content: '',
            sobre: '',
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

$(document).ready(function () {
    showPosts();
    loadDataBase();
});

document.getElementById('add-post').addEventListener('click', function () {
    insertPost()
});
document.getElementById('add-post').addEventListener('mouseover', function () {
    document.getElementById('show-add').style.display = 'inline';
    this.addEventListener('mouseout', function () {
        document.getElementById('show-add').style.display = 'none';
    })
});
document.addEventListener('click', function (x) {
    let localId = parseInt(x.target.id);
    console.log(typeof localId);
    if (isNaN(localId)) {
        return 0;
    }
    if (typeof localId == "number") {
        console.log(localId);
        loadPost(localId);
    }
});
document.getElementById('submit-new-post').addEventListener('click', function () {
    createNewPost(document.querySelector('.form'));
})


function loadDataBase(indice) {
    let db = JSON.parse(localStorage.getItem("Andrew Costa"));
    if (!db) {
        db = dataBase;
        localStorage.setItem("Andrew Costa", JSON.stringify(db));
    }

    if (!indice) {
        return db;
    }

    else {
        return db.postagem[indice - 1];
    }
}

function insertPost() {
    document.getElementById('insert-post').style.display = 'flex';
    document.getElementById('insert-post').style.justifyContent = 'center'
    document.getElementById('content').style.display = 'none';
}

function showPosts() {
    let dataBase = loadDataBase();
    console.log(dataBase);
    let posts = dataBase.postagem;
    let text = document.getElementById('last-posts')
    let i;
    for (i = 1; i < posts.length; i++) {
        text.innerHTML += `
            <div id="${i}" class="bloco-postagem">
                <div id="titulo">${posts[i].titulo}</div>
                <div id="imagem">
                    <img src='${posts[i].imagem}' alt="">
                </div>
                <div id="corpo-postagem">${posts[i].sobre}</div>
                <div id="data-de-postagem">${posts[i].data}</div>
            </div>`
    }
}

function loadPost(id) {
    let conteudo = document.getElementById('content');
    let base = loadDataBase(id);
    let title = base.titulo;
    let text = base.content;
    let imagem = base.imagem;
    conteudo.innerHTML = "<div id='post-title'>" + title + "</div>" + "<div id='post-content'>" + "<div id='img-post'>" + "</div>" + text + "</div>";
}

function createNewPost(data) {
    let calendar = new Date()
    let postedIn = calendar.getDate();
    let qnty = loadDataBase();
    qnty = qnty.postagem
    console.log(qnty.length);
    qnty = qnty.length + 1;
    let dataset = {
        id: qnty,
        titulo: data[1].value,
        autor: data[2].value,
        imagem: data[3].value,
        data: postedIn,
        curtidas: 0,
        sobre: data[4].value,
        content: data[5].value,
        comentarios: [
        ]
    }
    updateLocal(dataset);
}

function updateLocal(data) {
    let local = loadDataBase();
    let sumAll = data + local.postagem;
    console.log(sumAll);
    localStorage.setItem("Andrew Costa", JSON.stringify(sumAll));
}
