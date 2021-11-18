import express, {Express, Request,Response} from 'express'
import cors from 'cors'
import { countries } from './data'

const app:Express= express()

app.use(express.json())
app.use(cors())

//teste
app.get('/test',(req,res)=>{res.send('Olá mundo')})

//Endpoint 1 - Buscar todos os países
app.get('/countries',(req: Request , res: Response)=>{res.send(countries)})


//Endpoint 3 - Busca com filtros
app.get('/countries/search', (req,res)=>{
    let result: country[] = countries

    if (req.query.name) {
    result = result.filter(
        country => country.name.includes(req.query.name as string)
    )
    }

    if (req.query.capital) {
    result = result.filter(
        country => country.capital.includes(req.query.capital as string)
    )
    }

    if (req.query.continent) {
    result = result.filter(
        country => country.continent.includes(req.query.continent as string)
    )
}
    res.send(result)
    
})

//Endpoint 2 - Buscar país por id
app.get('/countries/:id', (req,res)=>{
    const id = req.params.id

    const result = countries.find((country)=>{
        return country.id === Number(id)
    })

    if(result)
        res.send(result)
    else
        res.status(404).send('Pais não encontrado')

    res.send(result)
    
})

//Endpoint 5 - Deletar país
app.delete('countries/:id',(req,res)=>{
    try {
        const token = req.headers.authorization
    
        if(!token){
            res.statusCode=401
            throw new Error()
        }
    
        const index = countries.findIndex((country)=>{
            return country.id === Number(req.params.id)
        })

        if(index=== -1){
            res.statusCode=404
            throw new Error()
        }
    
        countries.splice(index,1)
    
        res.status(204).end()
    
    } catch (error: any) {
        if(res.statusCode===200){
            res.status(500).end()
        }else{
            res.end()
        }
    }
})

//pais das maravilhas
app.get('/countries/test',(req: Request , res: Response)=>{res.send('País das Maravilhas')})

app.listen(3003, ()=>{
    console.log('Servidor pronto!')
})