import express from 'express'
import {config} from 'dotenv'


// configDotenv().PORT

config()

const PORT = process.env.PORT
const app = express()

app.get('/', (req,res) =>{
    res.send('holaaaaa pibardoooo')
})

app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto:${PORT}` )
})

