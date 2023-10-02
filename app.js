//En este archivo estará nuestro servidor
import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import clienteRouter from './routes/clienteRoutes.js';
import taxiRouter from './routes/taxiRoutes.js';

export const app = express()
app.get('/', (_req, res) =>{
 res.send('Hola Api')
})

app.use(cors())	
app.use(express.json()) //cuando hago un POST o PUT desde un cliente frontend, este middleware tomará ese cuerpo en formato JSON y lo convertirá en un objeto JavaScript para que pueda trabajar con él en mi servidor. 
app.use('/clientes', clienteRouter);
app.use('/taxis', taxiRouter);

try{
	await db.authenticate()
		console.log('conected to database')
	}catch{
		console.log(`error:' ${error}`)
	}

//👀 importante este paso para poder parar el servidor dentro de los test
export const server = app.listen(8001,() =>{
console.log('🚀server up in http://localhost:8001/')
} )
