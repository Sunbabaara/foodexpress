const express = require ("express");
const {createFood, getAllFood, getSingleFood, deleteFood, updateFood} = require("../controllers/foodController")

const router = express.Router()

router.route("/")
.post(createFood)
.get(getAllFood)

router.route("/:_id")
.get( getSingleFood)
.delete(deleteFood)
.put(updateFood)



module.exports = router;