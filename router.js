import express from 'express'
import { Homework } from './database.js'

const router = express.Router()

export default router

router.post('/homeworks', async (req, res) => {
    try {
      const {
        course,
        title,
        due_date,
        status,
      } = req.body;
    
      const homework = new Homework({
        course,
        title,
        due_date,
        status,
      });
    
      const createdHomework = await homework.save();
    
      res.status(201).json(createdHomework);
    } catch (error) {
      res.status(500).json({ error: 'Database creation failed' })
    }
});
  

router.get('/homework', async (req,res) => {
    const homework = await Homework.find({})

    if(homework) {
        res.json(homework)
    } else {
        res.status(404).json({
            message: 'Homework not found'
        })
    }
})

router.get('/homeworks/:id', async (req,res) => {
    const homework = await Homework.findById(req.params.id)

    if(homework){
        res.json(homework)
    }else{
        res.status(404).json({
            message: 'Homework not found'
        })
    }
})


router.put('/homeworks/:id', async (req,res) => {
    const {
        course,
        title,
        due_date,
        status,
    } = req.body

    const homework = await Homework.findById(req.params.id)

    if(homework) {
        homework.course = course
        homework.title = title
        homework.due_date = due_date
        homework.status = status

        const updateHomework = await homework.save()
        res.json(updateHomework)
    } else {
        req.status(404).json({
            message: 'homework not found'
        })
    }
})

router.delete('/homeworks/:id', async(req,res)=> {
    const homework = await Homework.findById(req.params.id)

    if(homework){
        await homework.remove()
        res.json({
            message: 'homework removed'
        })
    }else{
        res.status(404).json({
            message: 'homework not found'
        })
    }
})