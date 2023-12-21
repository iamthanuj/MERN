const mongoos = require('mongoose')

const goalSchema = mongoos.Schema({
    text:{
        type: String,
        required : [true, 'Please Enter a text value']
    }
}, {
    timestamps: true
})

module.exports = mongoos.model('Goal', goalSchema)