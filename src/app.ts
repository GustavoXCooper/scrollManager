import express from 'express'
import router from './routes/main'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'public')))
server.use(router)

export default server