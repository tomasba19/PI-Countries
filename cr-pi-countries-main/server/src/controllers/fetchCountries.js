const axios = require("axios");
const URL = "http://localhost:5000/countries";
const { Country } = require("../db");


const saveCountriesDatabase = async (req, res) => {
    try {
        const { data } = await axios(URL) //Hago peticion a la API, y le hago destructuring
        await Promise.all( //Esto se usa para esperar que se resuelvan las promesas que retorna el map
            data.map(async(country) => {
                let{cca3, name, flags, continents, capital, subregion, area, population } = country
                if(!capital) capital =["unknown"];
                await Country.create({
                    id: cca3,
                    name: name.common,
                    flagImage: flags.png,
                    continent: continents[0],
                    capital: capital[0],
                    subregion: subregion,
                    area: area,
                    population: population,
                });
            })
        );
        console.log('Countries has been added to the Data Base');
    } catch (error) {
        console.error('Failed to fill up the Data Base', error.message);
    }
};


module.exports ={ 
    saveCountriesDatabase,
};
