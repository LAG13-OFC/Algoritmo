document.querySelector("button").onclick = function () {
    let ul = document.createElement("ul");
    let contenedor = document.querySelector("#caja");
    contenedor.appendChild(ul);

    for (let i = 0; i <10 ; i++) {
        let li = document.createElement("li");
        li.innerText = i;
        let contenedor2 = document.querySelector("ul");     
        contenedor2.appendChild(li);
    }

};