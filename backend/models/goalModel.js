const mongoos = require('mongoose')

const goalSchema = mongoos.Schema({
    user:{
        type: mongoos.Schema.Types.ObjectId,
        required : true,
        ref: 'user'
    },
    text:{
        type: String,
        required : [true, 'Please Enter a text value']
    }
}, {
    timestamps: true
})

module.exports = mongoos.model('Goal', goalSchema)