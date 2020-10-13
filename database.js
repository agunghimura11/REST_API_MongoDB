import mongoose, { mongo } from 'mongoose';

const homeworkSchema = mongoose.Schema (
    {
        course: {
            type : String,
            require: true,
        },
        title : {
            type: String,
            required: true,
        },
        due_date : {
            type: Date,
            required: true,
        },
        status : {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    }
)

const Homework = mongoose.model('Homework', homeworkSchema)

export default Homework