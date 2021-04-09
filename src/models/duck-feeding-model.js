
const mongoose = require('mongoose')

// duck feeding model to save data
// submitted from the form to the database
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
    foodKind: {
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

module.exports = DuckFeeding