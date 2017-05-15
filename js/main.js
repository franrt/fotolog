function agregaPosteo() {
    //rescataremos el contenedor-posteos, nombre y comment del usuario
    var containerPosteos = document.getElementById("contenedor-posteos");
    var nombreFF = document.getElementById("nombre").value;
    var contenidoFF = document.getElementById("cajaposteos").value;

    //creamos nodo elemento donde irá el post
    var nuevoPost = document.createElement("div");

    //crearemos elementos donde guardaremos los valores
    var contenedorNombre = document.createElement("strong");
    var contenedorPost = document.createElement("p");
    var separacion = document.createElement("hr");

    //crearemos elemento para corazon
    var parrafCorazon = document.createElement("p");
    var i = document.createElement("i");

    //asignamos padre a icono de corazon
    parrafCorazon.appendChild(i);

    //damos atributos a <3
    parrafCorazon.setAttribute("class", "corazon");
    i.setAttribute("class", "fa fa-heart");
    i.setAttribute("arial-hidden", "true");

    //ahora transformamos nombre a nodo texto
    var nodoNombre = document.createTextNode(nombreFF + " escribió:");
    var nodoPosteo = document.createTextNode(contenidoFF);

    //asignaremos padres a los nodos creados
    contenedorNombre.appendChild(nodoNombre);
    contenedorPost.appendChild(nodoPosteo);

    //ahora asignamos padres a nombre y contenido
    nuevoPost.appendChild(contenedorNombre);
    nuevoPost.appendChild(contenedorPost);
    nuevoPost.appendChild(parrafCorazon);
    nuevoPost.appendChild(separacion);

    //crearemos funcion click para el corazon y le asignamos la clase rojo de css
    i.addEventListener("click", function() { //hace q el evento esté "atento" a la interaccion del usuario
        i.classList.toggle('rojo'); //toggle: si el elemento tiene la clase se la quita, de lo contrario se la agrega
    });

    //daremos atributos al post y lo agregamos a contenedor-posteos
    nuevoPost.setAttribute("class", "posteo");
    containerPosteos.appendChild(nuevoPost);

    //para resetear campos y dejarlos nuevamente en blanco
    document.getElementById("nombre").value = "";
    document.getElementById("cajaposteos").value = "";
}