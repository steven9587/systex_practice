const express = require('express');
const app = express();
const router = require('./router');

app.listen(2222, () => {
    console.log('Server is running on port 2222');
});

app.set('view engine', 'ejs');
app.use("/sources", express.static(`${__dirname}/node_modules`));
app.use("/assets", express.static(`${__dirname}/public`));
app.use('/', router.router);
// app.get('/', function(req, res){
//     res.render("index");
// });

app.get("/job/:type", (req, res)=>{
    res.render("job", {TYPE: req.params.type})
});

