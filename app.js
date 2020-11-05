const express = require ('express');
const bodyParser = require('body-parser');
app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

app.get('/',(req,res)=>
{

    res.render("list",{date:date});
}
);



app.listen(3000,(req,res)=>
{
    console.log("serverrunning at 3000");
}

);
