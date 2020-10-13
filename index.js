import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:Ari_kalem11@cluster0.wkcil.mongodb.net/dts?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connect DB success')
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

app.listen("3000", () => {
    console.log('App listen to port 3000')
})