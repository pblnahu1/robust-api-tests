import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { router } from "./routes/user.routes";

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api/users', router)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

export default app