let btn = document.getElementById('btn');
const resultdata = document.getElementById('ResultsData')
document.addEventListener("keypress", function (event) {
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
    <table>
    <tr>
    <th>Official name</th>
    <td>${data[0].altSpellings[2]}</td>
    </tr>
    <tr>
    <th>Area</th>
    <td>${data[0].area}</td>
    </tr>
    <tr>
    <th>Capital</th>
    <td>${data[0].capital}</td>
    </tr>
    <tr>
    <th>Continent</th>
    <td>${data[0].continents[0]}</td>
    </tr>
    <tr>
    <th>Currency</th>
    <td>${data[0].currencies[Object.keys(data[0].currencies)].name}</td>
    </tr>
    <tr>
    <th>Languages</th>
    <td>${Object.values(data[0].languages).toString().split(",").join(" , ")}</td>
    </tr>
    <tr>
    <th>Maps</th>
    <td><a href="${data[0].maps.googleMaps}">Check on Map</a></td>
    </tr>
    <tr>
    <th>Population</th>
    <td>${data[0].population}</td>
    </tr>
    <tr>
    <th>Timezone</th>
    <td>${data[0].timezones}</td>
    </tr>
    <tr>
    <th>Sub Region</th>
    <td>${data[0].subregion}</td>
    </tr>
    <tr>
    <th>Un-Member</th>
    <td>${data[0].unMember}</td>
    </tr>
    </table>
    </div>
    </div> `
    })


})  