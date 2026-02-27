async function listVideos() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertedConnection = await connection.json();
    return convertedConnection;
}

async function createVideos(title, desc, url, image) {
    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${desc} mil visualizações`,
            url: url,
            imagem: image   
        })
    });    
    if (!connection.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    const convertedConnection =  connection.json();
    return convertedConnection;
}

async function searchVideo(searchText) {
    const connection = await fetch(`http://localhost:3000/videos?q=${searchText}`);
    const convertedConnection = await connection.json();

    return convertedConnection;
}

export const connectApi = {
    listVideos,
    createVideos,
    searchVideo
}