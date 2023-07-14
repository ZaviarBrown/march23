const loadApp = () => {
    const name = document.getElementById("name");
    const select = document.querySelector("#type");
    const add = document.getElementById("add");

    add.addEventListener("click", (e) => {
        e.preventDefault();

        const li = document.createElement("li");

        li.innerText = name.value;
        li.dataset.type = select.value;
        // li.setAttribute("data-type", select.value);

        const ul = document.querySelector("ul");
        ul.appendChild(li);

        name.value = "";
        select.value = "dairy";
    });
};

document.addEventListener("DOMContentLoaded", loadApp);
