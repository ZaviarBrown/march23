export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    return document.getElementById(id);
}

export function findFirstElementOfTag(tag) {
    // Return the first occurrence of an element of tag name `tag`
    return document.getElementsByTagName(tag)[0];
}

export function findFirstElementOfClass(cls) {
    // Return the first occurrence of an element of class `cls`
    return document.querySelector("." + cls);
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    return Array.from(document.querySelectorAll(tag));
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    return Array.from(document.getElementsByClassName(cls));
}
