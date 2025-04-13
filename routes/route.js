import express from 'express'
import createWallet from '../controllers/createWallet.js'
import getAccessToken from '../controllers/getAccessToken.js'
import verifyWallet from '../controllers/verifyWallet.js'
import authMiddleware from '../middleware/authMiddleware.js'
import createPassword from '../controllers/createPassword.js'
const router = express.Router()

router.get("/access-token", getAccessToken)   //no db call
router.get("/create-wallet",authMiddleware ,createWallet)  //create wallet db docs
router.post("/verify-wallet",authMiddleware, verifyWallet )
router.post("/create-password", authMiddleware, createPassword)

export default router;