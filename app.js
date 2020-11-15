const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/listdb', {useNewUrlParser:true});

const itemschema ={
    name: String
};

const Item = mongoose.model("Item", itemschema);

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


app.get('/',(req,res)=>
{
    Item.find({},(err,found)=>
    {
        res.render("list",{date:date ,items1:found });

    });

    
}
);
app.post("/give",(req,res)=>
{
    var item= req.body.task;
    const data = new Item({
        name:item
    });
    
    data.save();
    
    res.redirect("/");
});
app.post("/delet",(req,res)=>
{
const id =req.body.check;

Item.findByIdAndRemove(id, (err)=>
{
    if(!err){
        console.log("delete successfully");
    }
});
res.redirect("/");


});

app.listen(3000,(req,res)=>
{
    console.log("serverrunning at 3000");
}

);
