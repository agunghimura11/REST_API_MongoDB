import express from 'express'
import morgan from 'morgan'

const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req,res,next) => {
    res.json({
        message : 'success'
    })
})

app.listen("3000", () => {
    console.log('App listen to port 3000')
})