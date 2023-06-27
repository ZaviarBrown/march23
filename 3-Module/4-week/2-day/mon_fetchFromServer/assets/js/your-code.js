export function getAllDogs() {
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    return fetch("/dogs/2");
}

// export function postNewDog() {
//     const urlSearchBody = new URLSearchParams({
//         name: "DogMomo",
//         age: 13,
//     });

//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: urlSearchBody,
//     };

//     return fetch("/dogs", requestOptions);
// }

export function postNewDog() {
    return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            name: "DogMomo",
            age: 13,
        }),
    });
}

export function postNewDogV2(name, age) {
    return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ name, age }),
    });
}

export function deleteDog(id) {
    const token = "ckyut5wau0000jyv5bsrud90y";

    return fetch(`/dogs/${id}/delete`, {
        method: "POST",
        headers: {
            AUTH: token,
        },
    });
}
