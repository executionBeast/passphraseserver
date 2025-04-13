import { configDotenv } from "dotenv";
configDotenv({path: "../.env"})
import { verifyJwt } from "../utils/jwt.utils.js";

export default async function authMiddleware(req, res, next) {
    try{
        if(!req.headers.authorization) {
            return res.status(401).json({
                msg: "You are not authorized to access this resource, No Bearer Provided"
            })
        }
        const accessToken = req.headers.authorization.split(" ")[1]
        console.log("Headers : ", req.headers, "Access Token", accessToken)
        let auth = verifyJwt(accessToken)
        console.log("JWT Verify : ", auth)
        if(!auth.status) {
            return res.status(401).json({
                msg: "You are not authorized to access any resource"
            })
        }
        console.log("################# Authorized ##################")
        next();
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({
            err: "Some Error Occurred!"
        })
    }
}