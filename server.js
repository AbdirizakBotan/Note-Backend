const express = require ("express")
const mongoose = require("mongoose")
const cors = require ("cors")
const app = express()
app.use(express.json())
app.use(cors())


//connecting to the database

//export routes 
const noteRoute = require("./Routes/noteRoute")
app.use(noteRoute)

mongoose.connect("mongodb+srv://abdirizakgabaxey:2c2j4Cp2oetLFafF@note.gnz8qlv.mongodb.net/?retryWrites=true&w=majority&appName=Note").then(()=>{
    console.log("Database Connected Successfully")
}).catch((error)=>{
    console.log(error)
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})