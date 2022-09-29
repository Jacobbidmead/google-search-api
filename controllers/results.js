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
router.get('/', async (req, res) => {

let searchValue = req.query.search
console.log(searchValue)
let results = await Results.find({

	  title: { $regex: searchValue, $options: 'i' }
	})


	res.send(
		results
	)


})

// Export module
module.exports = router
