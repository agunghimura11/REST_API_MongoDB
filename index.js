import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGODB_URI,{ // tambahkan &ssl=true
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, db) => {
    if (err) throw err
    console.log('Error -', err )
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

app.listen(process.env.PORT, () => {
    console.log('App listen to port 8080')
})