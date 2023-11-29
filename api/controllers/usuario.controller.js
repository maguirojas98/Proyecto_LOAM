const sql = require("../db/db.js");
const jwt = require("jsonwebtoken");
exports.create = (req,res)=>{
  const sqlp = "INSERT INTO usuario (`email`,`password`) VALUES (?)";
  const values =[
    req.body.email,
    req.body.password
  ] 
  console.log(values);
  sql.query(sqlp,[values],(err, data)=>{
    if(err){
      console.log("error");
    }
     return res.json(data);
  })
  

}


exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);

    await sql.query(`SELECT * FROM usuario WHERE email = '${email}'`, async (err, resSql) => {

        if (err) throw (err)
            if (resSql.length == 0) {
                res.status(404).send("usuario no encontrado");
            }
            else {
              //console.log("paso")
                const usuario = resSql[0];
                console.log(password)
                // comparo el hash q viene con el de la bd
                if(password == usuario.password){
                
                //crear token
                 // 1er param: info que va a guardar 
                 // 2do : llave para encriptar (luego hacer lo mismo q hicimos c port en .env)
                    const token = jwt.sign({user_id:usuario.id,user_mail:usuario.mail},'llave');
                    usuario.token = token;
                    sql.query(
                        "UPDATE usuario SET token = ? WHERE id = ?",
                        [usuario.token, usuario.id],
                        (err, res) => {
                          if (err) {
                            console.log("error: ", err);
                          }
                          if (res.affectedRows == 0) {
                            result({ kind: "not_found" }, null);
                          }
                        }
                      );
                    res.status(200).json(usuario);
                }
            }//end of User exists i.e. results.length==0
        }) //end of connection.query()
};