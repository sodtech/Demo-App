import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {userSchema} from '../Models/user'
import { Request, Response } from 'express';
var jwt = require('jsonwebtoken');


const user = mongoose.model('user', userSchema);

export class accountController
{    
    public signUp (req: Request , res : Response) {
        user.findOne({username: req.body.username}, function(err, user1){
            if(err) {
                res.json(err);
            }
            var message;
            if(user1) {
                message = "username exists or email";
                res.json(message)
            } else {
                let hashPassword = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hashPassword;
                let newUser = new user(req.body);
                newUser.save((err, result) => {
                    if(err){
                        res.send(err);
                    }
                    res.json(result);
                });
            }
          
        });
    }

    public login (req: Request , res : Response) {


        user.findOne({username: req.body.username}, function(err, user1){
            if(err) {
                res.json(err);
            }
            var message;
            if(user1) {
                if(bcrypt.compareSync(req.body.password, user1["password"])) {
                    message = "login successful";
                    res.json(message)
                   } else {
                    message = "password is not corrrect";
                    res.json(message)
                   }
            } else {
                message = "username not registered";
                res.json(message)
               
            }
        });
    
    }
   
}

