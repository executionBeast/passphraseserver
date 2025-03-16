import { configDotenv } from 'dotenv'
configDotenv({path: '.env'})
console.log("PORT : ", process.env.PORT)
import express, { json, urlencoded } from 'express'
import cors from 'cors'
import router from './routes/route.js'

const server = express()
const PORT = process.env.PORT || 8000

server.use(json())
server.use(urlencoded({extended: true}))
server.use(cors())
server.use("/api",router )

server.get("/",(req, res)=> {
    return res.send("Hello")
})


server.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
})