const express = require('express');
const app = express();

// Route with parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ID: ${44}`);
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});