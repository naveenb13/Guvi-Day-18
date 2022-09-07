let d1 = document.createElement("div");
d1.innerHTML = `<h1>Country Details and its Weather Report</h1>`;
d1.setAttribute("id", "D1");
d1.setAttribute("class", "DC1");
document.body.append(d1);

let br1 = document.createElement("br");
let br2 = document.createElement("br");
document.body.append(br1);
document.body.append(br2);

let d2 = document.createElement("div");
d2.setAttribute("id", "D2");
d2.setAttribute("class", "DC2");
let i1 = document.createElement("input");
i1.setAttribute("id", "I1");
i1.setAttribute("class", "IC1");
let but1 = document.createElement("button");
but1.innerText = "S E A R C H";
but1.setAttribute("id", "BUT1");
but1.setAttribute('onclick', 'allCountries()');
but1.setAttribute("class", "BUTCL1");
d2.appendChild(i1);
d2.appendChild(but1);
document.body.append(d2);

let d3 = document.createElement("p");
d3.setAttribute("id", "D3");
d3.innerHTML = "<h5>Note - Only Country names result will be published below. So search with Country names</h5>";
document.body.append(d3);



let allCountries = async () => {
    try {
        let val = document.getElementById("I1").value;
        console.log(val);
        let res = await fetch(`https://restcountries.com/v3.1/name/${val}`)
        let data = await res.json();
        console.log(data);
        console.log(data[0].flags.png)

        result.innerHTML = `<div class="card m-auto text-center card2">
        </br>
        <nav class = "navbarcolor"><h1 class = "card3">${data[0].name.common}</h1></nav>
        </br>
        <img src="${data[0].flags.png}" class="card-img-top" alt="...">
        </br>
        <div class="card-body">
            <h5 class="card-title card3">Capital : ${data[0].capital}</h5>
            </br>
            <h5 class="card-title card3">Region : ${data[0].region}</h5>
            </br>
            <h5 class="card-title card3">Country Code : ${data[0].car.signs}</h5>
            </br></br>
            <button class="btn btn-info border1" onclick = "weather()">Click for Weather</button>
            </br>
        </div>
        </div>`
    }
    catch (error) {
        console.log("error")
    }
}
allCountries();

let weather = async () => {
    let val1 = document.getElementById("I1").value;
    console.log(val1);
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val1}&APPID=d11dee37ab1d79e4fdef6bc1a42b4adc`)
    let data = await res.json();
    console.log(data);

    result.innerHTML = `<div class="card m-auto text-center card1">
        </br>
        <nav><h1 class = "card3">${data.name}</h1></nav>
        </br></br>
        <h4><u class = "card3">Weather Conditions</u></h4>
        </br></br>
        <div class="card-body">
            <h5 class="card-title card3">Latitude : ${data.coord.lat}</h5>
            </br>
            <h5 class="card-title card3">Longitude : ${data.coord.lon}</h5>
            </br>
            <h5 class="card-title card3">Humidity : ${data.main.humidity}</h5>
            </br>
            <h5 class="card-title card3">Temperature : ${data.main.temp}</h5>
            </br>
            <h5 class="card3">Wind Speed : ${data.wind.speed}</h5>
        </br>
        </div>
        </div>`
}
weather();
