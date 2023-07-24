const express = require('express');
const router = express.Router();

router.get('/:type/:name', function(req, res){
    res.render("job", {TYPE: req.params.type, NAME: req.params.name})
});

module.exports = router;