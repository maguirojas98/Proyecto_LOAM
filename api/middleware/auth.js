const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    console.log(token);
    const decoded = jwt.verify(token, 'key');
    console.log(decoded);
    //podria guardar la session o actividad del usuario
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;