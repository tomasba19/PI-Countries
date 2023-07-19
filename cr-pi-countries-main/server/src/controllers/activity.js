const { Activity, Country } = require("../db");

const getActivities = async(req, res) =>{
    try {
        const activities = await Activity.findAll()
        return res.status(200).json(activities)

    } catch (error) {
        return res.status(500).send({error: error.message})
    }
};

const postActivities = async(req, res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body
        if(!name || !difficulty|| !duration|| !season|| !countries.length) throw new Error("Missing info")

        const newActivity = await Activity.create({
            name:name,
            difficulty: difficulty,
            duration: duration,
            season: season,
        })
        const relacionar = await Country.findAll({
            where:{
                id: countries
            }
        });
        await newActivity.setCountries(relacionar)
        if (!newActivity) throw new Error("Missing Countries")

        return res.status(200).json(newActivity)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


module.exports = {
    getActivities,
    postActivities,
}