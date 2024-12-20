// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userController = require('./controllers/userController');
const questController = require('./controllers/questController');
const marketplaceController = require('./controllers/marketplaceController');
const teamController = require('./controllers/teamController');
const adminController = require('./controllers/adminController');
const { authenticate } = require('./middlewares/securityMiddleware');

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// app.js
const imageController = require('./controllers/imageController');
app.use('/images', express.static('public/images'));
app.use('/nft', imageController);
app.use('/users', userController);
app.use('/quests', questController);
app.use('/marketplace', marketplaceController);
app.use('/teams', teamController);
app.use('/admin', authenticate, adminController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});