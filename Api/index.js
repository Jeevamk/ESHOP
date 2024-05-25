const express = require ('express')
const app = express()
const PORT = process.env.PORT || 8001;
const morgan = require('morgan')




app.listen(PORT,()=>{console.log(`app running on port ${PORT}`)})