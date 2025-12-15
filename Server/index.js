import e from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Products from "./Models/product.js";

dotenv.config();
const app=e();
const PORT=3000;
app.use(e.json());
const DATABASE_CONNECTION= async()=>{
    const connect = await mongoose.connect(process.env.MongoDB)
    if(connect){
        console.log("Database connected successfully");
    }
}
DATABASE_CONNECTION();

app.get('/getallproducts',async(req,res)=>{
    const allproducts=await Products.find({});
    res.json({products:allproducts});
});

app.post('/addproduct',(req,res)=>{
const {name,price,brand}=req.body;
const newProduct=new Products({name,price,brand});
newProduct.save()
res.json(
    {message:"Product added successfully",
          product:newProduct
})
});

app.delete('/deleteproduct/:id',async(req,res)=>{
    const {id}=req.params;
    await Products.deleteOne({_id:id});
    res.json({message:"Product deleted successfully"});
}
);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});