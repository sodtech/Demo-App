import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    usertype: {
        type: String,
        default:"customer"
    },
    password: {
        type: String
    },
    email: {
        type: String            
    },
    gender: {
        type: String            
    },
    phone: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});