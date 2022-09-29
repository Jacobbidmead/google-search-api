// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')
//

// router.get('/', (req, res) => {
//   res.render('results', { data: data })
// })
// Function that selects only items with title related to Search
// const titleIncludes = (allResults, text) =>
//   allResults.filter(result =>
//     result.title.toLowerCase().includes(text.toLowerCase())
//   )

// Create POST controller
router.post('/', async (req, res) => {
  let searchValue = req.body.search
  // searchValue = whats entered into search bar
  let results = await Results.find({
    // Results references the module - the module links the mongodb data
    title: { $regex: searchValue, $options: 'i' }
  })

  res.render('results', {
    resultsList: results
    // resultsList references results for handlebars - html
  })
})

// Export module
module.exports = router
