import express from "express";

// initialize Express router
const router = express.Router();

// home route
router.get('/', (req, res) => {
    res.send('Home using router');
});

// about route
router.get('/about', (req, res) => {
    res.send('About using router');
});

// shop route
router.get('/shop', (req, res) => {
    res.send('Shop for routers');
});

// export the default router
export default router;