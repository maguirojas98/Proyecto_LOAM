const express = require("express");
var cors = require('cors')


require("dotenv").config();
const bcrypt = require("bcryptjs");

const usuarios = require("./controllers/usuario.controller.js");
const auth = require("./middleware/auth");
const comentarios = require('./controllers/comentarios.controller.js');



const app = express();
const {API_PORT} = process.env;
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "hola soy el api node." });
});

app.get("/api/generarclave/:clave", (req, res) => {

    const rondasDeSal = 10;
    bcrypt.hash(req.params.clave, rondasDeSal, (err, palabraSecretaEncriptada) => {
      if (err) {
        console.log("Error hasheando:", err);
        res.json({
          "Error hasheando:": err
        });    
      } else {
        console.log("Y hasheada es: " + palabraSecretaEncriptada);
        res.json({
          'clave': req.params.clave,
          'encriptada': palabraSecretaEncriptada,
        });    
      }
    });
  });
  
  app.post("/login", usuarios.login);
  
  app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  app.post("/comentarios", comentarios.create);


  app.post("/sign", usuarios.create);

  app.get("/solologueado", auth,(req, res) => {
    res.json({ message: "hola solo si estas logueado me ves." });
  });
  
  
const PORT = process.env.PORT || API_PORT
app.listen(PORT, '192.168.0.108', () => {
  console.log(`Server is running on port 3001.`);
});