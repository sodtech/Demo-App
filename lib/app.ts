import express = require("express");
import * as bodyParser from "body-parser";
import { Routes } from "./Routes/route";
import mongoose from "mongoose";



class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/product_store';
    public routePrv: Routes = new Routes();


    constructor() {
        this.app = express();
        this.config();        
        this.mongoSetup();
        this.routePrv.routes(this.app);

    }

    private mongoSetup(): void{
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

   
}

export default new App().app;