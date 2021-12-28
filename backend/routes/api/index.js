const router = require('express').Router();
const board = require('./board'); //board router 호출
const lg = require('./login')
const li = require('./list')

router.all('*', (req, res, next) => {
    console.log("path=" + req.path);
    next();
})

router.get("/signup/:id/:pwd/:name/:email/:companyname", lg.signup);

router.get("/login/:id/:password", lg.login);

router.get("/login/:id", lg.id_overlap_search);

router.get("/email/:email", lg.email);

router.get("/list", li.list)

router.use("/board", board); //board router 적용

router.all('*', (req, res) => {
    res.status(404).send({success: false, msg: `api unknown uri ${req.path}`});
})

module.exports = router;