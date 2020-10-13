import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:Ari_kalem11@cluster0.wkcil.mongodb.net/dts?retryWrites=true&w=majority&ssl=true',{ // tambahkan &ssl=true
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, db) => {
    if (err) throw err
    console.log('Db-',db)
})

const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req,res,next) => {
    res.json({
        message : 'success'
    })
})

import router from './router.js'

app.use ('/api', router)

app.listen("8080", () => {
    console.log('App listen to port 8080')
})