import Product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, message: "Products fetched successfully", data: products });
    } catch (error) {
        console.error("Error in Get products: " ,error.message);
        res.status(500).json({success: false, message: "Internal server error" });
    }
}
export const createProduct =  async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false ,message: "Please fill all the fields" });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success: true, message: "Product created successfully", data: newProduct });
    } catch (error) {
        console.error("Error in Create product: " ,error.message);
        res.status(500).json({success: false, message: "Internal server error" });
    }
}
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false ,message: "Invalid product ID" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true});
        res.status(200).json({success: true, message: "Product updated successfully", data: updatedProduct });
    } catch (error) {
        console.error("Error in Update product: " ,error.message);
        res.status(500).json({success: false, message: "Product not found" });
    }
}
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false ,message: "Invalid product ID" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in Delete product: " ,error.message);
        res.status(500).json({success: false, message: "Server Error" });
    }
}