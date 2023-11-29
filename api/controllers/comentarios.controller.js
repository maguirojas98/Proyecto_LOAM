const Comentarios = require("../models/comentarios.model.js");
const sql = require("../db/db.js");
exports.create = (req,res)=>{
  const sqlp = "INSERT INTO comentarios (`user`,`texto`) VALUES (?)";
  const values =[
    req.body.user,
    req.body.texto
  ] 
  console.log(values);
  sql.query(sqlp,[values],(err, data)=>{
    if(err){
      console.log("error");
    }
     return res.json(data);
  })
  

}

exports.list = (req, res) => {
  console.log("entro");
  Comentarios.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al buscar los comentarios."
      });
    } else {
      res.send({ status: 200, data: data });
    }
  });
};
