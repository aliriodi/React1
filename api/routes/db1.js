const dbRoutes = (app, fs) => {
    // variables
    const dataPath = './data/db.json';
      // READ
      //EN ESTA RUTA TE CARGO EL ARCHIVO /data/db.json como una API
      // http://localhost:3001/db
  app.get('/db', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      JSON.parse(data).Cards.length ? 
            res.status(200).json(JSON.parse(data)) :
            res.status(404).send("No se encuentran datos");
       });
  });
};
module.exports = dbRoutes;