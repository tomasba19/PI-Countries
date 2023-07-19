const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { saveCountriesDatabase } = require('./src/controllers/fetchCountries')


conn.sync({ force: true }).then(async() => {
await saveCountriesDatabase() // se guardan los datos de la api
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
