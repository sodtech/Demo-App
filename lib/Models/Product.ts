import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const productSchema = new Schema({

    productID: {
        type: Number 
    },
    productName: {
        type: String
    },
    price: {
        type: Number            
    },
    description: {
        type: String                      
    },
    quantity: {
        type : Number                     
    },
    addedby: {
        type: String                      
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});