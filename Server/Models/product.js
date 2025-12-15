import { Schema,model } from "mongoose";
const productSchema=new Schema({
    name:String,
    price:Number,
    brand:String
});
const Products=model('Product',productSchema);
export default Products;
