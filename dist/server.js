import app from "./src/app.js";
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Servidor funfando na porta: ".concat(port));
});
