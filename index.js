const express  = require('express')
const bodyParser = require('body-parser');


const app = express();


app.use(express.json())

app.get('/', (_, response) =>{
    return response.send("'I'm Working")
})

app.post('/post', function(request, response){
    console.log(request.body)
    response.send(request.body)
});

app.get('/get', (_, response) =>{
    return response.send("'I'm Working")
})


app.listen(8080, () => console.log("Test"))
