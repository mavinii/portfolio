// This function is called IIFE
// Immediately-invoked Function Expression

// (function doSomething() {
//     /* function body */
// })()

document.addEventListener("DOMContentLoaded", populatetableRows);
async function populatetableRows() {

    await fetch('https://api.openweathermap.org/data/2.5/weather?q=dublin,ie&units=metric&APPID=bc425ac2188d406c884f4fdd88b339f0')
    // dublin,ie < change this to > france,fr to get
           
        .then(response => {
              if (response.status !== 200) {
                 console.log('Error Status Code: ' + response.status);
                 return;
              }

              response.json().then((data) => {
                let strTableRows = `
                <tr>
                    <td><span>Summary</span></td>
                    <td>${data["weather"][0]["description"]}</td>
                </tr>
                <tr>
                    <td><span>Temperature</span></td>
                    <td>${data["main"]["temp"] + "&deg;C"}</td>
                </tr>
                <tr>
                    <td><span>Humidity</span></td>
                    <td>${data["main"]["humidity"] + " %"}</td>
                </tr>
                <tr>
                    <td><span>Pressure</span></td>
                    <td>${data["main"]["pressure"] + "Pa"}</td>
                </tr>`;
            
                document.querySelector("#table-weather-dublin tbody").innerHTML = strTableRows;

              });
            })
     
            .catch(error => {
               // Error goes here
        });
}