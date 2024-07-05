document.querySelector("button").onclick = function() {

    let url = document.querySelector("#url").value;
    let texto = document.querySelector("#texto").value;
    let img = document.createElement("img");
    img.src = url;
    img.alt = texto;
    document.body.appendChild(img);
}