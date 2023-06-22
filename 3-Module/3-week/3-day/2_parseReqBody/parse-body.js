function firstStep(input) {
    return input.split("&");
}

function secondStep(input) {
    return input.map((keyValPair) => keyValPair.split("="));
}

function thirdStep(input) {
    return input.map(([key, value]) => {
        if (value.includes("+")) {
            value = value.split("+").join(" ");
        }

        return [key, value];
    });
}

function fourthStep(input) {
    return input.map(([key, value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
    const response = {};

    for (const [key, value] of input) {
        response[key] = value;
    }

    return response;
}

function parseBody(str) {
    const first = firstStep(str);
    const second = secondStep(first);
    const third = thirdStep(second);
    const fourth = fourthStep(third);
    return fifthStep(fourth);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
    firstStep,
    secondStep,
    thirdStep,
    fourthStep,
    fifthStep,
    parseBody,
};
