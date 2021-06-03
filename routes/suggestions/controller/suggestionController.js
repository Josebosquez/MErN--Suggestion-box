const Suggestion = require("../model/Suggestion");

async function getAllSuggestions (req, res) {
    try {
        let getAllSuggest = await Suggestion.find({})
        res.json({ message: "success", data: getAllSuggest })
    } catch (e) {
        res.status(500).json({ message: "failure", error: e.message })
    }
}

async function getSingleSuggestion (req, res) {
    try {
        let findOne = await Suggestion.findById(req.params.id)
        res.json({message:"success", findOne}) 
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
};

async function createSuggestion (req, res) {};

async function updateSuggestion (req, res) {};

async function deleteSuggestion (req, res) {
    try {
        console.log('path hit')
        let delSuggestion = await Suggestion.findByIdAndRemove(req.params.id)
        res.json({message:"success", delSuggestion})
    } catch (error) {
        res.status(500).json({message:'error', error:error.message})
    }
};



module.exports = {
getAllSuggestions,
getSingleSuggestion, 
createSuggestion,
updateSuggestion,
deleteSuggestion, 
}