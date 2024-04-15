const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register',(req,res)=>{
    const{username,password} = req.body;
    res.json({requestData:{username,password}});
});
app.listen(4000); 

//mongodb+srv://Somaansh:<password>@cluster0.zqilzug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//qSA8YMZf3gaN6MwR