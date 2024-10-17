// Langkah-langkah instalasi Express JS
// 1. npm init
// 2. npm install express nodemon
// 3. buat server localhostnya
// 4. jangan lupa untuk menambahkan konfigurasi "start" pada package.jsonnya karena nanti jalanin express dengan npm start
// 5. jalanin dengan npm start

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);