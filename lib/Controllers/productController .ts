import * as mongoose from 'mongoose';
import { productSchema } from '../Models/Product';
import { Request, Response } from 'express';
import { Code } from 'mongodb';




const product = mongoose.model('product', productSchema);
export class productController
{
    public getproduct (req: Request, res: Response) {
        console.log("heloo")
        product.find({}, (err, product) => {
        if(err){
            res.json({success: false, status : res.status(404), message: 'not found'});
        }
        res.json({success: true,data: product});
    });
}

public getproductWithID (req: Request, res: Response){
    product.findOne({productID: req.params.productId}, function(err, product){
        if(err)
         {
            res.json({success: false, message: 'can not get prooduct'});
         }
         if(product === null )
         {
            res.json({success: false, message: 'product not found'});
         }
       else {
        res.json({success: true ,data: product});
            }
        }
    )}


public addNewproduct (req: Request, res: Response) {
    let newproduct = new product(req.body);

    newproduct.save((err, product) => {
        if(err){
            res.json({success: false, status : res.status(404), message: 'can not add prooduct'});
        }
        res.json({success: true,data: product});
    });
}

public updateProduct (req: Request, res: Response) 
    {
         product.findOne({productID: req.params.productId}, function(err, product1)
    {
        if(err)
                {
                    res.json({success: false, message: 'can not get prooduct'});
                }
         if(product1 === null )
                {
                    res.json({success: false, message: 'product not found'});
                }
       else {
                product.updateOne({ productID : req.params.productId }, req.body, { new: true }, (err, product2) => {
                    if(err){
                        res.json({success: false, status : res.status(404), message: 'can not update prooduct'});
                          }
                    res.json({success: true,data: product2});
                });
            }
        });
    }
        
    // if (req.body.usertype == "admin")
    // { }
    // else{
    //     res.json({success: false, message: 'not premission access'});
    // }}


 public deleteProduct (req: Request, res: Response) {

    product.remove({ productID : req.params.productId }, (err ) => {
        if(err){
            res.json({success: false, message: 'can not delete prooduct'});
        }
        res.json({success: true,data: product});
    });}}
    //  if (req.body.usertype == "admin")
    //  { }

    //  else{
    //     res.json({success: false, status : res.status(404), message: 'not premission access'});}}}

