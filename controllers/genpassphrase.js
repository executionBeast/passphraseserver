//PrismaClient
import { PrismaClient } from '@prisma/client'
import genPassPhrase from "../utils/dictionary.js"

const prisma = new PrismaClient()

export default async function genPassphrase(req,res) {
    try {
        const passphrase = genPassPhrase()
        const wallet = await prisma.wallet.create({
            data:{
                passphrase
            }
        })
        // console.log("Verified JWT phrase : ", verifyJwt(wallet.passphrase))
        return res.status(201).json(wallet)

    }
    catch(err) {
        console.error("Generating Phrase Error : ", err)
        return res.status(500).json({
            err: "Something Went Wrong! "
        })
    }
    
}