const JWT_SECRET = process.env.JWT_SECRET
import jwt from 'jsonwebtoken'
export function signJwt(payload) {
    const token = jwt.sign(payload, JWT_SECRET)
    return token
}

export function verifyJwt(payload) {
    let result = {}
    try{
        result = jwt.verify(payload, JWT_SECRET)
        return {
            status: true,
            payload: result
        }
    }
    catch(err) {
        console.log("Error Verifyig Token : ", err.message)
        return {
            status: false,
            payload: result
        }
    }

   
}


// try{
//     const result = jwt.verify(payload, JWT_SECRET)
//     if(!result) {
//         return {
//             status: false,
//             payload: result
//         }
//     }
//     return {
//         status: true,
//         payload: result
//     }
// }
// catch(err) {
//     console.log("Error Verifyig Token", err)
//     return {
//         status: false,
//         payload: result
//     }
// }