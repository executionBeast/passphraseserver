import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function verifyWallet(req, res) {
    try {
        console.log("req body : ", req.body)
        if(!req.body.passphrase) {
            return res.status(400).json({
                msg: "Bad Request, No passphrase provided"
            })
        }
        const {passphrase} = req.body
        console.log("Passphrase -=-=-==-: ", passphrase)
        let resp = await prisma.wallet.findUnique({
            where: {
                passphrase:passphrase
            },
        })
        if(!resp) {
            return res.status(404).json({
                msg: "No wallet found with this passphrase"
            })
        } 
        return res.status(200).json(resp)
    }
    catch(err) {
        console.log("VERIFY WALLET ERROR : ", err.message)
        return res.status(500).json({
            msg: "Something Went Wrong!"
        })
    }
}