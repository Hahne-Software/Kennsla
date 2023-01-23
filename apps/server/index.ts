import express from "express";

console.log("Hello World");

// init and start express server
const app = express();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});