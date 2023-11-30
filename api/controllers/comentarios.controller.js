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

