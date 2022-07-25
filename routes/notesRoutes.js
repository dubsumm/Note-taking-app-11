const router = require('express').Router();
const fs = require('fs');

//GET request
router.get('/notes', (req, res) => {
    
        let response = fs.readFileSync('./db/db.json');
        response = JSON.parse(response);
        res.json(response);
        console.log(response);
        
})

// POST request
router.post('/notes', (req, res) => {

    // this stuff is from activity 15 from express
//     console.info(`${req.method} request received to add a review`);

//   // Prepare a response object to send back to the client
//   let response;

//   // Check if there is anything in the response body
//   if (req.body && req.body.product) {
//     response = {
//       status: 'success',
//       data: req.body,
//     };
//     res.json(`Review for ${response.data.product} has been added!`);
//   } else {
//     res.json('Request body must at least contain a product name');
//   }


    console.log(req.body);



})

// DELETE request

module.exports = router