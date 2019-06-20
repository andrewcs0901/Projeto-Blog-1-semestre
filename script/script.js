var dataBase = {
    postagem: [
        {
            id: 1,
            titulo: 'História da Wordl Wide Web',
            imagem: "https://home.cern/sites/home.web.cern.ch/files/inline-images/achintya/web%4030_News.png",
            autor: 'Andrew Costa',
            data: '10/06/2019',
            sobre: 'Entenda sobre a maior plataforma de dados do mundo',
            content: '<p>Há 30 anos, o engenheiro e cientista da computação Tim Berners-Lee finalizava a proposta que daria vida a um dos alicerces da internet como conhecemos hoje: a World Wide Web. E o WWW foi o homenageado do doodle do Google no dia 12 de março de 2019.</p></br>'+
            '<p>A criação de Berners-Lee é, por vezes, confundida com a da própria internet. Mas ambas estão longe de ser a mesma coisa. A World Wide Web é, na verdade, o espaço por onde informações — textos, imagens e outros documentos — circulam na forma de URLs (os endereços), enquanto a internet é “apenas” um sistema de computadores conectados em rede. Ela pode existir sem o WWW, mas o WWW não poderia existir sem ela.</p></br>'+
            '<p>A história do WWw é datada no início da década de 80, quando seu inventor ainda trabalhava na CERN, a Organização Europeia para Pesquisa Nuclear. Foi lá que o engenheiro começou a fazer alguns testes com hypertext, para linkar as páginas de um banco de dados interno da organização umas com as outras, mais ou menos como uma Wikipedia.</p></br>'+
            '<p>Mas o projeto do WWW começou a ganhar corpo quando o CERN recebeu seus próprios protocolos TCP/IP, que são a base da internet. A organização se tornou a maior da Europa em termos de conexões ativas, e Berners-Lee viu ali a oportunidade de expandir seus testes com hypertext para um espaço maior, não restrito à rede interna.</p></br>'+
           '<p>De início, a proposta do engenheiro, finalizada em 1989, não chamou tanta atenção. Mas no decorrer de 1990, ele conseguiu finalizar não apenas o conceito, mas também todas as ferramentas para colocá-lo para funcionar: o protocolo HTTP, a linguagem HTML, o primeiro navegador, o primeiro servidor web e a primeira página na rede.</p></br>'+
           '<p>A ideia, porém, não foi apoiada pelo CERN, por ser exatamente o foco da organização. Ainda que tenha a colocado para funcionar, Berners-Lee só conseguiu alavancar o desenvolvimento dela de vez em 1992, quando deixou o grupo europeu e foi ser parte do Massachusetts Institute of Technology (MIT). Desde então, o WWW só cresceu.</p></br>'+
           '<p>FONTE:<a href="https://exame.abril.com.br/tecnologia/google-celebra-os-30-anos-da-criacao-da-world-wide-web/">Revista Exame</a>',
            curtidas: 0,
            comentarios: [
                {
                    nome: 'Joao',
                    data: '10/06/2019',
                    comentario: 'Parabéns pela postagem, com ela pude perceber o valor que a internet tem para nós',
                },
                {
                    nome: 'Maria',
                    data: '10/06/2019',
                    comentario: 'Não acredito que a internet pode evoluir tanto em tão pouco tempo',
                },
                {
                    nome: 'Fernanda',
                    data: '12/06/2019',
                    comentario: 'Não gostei do post, aonde você viu isso??????',
                },
                {
                    nome: 'Clara',
                    data: '13/06/2019',
                    comentario: 'Obrigado, está postagem irá me ajudar no meu trabalho de Desenvolvimento de Interfaces Web',
                },
            ]

        }, {
            id: 2,
            titulo: 'Como funciona a Internet: Protocolo HTTP',
            imagem: 'http://www.simplynotes.in/wp-content/uploads/2016/04/http_001-1.jpg',
            autor: 'Andrew Costa',
            data: '11/06/2019',
            sobre: 'Entenda sobre o protocolo que nos proporciona a Web como conhecemos',
            content: '<h2>O que são Protocolos de Rede?</h2>'+
            '<p>Protocolos de rede nada mais são do que um conjunto de normas que permitem que qualquer máquina conectada à internet possa se comunicar com outra também já conectada na rede.</p>'+
            '<p>É assim que qualquer usuário consegue enviar e receber mensagens instantâneas, baixar e subir arquivos no seu site e acessar qualquer tipo de domínio na web.</p>'+
            '<p>Imagine que você não precise aprender uma língua estrangeira para se comunicar com pessoas de outros países. E supomos que o português fosse o único idioma existente, em que todos pudessem interagir e trocar informações sem problemas.</p>'+
            '<p>Os protocolos de internet funciona dessa forma, como uma espécie de “língua universal” entre computadores. Independente do fabricante e do sistema operacional usado, essa linguagem é interpretada por todas as máquinas igualmente.</p>'+
            '<p>Isso faz com que não seja necessário qualquer usar tipo de software extra para que um computador possa entender os protocolos de rede. Assim, ele consegue se comunicar com outro computador ligado à rede mundial de computadores sem qualquer problema.</p>'+
            '<h2>Protocolo HTTP</h2> <p>O protocolo HTTP, Hypertext Transfer Protocol ou Protocolo de Transferência de Hipertexto, é um protocolo da camada de aplicação do TCP/IP cuja função é de proporcionar a transferência de hipertexto. Este protocolo é usado desde 1990, atualmente está na versão 1.1.</p>'+         
            '<h3>Características do Protocolo HTTP</h3>'+
            '<li>É um protocolo de camada de aplicação da WEB</li>'+
            '<li>É implementado em dois programas: Cliente e Servidor</li>'+
            '<li>O HTTP é quem define a estrutura da mensagem que o cliente vai trocar com o servidor e utiliza TCP como seu protocolo de transporte</li>'+
            '<li>Protocolo sem estado. O que significa que ele não mantém memória sobre suas ações. Ou seja se um cliente fizer uma requisição idêntica a uma anterior a qualquer momento, o HTTP não sabe informar sobre esse histórico.</li>'+
            '<h3>Passos para uma comunicação HTTP</h3>'+
            '<li>É estabelecida uma conexão TCP entre o programa cliente e o servidor.</li>'+
            '<li>O cliente envia uma requisição HTTP para sua interface socket.</li>'+
            '<li>O TCP leva essa mensagem para a interface socket do servidor.</li>'+
            '<li>O servidor envia uma resposta HTTP para sua interface socket.</li>'+
            '<li>O TCP leva essa resposta para a interface socket do cliente.</li>'+
            '<h3>Exemplos de Códigos de estado:</h3>'+
            '<li>200 OK: Requisição bem sucedida.</li>'+
            '<li>301 Moved Permanently: o objeto requisitado foi movido, e a resposta retornará uma nova URL, com a localização do objeto.</li>'+
            '<li>400 Bad Request: o servidor não entendeu a requisição do cliente.</li>'+
            '<li>404 HTTP Not Found: O servidor não encontrou o objeto requisitado.</li>'+
            '<li>505 HTTP Version Not Supported: o servidor não suporta a versão http requisitada</li>'+
            '<p>Para mais informações é recomendado o acesse a seguinte página<p>'+
            '<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview">HTTP Overview pela fundação Mozilla</a>'
            ,

            curtidas: 0,
            comentarios: [
                {
                    nome: 'Daniel',
                    data: '11/06/2019',
                    comentario: 'Para simplificar para quem não entendeu muito, protocolo é como se fosse um cumprimento entre computadores, sem esse "protocolo", eles não poderiam se comunicar.',
                },
                {
                    nome: 'Flor',
                    data: '11/06/2019',
                    comentario: 'Bom, eu li a postagem várias vezes, e não havia compreendido muito bem, porém, após o comentário do Daniel já consegui visualizar como funciona',
                },
                {
                    nome: 'Rodrigo',
                    data: '12/06/2019',
                    comentario: 'Concordo com a Flor, para meu conhecimento atual é um assunto um pouco abstrato, sempre é bom relacionar com algo que vivenciamos todos os dias para facilitar o entendimento.',
                },
            ]

        }, {
            id: 3,
            titulo: 'Como se tornar um Web Developer',
            imagem: 'https://cdn-images-1.medium.com/max/1200/1*3wS5gKo_94JS1uLdbylSyw.png',
            autor: 'Andrew Costa',
            data: '12/06/2019',
            curtidas: 0,
            content: '<p>A trilha que você deverá percorrer já está pronta, que tenha muita força de vontade que uma hora o sucesso se apresentará até você</p>'+
            '<a href="https://github.com/kamranahmedse/developer-roadmap">Road map para Web-Developers</a>'
            ,
            sobre: 'Saiba a trilha que você deverá seguir caso deseje se tornar um',
            comentarios: [
                {
                    nome: 'Paula',
                    data: '12/06/2019',
                    comentario: 'Adorei a postagem, estava em dúvidas em qual área de TI seguir, porém agora, já decidi por onde começar, e vou fazer um blog documentando sobre minha evolução',
                },
                {
                    nome: 'Anônimo',
                    data: '12/06/2019',
                    comentario: 'Essa trilha é muito longa, pessoalmento acho que no momento não estou preparado para isso.',
                }
            ]

        }, {
            id: 4,
            titulo: 'O que é HTML, CSS e JavaScript',
            imagem: 'https://www.huszardev.com/wp-content/uploads/2018/07/1_l4xICbIIYlz1OTymWCoUTw1.jpeg',
            autor: 'Andrew Costa',
            data: '13/06/2019',
            curtidas: 0,
            content: '<p>Cada página da Web que você visita é criada usando uma sequência de instruções separadas, uma após a outra. Seu navegador (Chrome, Firefox, Safari e assim por diante) é um grande ator na tradução de código em algo que podemos ver em nossas telas e até mesmo interagir. Pode ser fácil esquecer que o código sem um navegador é apenas um arquivo de texto - é quando você coloca esse arquivo de texto em um navegador que a mágica acontece. Quando você abre uma página da Web, seu navegador busca o HTML e outras linguagens de programação envolvidas e o interpreta.</p></br>'+
            '<p>HTML e CSS não são tecnicamente linguagens de programação; eles são apenas estrutura de página e informações de estilo. Mas antes de passar para o JavaScript e outras linguagens verdadeiras, você precisa conhecer as noções básicas de HTML e CSS, pois elas estão no front-end de todas as páginas da Web e aplicativos.</p>'+
            '<p>No início dos anos 90, o HTML era o único idioma disponível na web. Os desenvolvedores da Web tiveram que codificar meticulosamente sites estáticos, página por página. Muita coisa mudou desde então: agora existem muitas linguagens de programação disponíveis. Neste post, falarei sobre HTML, CSS e uma das linguagens de programação mais comuns: JavaScript.</p>'+
            '<p>O HTML fornece a estrutura básica dos sites, que é aprimorada e modificada por outras tecnologias, como CSS e JavaScript.'+
            'CSS é usado para controlar a apresentação, formatação e layout.'+
            'JavaScript é usado para controlar o comportamento de diferentes elementos.</p></br>'+
            '<h3>HTML</h3>'+
            '<p>O HTML está no centro de todas as páginas da Web, independentemente da complexidade de um site ou número de tecnologias envolvidas. É uma habilidade essencial para qualquer profissional da web. É o ponto de partida para quem está aprendendo a criar conteúdo para a web. E, felizmente para nós, é surpreendentemente fácil de aprender.</p></br>'+
            '<h3>CSS</h3>'+
            '<p>CSS significa Cascading Style Sheets. Essa linguagem folha de estilos determina como os elementos HTML de um website devem realmente aparecer no frontend da página.'+
            'Enquanto o HTML é a estrutura básica do seu site, o CSS é o que dá estilo a todo o seu site. Essas cores lisas, fontes interessantes e imagens de fundo? Tudo graças ao CSS. Essa linguagem afeta todo o humor e tom de uma página da Web, tornando-a uma ferramenta incrivelmente poderosa - e uma habilidade importante para os desenvolvedores da Web aprenderem. É também o que permite que os sites se adaptem a diferentes tamanhos de tela e tipos de dispositivos.</p>'+
            '<h3>JavaScript</h3>'+
            '<p>Aonde o JavaScript é usado?<p></br>'+
            '<p>JavaScript é uma linguagem de programação baseada em lógica que pode ser usada para modificar o conteúdo do site e fazê-lo comportar-se de maneiras diferentes em resposta às ações de um usuário. Usos comuns para JavaScript incluem efeitos dinâmicos, caixas de seleção, e adição de informações existentes.'+
            'Em suma, o JavaScript é uma linguagem de programação que permite aos desenvolvedores da web projetar sites interativos. A maior parte do comportamento dinâmico que você verá em uma página da Web é graças ao JavaScript, que aumenta os controles e comportamentos padrão de um navegador.</p></br>'+
            '<p>Conclui-se que se você está gostando do contéudo mencionado até aqui, lhe recomendo após compreender o básico de cada linguangem, e após isso estudar o domínios  dessas três linguagens nos seguintes aspectos, a semântica do HTMl, a responsividade do CSS em dispositivos, e o uso do Ajax e frameworks que facilitem a aplicação do JavaScript. Após isso, certamento você já terá as boas práticas necessárias para ser um bom WebDeveloper'
            ,
            sobre: 'Entenda sobre essas três linguagens e porque você deve aprendê-las agora',
            comentarios: [
                {
                    nome: 'Fábio',
                    data: '13/06/2019',
                    comentario: 'Agora você conseguiu minha atenção, vou começar a brincar com html e css fazer um site com a minha cara kkkk.',
                },
                {
                    nome: 'Bettina',
                    data: '13/06/2019',
                    comentario: 'Oi. Meu nome é Bettina, eu tenho 22 anos e 1 milhão e 42 mil reais de patrimônio acumulado. Quer saber como eu consegui todo esse patrimônio? clique aqui!<a href="https://www.empiricus.com.br">https://www.empiricus.com.br</a>',
                },
                {
                    nome: 'Marcela',
                    data: '13/06/2019',
                    comentario: 'É vírus pessoal, não confiem nessa Betina!!!',
                },
            ]

        }, {
            id: 5,
            titulo: 'Entenda a importância da Plataforma Web',
            imagem: 'https://www.w3.org/2012/08/mobile-web-app-state/webapp.png',
            autor: 'Andrew Costa',
            data: '13/06/2019',
            curtidas: 0,
            content: '<p>A plataforma Web é uma coleção de tecnologias desenvolvidas como padrões abertos pelo World Wide Web Consortium e outros órgãos de padronização, como o Grupo de Trabalho de Tecnologia de Aplicativos de Hipertexto da Web, o Unicode Consortium, a Força-Tarefa de Engenharia da Internet e a Ecma International.</p></br>'+
                        '<li>O termo genérico introduzido pelo World Wide Web Consortium e, em 2011, foi definido como "uma plataforma para inovação, consolidação e eficiência de custos" segundo o CEO da W3C, Jeff Jaffe.</li>'+
                        '<p>Sendo construído na The evergreen Web (onde atualizações de software rápidas e automáticas , cooperação de fornecedores, padronização e competição) permitiu a adição de novas capacidades, ao mesmo tempo em que lidava com riscos de segurança e privacidade.</p></br>'+
                        '<p>Além disso, conclui-se que os desenvolvedores através dela e suas tecnologias podem criar conteúdos, que são compatíveis com uma grande variabilidade de dispositivos, sendo uma plataforma bastante variada e coesa para novas oportunidades aos que amam tecnologia.</p></br>'+
                        '<p>Então caso esteja animado em seguir uma carreira na area de WebDeveloper. A plataforma Web atualmente tem como principais tecnologias as linguagens e <a href="https://blog.vertigo.com.br/o-que-e-api-entenda-de-uma-maneira-simples/">APIs</a><p> Que são destinadas originalmente em relação à publicação de páginas da Web como a estrutura, visual e funcionalidades, sendo as mais utilizadas HTML, CSS, SVG, PHP, ECMAScript/JavaScript, WebGL, Armazenamento da Web, API de Banco de Dados Indexado, Componentes Web, WebAssembly, Web Workers, WebSocket, API de Geolocalização, Eventos Enviados por Servidor, Eventos DOM, Compartilhamento de mídia em cloud, Ajax(XMLHttpRequest), Compartilhamento de recursos entre origens, API de arquivos, HTTP, TLS.</p>',
            sobre: 'Sabia que você ao menos uma vez por dia, você utiliza uma aplicação que você nem imagina que é dependente de internet? ',
            comentarios: [
                {
                    nome: 'Menegaldi',
                    data: '14/06/2019',
                    comentario: 'Muito interessante, houve uma grande popularização dos WebApps, mas a verdade é maioria de nós no dia a dia utiliza algum, sem ao menos saber que ele possui uma dependência de rede característica de uma aplicação web',
                }
            ]

        }
    ]
}

var img = '';
var ind = 0;

$(document).ready(function () {
    loadDataBase();
    showPosts();
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

document.getElementById('my-img').addEventListener('click', function(){
    imageHandler;
})

document.getElementById('submit-new-post').addEventListener('click', function () {
    createNewPost(document.querySelector('.form'));
});

 document.addEventListener('click', function (x) {
    let localId = x.target.id;
    localId = localId.replace(/\D/g,'');
    localId = parseInt(localId);
    if (isNaN(localId)) {
        return 0;
    }
    if (typeof localId == "number") {
        loadPost(localId);
        let valor = localId;
        return valor;
    }
});


function loadDataBase(indice) {
    let db = JSON.parse(localStorage.getItem("Andrew Costa"));
    if (!db) {
        db = dataBase;
        localStorage.setItem("Andrew Costa", JSON.stringify(db));
    }

    else if (!indice && indice != 0) {
        return db;
    }

    else {
        return db.postagem[indice];
    }
}

function insertPost() {
    document.getElementById('insert-post').style.display = 'flex';
    document.getElementById('insert-post').style.justifyContent = 'center'
    document.getElementById('content').style.display = 'none';
}

function showPosts() {
    let dataBase = loadDataBase();
    let posts = dataBase.postagem;
    let text = document.getElementById('last-posts')
    let i;
    for (i = posts.length - 1; i >= 0; i--) {
        posts[i].aberta = 0;
        text.innerHTML += `
            <div id="${i}" class="bloco-postagem">
                <div id="titulo ${i}">${posts[i].titulo}</div>
                <div id="content" style="display: flex;">
                    <div id="imagem-post ${i}" style="width: 16em;">
                        <img src='${posts[i].imagem}' alt="">
                    </div>
                    <div id="corpo-postagem ${i}">${posts[i].sobre}</div>
                </div>
                <div id="data-de-postagem">${posts[i].data}</div>
            </div>`
    }
}

function loadPost(id) {
    ind = id;
    let conteudo = document.getElementById('content');
    let base = loadDataBase(id);
    let title = base.titulo;
    let autor = base.autor;
    let text = base.content;
    let imagem = base.imagem;
    let like = base.curtidas;
    let comentaryDB = base.comentarios;
    let listComentary = '';
    if (comentaryDB.length > 0) {
        listComentary = loadComentary(comentaryDB);
    }
    like = `<button id="like">curtir(${like})</button>`
    let addcomment = `<div id="add-comment">
        <form class="comment-post"><input type="text" placeholder="nome"><textarea placeholder="insira o seu comentário aqui"rows="5" cols="10" style="border: 0.2em solid;padding: 0.2em;
    border-radius: 10px;"></textarea><input id="${id}" class="enviar" type="submit" placeholder="comentar"></form></div>`
    title = `<div id="post-title">${title}</div>`
    imagem = `<div id="img-post"><img src="${imagem}"></div>`

    conteudo.innerHTML = "<div id='post'>" + title + "<div id='post-content'>"+"<div id='autor'> Autor: "+autor+"</div>" + imagem + "<div style='text-align: justify;'>" + text + "</div><div>"+like+"</div" + addcomment + "<div id='box-comentarios'>" + listComentary; +"</div></div></div>";
    document.getElementById('like').addEventListener('click', function(){
        updateLocal(0,3);
    })
    document.querySelector('.enviar').addEventListener('click', function () {
        createComment(document.querySelector('.comment-post', updateLocal(0,2)));
    });
}

function loadComentary(comentaryDB) {
    let listComentary = '';
    for (let i = 0; i < comentaryDB.length; i++) {
        listComentary += `<div id="comentario${i}">
                            <div id="nome">
                                Usuário: ${comentaryDB[i].nome}
                            </div>
                            <div id="data">
                                ${comentaryDB[i].data}
                            </div>
                            <div id="comentario">
                                ${comentaryDB[i].comentario}
                            </div> 
                        </div>`
    }
    return listComentary;
}

function createComment(data) {
    let dataSet = {
        nome: data[0].value,
        data: date(),
        comentario: data[1].value
    }
    let indice = updateLocal(0,2);
    updateLocal(dataSet, 1, indice)
}

function createNewPost(data) {
    let qnty = loadDataBase();
    qnty = qnty.postagem
    qnty = qnty.length + 1;
    let dataset = {
        id: qnty,
        titulo: data[0].value,
        autor: data[1].value,
        imagem: img,
        data: date(),
        curtidas: 0,
        sobre: data[3].value,
        content: data[4].value,
        comentarios: [
        ]
    }
    updateLocal(dataset);
}

function updateLocal(data, mode) {
    let local = loadDataBase();
    if (!mode) {
        let indice = local.postagem.length;
        local.postagem[indice] = data;
        localStorage.setItem("Andrew Costa", JSON.stringify(local));
    }
    else if (mode == 1){
        let indice = local.postagem[ind].comentarios.length;
        local.postagem[ind].comentarios[indice] = data;
        localStorage.setItem("Andrew Costa", JSON.stringify(local));
    }
    else if (mode == 3){
        local.postagem[ind].curtidas = local.postagem[ind].curtidas + 1;
        localStorage.setItem("Andrew Costa", JSON.stringify(local));
        loadPost(ind);
    }
}

function img64(file) {
    const img = file.toDataURL();
    return img;
  }

function date() {
    let calendar = new Date()
    let fullData = calendar.getDate() + "/" + calendar.getMonth() + "/" + calendar.getFullYear();
    return fullData;
}

function imageHandler(e2) {
    img = (e2.target.result);
}

function loadimage(e1) {
    var filename = e1.target.files[0];
    var fr = new FileReader();
    fr.onload = imageHandler;
    fr.readAsDataURL(filename);
}

window.onload = function () {
    var y = document.getElementById("my-img");
    y.addEventListener('change', loadimage, false);
}

