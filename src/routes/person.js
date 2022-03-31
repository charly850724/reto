const { Router } = require("express");
const { getPersonUrl } = require("../person");

const router = Router();

// get url
router.get("/person/:id", getPersonUrl);

module.exports = router;
