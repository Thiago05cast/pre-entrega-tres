let lista = [];




function agregarLista(e){
    //console.log("apuesta hecha", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    let bisabuelo = abuelo.parentNode;

    //console.log(bisabuelo);
    let resultado = padre.querySelector("label").textContent;

    let encuentro = bisabuelo.querySelector("h3").textContent;


    let apuestaHecha = {
        equipo: resultado,
        enfrenamiento: encuentro,
    };

    

    
    lista.push(apuestaHecha );
    

    //console.log(resultado);
    console.log(lista);
    //console.log(encuentro);

    

    agregarALista();
}

function agregarALista(){

    let aside = document.getElementById("miApuesta");

    aside.innerHTML = "";

    for(let apuestaHecha of lista){

        let fila = document.createElement("tr");
        fila.innerHTML = `<td><h5>Tu apuesta en el partido</h5></td>
                        <td><h6>${apuestaHecha.enfrenamiento}</h6></td>
                        <td><h5>fue</h5></td>
                        <td><h6>${apuestaHecha.equipo}</h6></td> 
                        <td><button class="btn btnEliminar">X</button></td>`
        aside.append(fila);
    }

    //borrar elemento = btnEliminar


    let btnBorrar = document.querySelectorAll(".btnEliminar");

    

    for(let btn of btnBorrar){

        btn.addEventListener("click", borrarApuesta);
    }


}



function borrarApuesta(e){

        console.log("elemento eliminado", e.target);
        let abuelo = e.target.parentNode.parentNode;

        abuelo.remove();

    let apuestaEliminar = abuelo.querySelector("h6").textContent;
    


    function sacarDeLista (apuestaHecha){

        return apuestaHecha.enfrenamiento != apuestaEliminar
    }

    let apuestaEliminada = lista.filter(sacarDeLista);
    lista = apuestaEliminada;
    console.log(lista);


}








let btnEnvio = document.querySelectorAll(".btn-check");

console.log(btnEnvio);

for( let eleccion of btnEnvio){

    eleccion.addEventListener("click", agregarLista);
    
}









miApuesta.style.display = "none";



let btnApuesta = document.getElementById("mostrar");

btnApuesta.addEventListener("click", function(){

    let miApuesta = document.getElementById("miApuesta");

    if( miApuesta.style.display != "none"){
        
        miApuesta.style.display = "none";
    }

    else{
        miApuesta.style.display = "block";
    }
})


    let btnAlert = document.getElementById("btnSimular");

        btnAlert.addEventListener("click" , function(){
    

    Swal.fire({
            title: "Apuesta Acertada",
            text: "Tu/s resultado/s fueron correctos",
            imageUrl: "https://logowik.com/content/uploads/images/check-mark5049.logowik.com.webp",
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: "Custom image",
            innerHTML: `<td><h5>Tu apuesta en el partido</h5></td>`
        })
})





        










for(let apuestaHecha of lista){



    let listaJson = JSON.stringify(lista);


        console.log(listaJson);

        localStorage.setItem("listaReparada", listaJson);

        let recuperoLista = localStorage.getItem("listaReparada");

        console.log(recuperoLista);

        recuperoLista = JSON.parse( recuperoLista );

        console.log(recuperoLista);
}

let listaJson = JSON.stringify(lista);


        console.log(listaJson);

        localStorage.setItem("listaReparada", listaJson);

        let recuperoLista = localStorage.getItem("listaReparada");

        console.log(recuperoLista);

        recuperoLista = JSON.parse( recuperoLista );

        console.log(recuperoLista);






