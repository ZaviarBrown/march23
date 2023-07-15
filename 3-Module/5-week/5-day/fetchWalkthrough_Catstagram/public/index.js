window.onload = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const url = data[0].url;

    const newCat = document.createElement("img");

    newCat.src = url;

    document.body.appendChild(newCat);
};

// //! One line as requested
// window.onload = () => fetch("https://api.thecatapi.com/v1/images/search").then((res) => res.json()).then((res) => res[0].url).then((url) => ({ img: document.createElement("img"), url })).then((data) => data.img.setAttribute("src", data.url) || data).then((data) => document.body.appendChild(data.img));
