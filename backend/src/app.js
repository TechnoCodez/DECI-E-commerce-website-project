const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(require('./middleware/loggerMiddleware'));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/stats', require('./routes/statsRoutes'));


module.exports = app;