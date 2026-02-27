import { connectApi } from "./connectApi.js";   

const list = document.querySelector("[data-list]");

export default function buildCard(title, desc, url, image) {
    const video = document.createElement("li");
    video.className = "item_videos";
    video.innerHTML =  `<iframe width="100%" height="72%" src="${url}"
                title="${title}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${image}">
                <h3>${title}</h3>
                <p>${desc}</p>
            </div>`
    return video;
}

async function listVideos() {
    try {
    const listApi = await connectApi.listVideos();
    listApi.forEach(element => list.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem)));
    } catch {
        lista.innerHTML = "<h2> class='Não foi possível carregar a lista de vídeos'</h2>"
    }
}

listVideos();