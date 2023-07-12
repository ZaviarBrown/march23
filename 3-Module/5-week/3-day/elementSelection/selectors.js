const select = () => {
    /* Write queries for each of the following */
    /* 
        ? Section 1 
    */
    //!  1. Get all seeded fruit elements
    const seed = document.getElementsByClassName("seed");
    console.log(seed);

    //!  2. Get all seedless fruit elements
    const seedless = document.querySelectorAll(".seedless");
    console.log(seedless);

    //!  3. Get first seedless fruit element
    const firstSeedless = document.querySelector(".seedless");
    console.log(firstSeedless);

    /* 
        ? Section 2 
    */
    //!  4. Get inner span with text "you"
    const youSpan = document.querySelector("span");
    console.log(youSpan);

    // const you = Array.from(document.getElementsByTagName("span")).filter(
    //     (span) => span.innerText === "you"
    // )[0];
    // console.log(you);

    //!  5. Get all children of element "wrapper"
    const wrapper = document.getElementById("wrapper");
    console.log(wrapper.children);

    // const wrapperChildren = document.querySelectorAll("#wrapper > *"); // NodeList
    // console.log(wrapperChildren);

    //!  6. Get all odd number list items in the list
    const oddNums = document.getElementsByClassName("odd");
    console.log(oddNums);

    //!  7. Get all even number list items in the list
    const evenNums = document.querySelectorAll("#two li:nth-child(even)");

    // const orderedList = document.querySelector("ol");
    // const listNums = Array.from(orderedList.children);
    // const evenNums = listNums.filter((li) => li.className !== "odd");
    console.log(evenNums);

    /* 
        ? Section 3 
    */
    //!  8. Get all tech companies without a class name
    // const a = document.querySelector("a");
    // console.log(a);
    const nameless = Array.from(document.querySelectorAll("a")).filter(
        (a) => !a.className
    );
    console.log(nameless);

    //!  9. Get "Amazon" list element
    const amazon = document.querySelector(".shopping");
    console.log(amazon);

    //!  10. Get all unicorn list elements (not the image element)
    const ul = document.querySelector("#three ul");
    const unicorns = ul.children;
    console.log(unicorns);
};
window.onload = select;
