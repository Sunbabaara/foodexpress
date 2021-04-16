const Food = require("../models/foodSchema");

//create a meal
const createFood = async (req, res)=>{
    const newFood = new Food(
        {
            day:req.body.day,
            type:req.body.type,
            name:req.body.name,
            quantity: req.body.quantity,
        })
        await newFood.save()
        res.status(201).json(newFood);
}

//get all foods
const getAllFood =async(req, res)=>{
    const food = await food.find();
    res.json(food);
}

//get single food
const getSingleFood = async (req, res)=>{
    const food =await Food.findById(req.params._id)
    res.json(food);

};

//delete food
const deleteFood = async (req, res)=>{
    const foundFood = await Food.findById(req.params._id)
    if(foundFood){
       foundFood.remove()
       res.json({msg:`${foundFood.name} removed`})
       
    } 
    else {
           res.status(404).json({error:"Food not found"})
       }
}

//update a meal
const updateFood = async (req, res)=>{
    const foundFood =await Food.findById(req.params._id)
    if (foundFood){
        foundFood.day = req.body.day,
        foundFood.type = req.body.type,
        foundFood.name = req.body.name,
        foundFood.quantity = req.body.quantity

        const updatedFood = await foundFood.save();
        res.json({updatedFood})
    }
}









module.exports={ createFood, getAllFood, getSingleFood, deleteFood, updateFood}