const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/duck-feeding-schedule', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const DuckFeeding = mongoose.model('DuckFeeding', {
    feedingTime: {
        type: Date,
        required: true
    },
    foodType: {
        type: String,
        trim: true,
        required: true
    },
    duckCount: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Duck count must be positive')
            }
        }
    },
    foodAmount: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Food amount must be positive')
            }
        }
    },
    reOccurring: {
        type: Boolean,
        default: false
    },
    reOccurringPeriod: {
        type: String
    }
})

const duckFeedingInfo = new DuckFeeding({
    feedingTime: new Date(),
    foodType: 'irani',
    duckCount: 1,
    foodAmount: 2
})

duckFeedingInfo.save().then(() => {
    console.log(duckFeedingInfo)
}).catch(error => {
    console.log("Error!", error)
})