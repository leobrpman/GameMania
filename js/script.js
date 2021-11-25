$(document).ready(function() {

    // $("#banner1 img:eq(0)").addClass("banner-ativo").show()
    
    // setInterval(slide, 3000)

    // function slide () {
    //     if ($(".banner-ativo").next().length) {
    //         $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    //     } else {
    //         $(".banner-ativo").removeClass("banner-ativo").hide()
    //         $("#banner1 img:eq(0)").addClass("banner-ativo").show()
    //     }
    // }


    $("#bars").click(function() {
        $("#categorias").toggleClass("menu-show")
        // if($("#categorias").hasClass("menu-show")) {
        //     $("#categorias").removeClass("menu-show")
        // } else {
        //     $("#categorias").addClass("menu-show")
        // }
    })
})

let email = document.getElementById("campo_email");

function cadastroEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado);
}


let search = document.getElementById("campo_search");

function searchGo() {
    let searchDigitada = search.value;
    console.log(searchDigitada);
}

let listaNoticias = [
    {
        imagem: "./img/copa_rakin_valorant.png",
        img_alt: "imagem de flyer da Copa Rakin de Valorant: chegou o momento",
        titulo: "Copa Rakin - 2ª edição",
        descricao: "Nova edição terá foco em mulheres, transgêneros e não-binários e distribuirá R$ 40 mil em premiação.",
        link_news: "#"
    },
    {
        imagem: "./img/fifa22.png",
        img_alt: "imagem de anúncio do Jogo Fifa 22 com jogadores do Paris Saint Germain perfilados: Neymar, Mbape e Di Maria",
        titulo: "Em breve! FIFA 22",
        descricao: "Novo FIFA mergulha na nova geração de consoles e, como de costume, parece solucionar grandes problemas do anterior.",
        link_news: "#"
    },
    {
        imagem: "./img/free_fire_favela.png",
        img_alt: "imagem de flyer da campeonato Free Fire Taça das Favelas",
        titulo: "Free Fire: Taça das Favelas",
        descricao: "Nova edição da Taça das Favelas terá repescagem e premiação de mais de R$ 100 mil e bootcamp na LOUD.",
        link_news: "#"
    },
    {
        imagem: "./img/re4-vr.png",
        img_alt: "imagem dos personagens do jogo Resident Evil 4",
        titulo: "Em breve! Resident Evil 4 VR",
        descricao: "O jogo será lançado em 21/10 para Oculus Quest 2. A data foi anunciada por meio de  trailer inédito divulgado nesta 2ª (27).",
        link_news: "#"
    }
]


// let listaNoticias = [
    //         {
    //             imagem: "./img/copa_rakin_valorant.png",
    //             img_alt: "imagem de flyer da Copa Rakin de Valorant: chegou o momento",
    //             titulo: "Copa Rakin",
    //             descricao: "Com foco em mulheres, trans e não-binários e prêmios de R$ 40 mil",
    //             link_news: "#"
    //         },
    //         {
    //             imagem: "./img/fifa22.png",
    //             img_alt: "imagem de anúncio do Jogo Fifa 22 com jogadores do Paris Saint Germain perfilados: Neymar, Mbape e Di Maria",
    //             titulo: "FIFA 22",
    //             descricao: "Novo FIFA mergulha na nova geração de consoles",
    //             link_news: "#"
    //         },
    //         {
    //             imagem: "./img/free_fire_favela.png",
    //             img_alt: "imagem de flyer da campeonato Free Fire Taça das Favelas",
    //             titulo: "Taça das Favelas",
    //             descricao: "Competição de Free Fire terá premiação de mais de R$ 100 mil e bootcamp.",
    //             link_news: "#"
    //         },
    //         {
    //             imagem: "./img/re4-vr.png",
    //             img_alt: "imagem dos personagens do jogo Resident Evil 4",
    //             titulo: "Resident Evil 4 VR",
    //             descricao: "O jogo será lançado em 21/10 para Oculus Quest 2. Veja trailer.",
    //             link_news: "#"
    //         }
    //     ]


// // DOM = Document Object Model
// // RegEx - expressões regulares (máscaras, ex: CPF)


function renderizarNoticias() {

    let news_space = document.getElementById("news_space")
    
    let template ="";
    
    for (let index = 0; index < listaNoticias.length; index++) {

        const noticia = listaNoticias[index];
        
        template += `<div class="card-news">
        <a href="${noticia.link_news}"><img src="${noticia.imagem}" alt="${noticia.img_alt}"></a>
        <h3>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
        <a href="${noticia.link_news}">Ler notícia</a>
    </div>`
        // template += -> template = template + X
        // alterar div -> ${noticia.titulo} ; ${noticia.descricao} ; ${noticia.imagem}
    }

    news_space.innerHTML = template
    // chamar renderizarNoticias onload
}