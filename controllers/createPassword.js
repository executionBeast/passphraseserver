import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
// Header : Authorization Bearer Token
// 
/* payload:  {
  walletId String @unique @db.ObjectId
  platform String
  password String
  remark String
  }
*/
export default async function createPassword(req, res) {   
    const {walletId, platform, password, remark} = req.body
    console.log("payload : ", {walletId, platform, password, remark})
    if(!walletId || !platform || !password || !remark){
        console.log("Empty Request | Create Password")
        return res.status(400).json({
            msg: "Bad Request, All fields necessarry"
        })
    }
    try {
        // console.log("Prisma : ", prisma.passwords.create)
       let passWalletReq = await prisma.passwords.create({
        data: {
        walletId,
        platform,
        password,
        remark
       }})
       console.log("DB Response : ", passWalletReq)
       return res.status(200).json({
        msg: "Created Successfully",
        data: passWalletReq
       })
    }
    catch(err){
        console.log("Create Password Error: ", err)
        return res.status(500).json({
            msg: "Some Error Occured! "
        })
    }
}