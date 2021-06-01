const { model } = require("mongoose");
const User = require("../model/Suggestion");


async function getAllSuggestions(req, res) {
    try {
        let getAll = await User.find({})

        res.json({ message: "success", data: foundAllUsers })
    } catch (e) {
        res.status(500).json({ message: "failure", error: e.message })
    }
}


module.exports = {
getAllSuggestions,
getSingleSuggestion, 
createSuggestion,
updateSuggestion,
deleteSuggestion, 
}