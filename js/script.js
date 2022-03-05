const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showCountries(data.slice(0, 20)))
}

allCountries()

const showCountries = countries => {
    const all = document.getElementById('all-country')
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${country.name.common}</h5>
                <p class="card-text">Capital: ${country.capital}</p>
                <p class="card-text">Area: ${country.area}</p>
                <p class="card-text">Continent: ${country.continents}</p>
            </div>
        </div> 
        `
        all.appendChild(div)
    });
}