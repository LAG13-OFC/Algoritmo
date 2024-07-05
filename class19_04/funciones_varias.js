
saludarA("Lucas");

function obtenerSaludo(nombre){
    return `Hola ${nombre}, Como estas?`;
}

function mostrarMsjPorConsola(Mensajes){
    console.info(Mensajes)
}

function saludarA(nombre){
    mostrarMsjPorConsola(obtenerSaludo(nombre));
}
