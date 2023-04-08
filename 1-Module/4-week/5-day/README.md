# Review for Assessment

## Array destructuring to swap elements

```js
let num = 5;

let str = "hello";

[num, str] = [str, num];
```

## .toFixed()

## IMPORTANT DISTINCTION - Whose scope is the difference maker?

```js
function exampleOne() {
  let dataArray = [53, false, "admin"];

  if (dataArray.length > 0) {
    let dataArray = [{ userName: "DemoUser", password: "bad_password_123" }];
    dataArray.push(262);
  }

  dataArray.push(NaN);
  return dataArray;
}

console.log(exampleOne());
```

```js
function exampleTwo() {
  var dataArray = [53, false, "admin"];

  if (dataArray.length > 0) {
    let dataArray = [{ userName: "DemoUser", password: "bad_password_123" }];
    dataArray.push(262);
  }

  dataArray.push(NaN);
  return dataArray;
}

console.log(exampleTwo());
```

```js
function exampleThree() {
  var dataArray = [53, false, "admin"];

  if (dataArray.length > 0) {
    var dataArray = [{ userName: "DemoUser", password: "bad_password_123" }];
    dataArray.push(262);
  }

  dataArray.push(NaN);
  return dataArray;
}

console.log(exampleThree());
```
