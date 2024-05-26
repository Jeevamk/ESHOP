const express = require ('express')
const app = express()
const PORT = process.env.PORT || 8001;
const morgan = require('morgan')
const dotenv = require('dotenv').config({path:'config.env'})
const path = require('path')


app.get('/',(req,res)=>{
    res.status(200).json({'message':'success'})
})




app.listen(PORT,()=>{console.log(`app running on port ${PORT}`)})