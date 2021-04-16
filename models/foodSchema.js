const mongoose = require ("mongoose")

const foodSchema = mongoose.Schema({
    day:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    }
},{
    timestamp:true
})

const Food = mongoose.model("Food", foodSchema)
module.exports = Food;