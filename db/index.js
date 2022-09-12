const mongoose=require('mongoose')
require('dotenv').config()

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{console.log('Successful connection to MongoDB')})
    .catch((e)=>{console.error('Bad connection to MongoDB... Error:',e.message)})

mongoose.set('debug',true)
const db=mongoose.connection
module.exports=db
