import express from "express";

// initialize Express router
const router = express.Router();

// import page controller
import {Home, About, Shop} from "../controllers/pages.js"

// home route
router.get('/', Home)

// about route
router.get('/about', About)

// shop route
router.get('/shop', Shop)

// export the default router
export default router;