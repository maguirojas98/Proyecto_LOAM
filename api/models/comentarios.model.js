const sql = require("../db/db.js");

const Comentarios = function (comentario) {
    this.user = comentario.user;
    this.texto = comentario.texto;
};



Comentarios.getAll = (result) => {
    let query = "SELECT * FROM comentarios";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Comentarios: ", res);
        result(null, res);
    });
};

module.exports = Comentarios;
