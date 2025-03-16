import { signJwt } from "../utils/jwt.utils.js"

export default async function getAccessToken(req, res) {
    
    const accessString  = process.env.ACCESS_STRING
    let accessToken  = signJwt(accessString, process.env.JWT_SECRET)
    console.log("JWT SECRET : ",process.env.JWT_SECRET, "Acces String : ", accessString, "Access Token : ", accessToken)
    return res.status(200).json({
        accesToken : accessToken,
        msg: "Attach this token in authorization header to access other endpoints"
    })

}