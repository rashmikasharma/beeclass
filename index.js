const express = require('express');
const moogose = require('mongoose');
const User=require('./models/User');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.json({message:"ok"})
})
app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/blogs'.require('./routes/blogRoutes'));
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>console.log('DB connected'))
app.listen(5565,()=>{
    console.log('Server is running on port 5565');
})