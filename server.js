const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

//app.use('/',express.static('public'));
app.use(cors());

const budget ={
    myBudget: [
        {
            title:"Eat Out",
            budget: 25
        },
        {
            title:"Rent",
            budget:275
        },
        {
            title:"Grocery",
            budget: 110
        },
    ]
};




app.get('/budget',(req,res)=>{
    res.json(budget);
});


app.listen(port,()=>{
    console.log(`API served at http://localhost:${port}`);
});