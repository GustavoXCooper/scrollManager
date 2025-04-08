import dotenv from 'dotenv';
import app from './app';

const port = process.env.PORT

dotenv.config()

app.listen(port)

console.log(`Running in http://localhost:${port}`)