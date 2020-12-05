const express  = require('express')
const bodyParser = require('body-parser');
const axios  = require('axios')

url_poke = " https://pokeapi.co/api/v2/pokemon/ditto"

const app = express();
app.use(express.json())

app.get('/', (_, response) =>{
    return response.send("'I'm Working")
})

app.get('/get', async (_, response) =>{
    let data = ""
    try{
        data = await get_pokemon()
    }catch(err){
        response.send(err.message)
    }        
    
    console.log(data.data)
    return response.send(data.data)
})

app.post('/read', function(request, response){
    console.log(request.body)
    response.send(request.body)
});

async function get_pokemon(){
    let data = ""
    data = await axios.get(url_poke)
    return data
}

app.listen(8080, () => console.log("App Inicializado"))
