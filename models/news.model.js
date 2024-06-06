const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const NewsSchema = new Schema({
    tittle:{
        type: String,
        required: true
    },
    body:{
        type:String,
        required: true
    },
    date:{
        type: String,
        required: true
    },

    hidden:{
        type: Boolean,
        default: false
    },

    images: {
        type: [String],
        default: [],
        required: false
    }
},{ timestamps: true })

module.exports = Mongoose.model("News", NewsSchema);
