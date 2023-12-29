const { json } = require("express/lib/response");
const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel')
const User = require('../models/userModel')



// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req, res) => {

  const goals = await Goal.find({user: req.user.id})

  res.status(200).json(goals);
});




// @desc set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler( async (req, res) => {    
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text')
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })
  res.status(200).json(goal);
});





// @desc update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler( async (req, res) => {

  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = await User.findById(req.user.id)

  //check for user
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  if(goal.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})

  res.status(200).json(updatedGoal);
});





// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {

  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = await User.findById(req.user.id)

  //check for user
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  if(goal.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized')
  }


  await goal.deleteOne()

  res.status(200).json({ message: `${req.params.id} is deleted` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
