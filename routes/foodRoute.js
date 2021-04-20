const express = require ("express");
const {createFood, getAllFood, getSingleFood, deleteFood, updateFood} = require("../controllers/foodController")
const protect = require ("../middlewares/authMiddleware")
const router = express.Router()

router.route("/")
.post(createFood)
.get(getAllFood)

router.route("/:_id")
.get(protect, getSingleFood)
.delete(protect, deleteFood)
.put(protect, updateFood)



module.exports = router;