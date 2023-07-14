export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    const title = document.querySelector("title");
    title.innerText = "Z's Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    const h1 = document.querySelector("h1");
    h1.innerText = "I am Zaviar";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    const aboutMeSection = document.querySelector(".section");
    const p = aboutMeSection.querySelector("p");
    // const p = aboutMeSection.children[1];

    p.innerText = "I can't be bother to actually write antyhing";
}
