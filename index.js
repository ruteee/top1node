const express  = require('express')
const bodyParser = require('body-parser');
const axios  = require('axios')

acess_token = "eyJraWQiOiIyMDIwMTEyMTE4MzQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC01NTAwMDNVUE1YIiwiaWQiOiJJQk1pZC01NTAwMDNVUE1YIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMjk0ZTRhMDMtZDc5Yy00NDFmLWI2M2MtYmFmNDA2MmUwMGFmIiwiaWRlbnRpZmllciI6IjU1MDAwM1VQTVgiLCJnaXZlbl9uYW1lIjoiUnV0ZSIsImZhbWlseV9uYW1lIjoiU291emEgZGUgQWJyZXUiLCJuYW1lIjoiUnV0ZSBTb3V6YSBkZSBBYnJldSIsImVtYWlsIjoicnV0ZS5zLmFicmV1QGdtYWlsLmNvbSIsInN1YiI6InJ1dGUucy5hYnJldUBnbWFpbC5jb20iLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI2M2EzODQ2Y2NlZWI0ZjFmYjFiNTA4ZWVjY2IyMGY0YiIsImZyb3plbiI6dHJ1ZX0sImlhdCI6MTYwNzE5MDY3NywiZXhwIjoxNjA3MTk0Mjc3LCJpc3MiOiJodHRwczovL2lhbS5jbG91ZC5pYm0uY29tL2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.Mxe-Z3IP1CxajeL9aCI18VswBkO2Hay-U4cp_I7WmpwBNmVqeRpAn-VZfH-ljpqhHOFxxi0phHslfCsDe3pjREVldGHDwnRfrE5-pMHNdss7IWx2To8VOuZA4FFCKCeyq91VEWxAZ8oKp5g_TRRDg1ufMHkIVlBGYJDrUgmP3t3Ux0c4lOblFeSH3AZGc-Bm_9avXUTvKpfOCjoEK_pi06sio7nka7bXD2vrx9zU9Um8QCyZS-YX8zZ5ztDXGxh5gXyfwRmzMBVeQLRc4zyB0e5gsA93b5BoLfA_yoN2FGVudnu-Or0jHGDXUYYox5fI8M5nKbsFLCiQdUR-pMjuyw"

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
    return response.send("'I'm Working")
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
        iam_token: getTk.data.acess_token,
        submit_confirmation: false
    }
    url_os = "http://172.21.86.186:5000/submit"

    axios.post(url_os, data).then(function(response){
        console.log(response)
    }).catch(function(err){
        console.log(err)
    })
    response.send('OK')
});

app.listen(8080, () => console.log("App Inicializado"))
