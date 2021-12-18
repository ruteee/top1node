const express  = require('express')
const axios  = require('axios')

const app = express();
app.use(express.json())

app.post('/', async function(request, response){

    let data = {
        "email": "rute.s.abreu@gmail.com",
        "assistantId": "4a11b9a9-d905-401b-981b-82bcc211152a",
        "url": "https://api.us-south.assistant.watson.cloud.ibm.com/instances/cb0e7189-6a75-4b66-ad0c-f73e2407281a/v2/assistants/4a11b9a9-d905-401b-981b-82bcc211152a/sessions",
        "skillId": "1286ff96-99a5-4070-aa33-12350de47ae9",
        "apiKey": "fQRhPeD4avOZ90VCx2nPntscOub3X3vKk3BocjyfQ31w",
        "submitConfirmation": true
    }
    url_os = "http://172.21.188.211:3000/submit"

    await axios.post(url_os, data, {
        headers: {
            'content-type':'application/json'
        }
    }).then(function(response){
        console.log(response)
    }).catch(function(err){
        console.log(err)
    })
    
});

app.listen(8080, () => console.log("Escutando"))


