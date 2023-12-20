// @desc get goals
// @route GET /api/goals

const { json } = require("express/lib/response");

// @access Private
const getGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text')
  }

  res.status(200).json({ message: "Get Goals!" });
};

// @desc set goals
// @route POST /api/goals
// @access Private
const setGoals = (req, res) => {    
  res.status(200).json({ message: "Set Goal!" });
};

// @desc update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
};

// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Goals ${req.params.id} is deleted!` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
