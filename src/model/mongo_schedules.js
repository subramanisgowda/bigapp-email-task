const mongoose = require('mongoose');
const validator = require('validator')

const mongo_db = require('../config/mongo_connc');

const schedule_schema = mongoose.Schema({
    schedule_group:{
        type:String,
        required:true
    },
    schedule_time:{
        type:String,
        required:true,
    },
    mail_details:{
    mail_to : {
        type: String,
        trim: true,
        lowercase: true,
        required:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    subject:{
        type: String,
        required:true,
    },
    body_text:{
        type: String,
        required:true,
    }
},

});

const schedule_status_schema = mongoose.Schema({
    schedule_group:{
        type:String,
        required:true
    },
    mail_details:{
    mail_to : {
        type: String,
        trim: true,
        lowercase: true,
        required:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    subject:{
        type: String,
        required:true,
    },
    body_text:{
        type: String,
        required:true,
    }
    
},
status:{
    type:String,
    required:true,
},
created_date: { type: Date, default: Date.now }
});

const schedule_modle = mongoose.model('scheduling_details',schedule_schema);
const schedule_status_modle = mongoose.model('scheduling_status_details',schedule_status_schema);


module.exports = {
    schedule_modle,
    schedule_status_modle
};