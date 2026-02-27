import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function createVideos(event) {
    event.preventDefault();

    const image = document.querySelector("[data-image]").value;
    const url = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-title]").value;
    const desc = Math.floor(Math.random() * 10).toString();

    try {
        await connectApi.createVideos(title, desc, url, image);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

form.addEventListener("submit", event => createVideos(event))
