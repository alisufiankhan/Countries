let btn = document.getElementById('btn');
const resultdata = document.getElementById('ResultsData')
document.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
      document.getElementById("btn").click();
    }
  });
  
btn.addEventListener('click', () => {
    let inp = document.getElementById('inp').value;

    fetch(`https://restcountries.com/v3.1/name/${inp}?fullText=true`)
        .then(response => response.json())

        .then((data) => {
            console.log(data[0])
            resultdata.innerHTML = `
         <div id="img">
         <img src="${data[0].flags.png}">
         <h2>${data[0].altSpellings[1]}</h2>
         <p><b>${data[0].translations.urd.official}</b></p>


    </div>
    <div class="more">
    <div class="otherdata">
    <p><b>Official Name </b>: ${data[0].altSpellings[2]}</p>
    <p><b>Area:</b> ${data[0].area}</p>
    <p><b>Capital:</b> ${data[0].capital}</p>
    <p><b>Continent:</b> ${data[0].continents[0]}</p>
    <p><b>Currency:</b> ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
    <p><b>Languages :</b> ${Object.values(data[0].languages).toString().split(",").join(" , ")}</p>
    <p><b>Maps:</b> <a href="${data[0].maps.googleMaps}">Check on Map</a></p>
    <p><b>Population:</b> ${data[0].population}</p>
    <p><b>Timezone :</b> ${data[0].timezones}</p>
    <p><b>Sub Region:</b> ${data[0].subregion}</p>
    <p><b>Un-Member:</b> ${data[0].unMember}</p>
    </div>
    </div> `
})


})  