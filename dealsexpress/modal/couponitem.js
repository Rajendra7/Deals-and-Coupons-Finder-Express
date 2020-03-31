const mongoose =  require('mongoose');

const couponItemSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    heading : {
        type : String,
        required : true
    },
    terms : {
        type : String,
        required : true
    }

});

const Item = module.exports = mongoose.model('Item', couponItemSchema);