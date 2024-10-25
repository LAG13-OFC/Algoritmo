const url = "https://reqres.in/api/users";
const promesa = fetch(url);
promesa.then(res => res.json()).then(data => {
    const users = data.data;
    console.log(users);
    // obtener un vector solo con los nombres
    const names = users.map(user => user.first_name + " " + user.last_name);
    const avatares = users.map(user => user.avatar);
    const emails = users.map(user => user.email);
    console.log(names);

    const ul = document.createElement("ul");
    for(let i = 0; i < names.length; i++){
        const li = document.createElement("li");
        const img = document.createElement("img");
        const span = document.createElement("span");
        img.src = avatares[i];
        li.innerText = names[i];
        span.innerText = emails[i];
        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(span);

        document.body.appendChild(ul);
    }
    document.body.appendChild(ul);
}).catch(err => console.error(err))