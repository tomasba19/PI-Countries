const { Router } = require("express");
const { getCountries, getCountryById, getCountryByName } = require("../controllers/country");
const { postActivities, getActivities } = require("../controllers/activity");
const router = Router();

router.get("/countries", getCountries)
router.get("/countries/:idPais",getCountryById)
router.get("/countries/name", getCountryByName)
router.post("/activities", postActivities)
router.get("/activities", getActivities)


module.exports = router;
