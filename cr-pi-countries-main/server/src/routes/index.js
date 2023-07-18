const { Router } = require("express");
const router = Router();
const countriesRouters = require("./countriesRouters")
const activitiesRouters =  require("./activitiesRouters")

router.use("/countries", countriesRouters);
router.use("/activities", activitiesRouters);

module.exports = router;
