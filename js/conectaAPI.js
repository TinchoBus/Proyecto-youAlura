async function listaVideos(){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
/*     console.log(conexion);
    console.log(conexionConvertida); */
    return conexionConvertida;
}

async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion= await fetch("http://localhost:3001/videos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        titulo:titulo,
        descripcion:`${descripcion} mil visualizaciones`,
        url:url,
        imagen:imagen
    })
    })

    const conexionConvertida = conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha courrido un error al enviar el video");
        
    }

    return conexionConvertida;
}

async function buscarVideo(referencia){
    const conexion=await fetch(`http://localhost:3001/videos?q=${referencia}`)
    const conexionConvertida=conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listaVideos,enviarVideo,buscarVideo
}
