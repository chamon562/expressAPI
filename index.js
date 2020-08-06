require('dotenv').config()


const express = require('express');
//axios gettig our fetch call
const axios = require('axios');
const app = express();

let API_KEY = process.env.API_KEY
//using .env to hide API KEY

app.set('view engine', 'ejs')
//using ejs as the view engine rendering ejs files
app.use(express.static('static'))
//express using static to access css 
app.get('/', (req, res) => {
    let qs = {
        params: {
            s: 'star wars',
            // api: ''8de3572f'' was here and replaced with API_KEY
            API_KEY
        }
    }
    axios.get('http://www.omdbapi.com', qs)
    .then((response) => {
        //response.data is getting us an object
        console.log(response.data)
        let episodes = response.data.Search
        //setting a varaible to our data 
        res.render('home', {episodes})
        //render home with the data
    })
    .catch(err =>{
        console.log(err)
    })
})
app.listen(3000);