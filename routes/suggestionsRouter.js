var express = require("express");
var router = express.Router();
//bring in the User controller
var {
  getAllSuggestions,
  getSingleSuggestion, 
  createSuggestion,
  updateSuggestion,
  deleteSuggestion, 
} = require("./controller/suggestionController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.GET ('/all-suggestions', getAllSuggestions);

router.GET ('/single-suggestion', getSingleSuggestion);

router.POST ('/create-suggestion', createSuggestion);

router.UPDATE ('/update-suggestion', updateSuggestion);

router.DELETE ('/delete-suggestion', deleteSuggestion);

module.exports = router;
