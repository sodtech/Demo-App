import {Request, Response} from "express";
import { productController } from "../Controllers/productController ";
import { accountController } from "../Controllers/accountController";



export class Routes {
    public productController : productController = new productController();
    public accountController : accountController = new accountController()

    public routes(app): void {

        // login endpoint
        app.route('/login')
        .post(this.accountController.login)

         // signup endpoint
      app.route('/signup')
         .post(this.accountController.signUp)

         // get all product endpoint
       app.route('/product')
       .get(this.productController.getproduct)

        // get a specific product endpoint
        app.route('/product/:productId')
        .get(this.productController.getproductWithID)

        //  addProduct endpoint
        app.route('/product')
        .post(this.productController.addNewproduct);

        // update a specific endpoint
        app.route('/product/:productId')
        .put(this.productController.updateProduct)

        // delect a specific customer endpoint
        app.route('/product/:productId')
        .delete(this.productController.deleteProduct)
      }
}