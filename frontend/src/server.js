// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 5000; // You can choose any port you like

// app.use(bodyParser.json());
// app.use(cors());

// // Define your API endpoints here

// // server.js

// // Define your API endpoints here

// // Example endpoint for validating email
// app.post('/api/validate-email', (req, res) => {
//   const { email } = req.body;
//   const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
//   if (!emailRegex.test(email)) {
//     res.status(400).json({ message: 'Invalid email' });
//   } else {
//     res.status(200).json({ message: 'Email is valid' });
//   }
// });

// // Add more endpoints for other form field validations



// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
