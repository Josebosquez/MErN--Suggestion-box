const Suggestion = require("../model/Suggestion");

async function getAllSuggestions (req, res) {
    try {
        let getAll = await Suggestion.find({})
        res.json({ message: "success", data: getAll })
    } catch (e) {
        res.status(500).json({ message: "failure", error: e.message })
    }
}
async function getSingleSuggestion (req, res) {};
async function createSuggestion (req, res) {};
async function updateSuggestion (req, res) {};
async function deleteSuggestion (req, res) {};



module.exports = {
getAllSuggestions,
getSingleSuggestion, 
createSuggestion,
updateSuggestion,
deleteSuggestion, 
}