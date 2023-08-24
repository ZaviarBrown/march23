// configure environment - DO NOT MODIFY
require("dotenv").config();

// Import package

const jwt = require("jsonwebtoken");

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

token = jwt.sign(
    { email: "zb@aa.io", location: "az" },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
);

// See the JWT in the console - DO NOT MODIFY
console.log("JWT:", token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log("Payload:", payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

const badToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InpiQGFhLmlvIiwibG9jYXRpb24iOiJ3YSIsImlhdCI6MTY5MjkxOTU2MiwiZXhwIjoxNjkyOTIzMTYyfQ.qD0Ar1DGZmG1TdayjhI8ebW_fI9i6BXrhF774ObIQSA";

const otherBadToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InpiQGFhLmlvIiwibG9jYXRpb24iOiJ3YSIsImlhdCI6MTY5MjkxOTU2MiwiZXhwIjoxNjkyOTIzMTYyfQ.L3rSdHJD7i30o5KJGFa0R6TuFYePcCARD3YIUfb8TZI";

verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);
// verifiedPayload = jwt.verify(badToken, process.env.SECRET_KEY);
// verifiedPayload = jwt.verify(otherBadToken, process.env.SECRET_KEY);

// See the verified payload in the console - DO NOT MODIFY
console.log("Verified Payload:", verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here
