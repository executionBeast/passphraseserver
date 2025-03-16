import express from 'express'
import genPassphrase from '../controllers/genpassphrase.js'
import getAccessToken from '../controllers/getAccessToken.js'
import verifyWallet from '../controllers/verifyWallet.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get("/access-token", getAccessToken)   //no db call
router.get("/create-wallet",authMiddleware ,genPassphrase)  //create wallet db docs
router.post("/verify-wallet",authMiddleware, verifyWallet )

export default router;