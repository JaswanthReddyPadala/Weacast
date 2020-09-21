// import { GiphyFetch } from '@giphy/js-fetch-api'

// const gf = new GiphyFetch('6nX7LlfO1iR8K5V1XcpctPApBywm1ZhX')

// // fetch 10 gifs
// const { data: gifs } = await gf.trending({ limit: 10 })
function weather(){
    console.log(document.getElementById("val").value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("val").value}&appid=91e7f58a088fbebb01caa33974b7bfb8`)
    .then(response => response.json())
    .then(data =>{
        document.getElementById("temp").innerHTML = Math.round(data['main']['temp'] - 273,2) + "&#8451";
        document.getElementById("place").innerHTML ="Place:  "+data.name;
        document.getElementById("des").innerHTML ="Description:  "+data['weather'][0]['description'];
        document.getElementById("humidity").innerHTML ="Humidity:  "+data['main']['humidity'];
        document.getElementById("val").value = "";
    const va = data['weather'][0]['description']; })

    .catch(e => {
        document.getElementById("place").innerHTML ="Place not found!";
        document.getElementById("temp").innerHTML = "";
        document.getElementById("des").innerHTML ="";
        document.getElementById("humidity").innerHTML ="";
        document.getElementById("val").value = "";
    })
    // .then(gf => {
    //     search(term: string, options?: SearchOptions): Promise<GifsResult>
    // }

};
      













// import express from "express";
// import bodyParser from "body-parser";
// import https from "https";

// app.use(bodyParser,urlencoded({extended:true}));

// app.get("/", function(req,res){
//     res.sendfile(__dirname+"/index.html");
// });

// app.listen(3000,function(){
//     console.log("it's running.");
// });