const express  = require('express')
const bodyParser = require('body-parser');
const axios  = require('axios')

const app = express();
app.use(express.json())

const headers_token = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json" 
}

let config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json" 
    },

    params:{
        "grant_type":"urn:ibm:params:oauth:grant-type:apikey",
        "apikey": "c4uY7MPLjBZryuVeqf31dv2VI92c7XJ98ucV7VA1jo3f"
    }
  }

app.get('/', (_, response) =>{
    return response.send("'I'm working")
})



function getToken(){
    url = "https://iam.cloud.ibm.com/identity/token"
    
    token = axios.post(url, null, config)
    return token
}


app.post('/', async function(request, response){

    let getTk = await getToken()
    data = {
       email_addr: "rute.s.abreu@gmail.com",
       wml_url: "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/8864784a-4ab4-42f5-a5a8-1d66d3af9d9d/predictions",
       iam_token: String(getTk.data.access_token),
       submit_confirmation: true,
    }
    url_os = "http://172.21.86.186:5000/submit"

    axios.post(url_os, data).then(function(response){
        console.log(response)
    }).catch(function(err){
        console.log(err)
    })
    
});


app.listen(8080, () => console.log("App Inicializado"))
