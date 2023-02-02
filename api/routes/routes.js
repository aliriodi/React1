const appRouter = (app, fs) => {
    // load up our shiny new route for users
const dbjson = require('./db1');
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de desarrollo de Jose');
  });

  // run our user route module here to complete the wire up
  dbjson(app, fs);
};


module.exports = appRouter;