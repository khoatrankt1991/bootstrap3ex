var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('views', 'view');
app.set('view engine', 'ejs');
app.get('/', (req, res)=>res.render('template1'));
app.listen(3000, function(e) {
    console.log("Server is starting in PORT 3000");
});
