import { connectApi } from "./connectApi.js";
import buildCard from "./showVideos.js";

async function searchVideo(event) {
    event.preventDefault();
    const searchData = document.querySelector("[data-search]").value;
    const search = await connectApi.searchVideo(searchData);

    const list = document.querySelector("[data-list]")

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(video => list.appendChild(
        buildCard(video.titulo, video.descricao, video.url, video.imagem)))

    if (search.length == 0) {
        list.innerHTML = `<h2 class="mensagem_titulo>Não existem vídeos com esse termo</h2>"`
    }
}

const searchButon = document.querySelector("[data-search-buton]");

searchButon.addEventListener("click", event => searchVideo(event))