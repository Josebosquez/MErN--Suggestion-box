var express = require("express");
var router = express.Router();

var {
  getAllSuggestions,
  getSingleSuggestion, 
  createSuggestion,
  updateSuggestion,
  deleteSuggestion, 
} = require("./suggestions/controller/suggestionController");

router.get ('/all-suggestions', getAllSuggestions);
router.get ('/single-suggestion', getSingleSuggestion);
router.post ('/create-suggestion', createSuggestion);
router.put ('/update-suggestion', updateSuggestion);
router.delete ('/delete-suggestion', deleteSuggestion);

module.exports = router;
