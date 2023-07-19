const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll()

        return res.status(200).json(countries)

    } catch (error) {
        return res.status(500).send({error: error.message})
    }
};

const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params;
        const country = await Country.findOne({ 
            where: { 
                id: idPais 
            },
            include: Activity // obtengo las actividades relacionadas a ese id
             
         }); 
        if(!country) throw new Error("Country not found")
        
        return res.status(200).json( country ) // devuelvo el pais con su actividad
    } catch (error) {
        console.error('Failed to obtain country details', error);
        return res.status(500).send({ error: error.message})
    }
};


const getCountryByName = async(req, res) => {
    try {
        const { name } = req.query

        const country = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `${name}%`
//se utiliza para buscar registros en una columna que comiencen con 
// un valor específico ( name  en este caso), sin importar las mayúsculas o minúsculas.
                }
            }
        })
        if(country.length === 0) return res.status(404).json({ message: 'Not found' });
        return res.status(200).json(country)
    } catch (error) {
        
        return res.status(500).send({message: "Error while looking for Country"})
    }
}


module.exports = {
    getCountries,
    getCountryById,
    getCountryByName,
}