const buttonGetPersons = document.getElementById('get-persons');
const buttonGetPlanets = document.getElementById('get-planets');
const continerDiv = document.getElementById('container');
const BASE_URL = 'https://swapi.co/api/';
const personPhoto = {
    'Luke Skywalker' : 'https://vignette.wikia.nocookie.net/ru.starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/500?cb=20061127144734',
    'C-3PO' : 'https://vignette.wikia.nocookie.net/ru.starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest/top-crop/width/360/height/450?cb=20180306071015',
    'R2-D2' : '',
    'Darth Vader': '',
    'Leia Organa': '',
    'Obi-Wan Kenobi': '',
    'Chewbacca': '',
    'Han Solo': '',
    'Wedge Antilles': '',
    'Yoda': '',
    'Palpatine': '',
    'IG-88': '',
    'Boba Fett': '',
    'Bossk': '',
    'Lando Calrissian': '',
    'Lobot': '',
}

buttonGetPersons.addEventListener('click', async function(){
continerDiv.innerHTML = ' Loading... ';
const res = await axios.get(BASE_URL +'films/2/');
continerDiv.innerHTML = '';
res.data.characters.forEach(character => {
    axios.get(character).then((element)=>{
        renderPerson (element.data.name, element.data.birth_year, element.data.gender);
    });
});
});

buttonGetPlanets.addEventListener('click', async function() {
    continerDiv.innerHTML = ' Loading... ';
    let curentPage = 1;
    await GetPlanets(curentPage);
    const navigDiv = document.createElement('div');
    continerDiv.after(navigDiv);
    navigDiv.classList.add('navigation');
    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('id', 'next-btn');
    nextBtn.innerText = 'Next';
    navigDiv.prepend(nextBtn);

    nextBtn.addEventListener('click', async function() {
        if (curentPage == 1) {
            const prevBtn = document.createElement('button');
            prevBtn.innerText = 'Prev';
            navigDiv.prepend(prevBtn);
        }
        curentPage+=1;
        continerDiv.innerHTML = ' Loading... ';
        await GetPlanets(curentPage);
    });
});


async function GetPlanets(page){
    const planetsOfFilms = await axios.get(BASE_URL +'planets/?page=' + page);
    continerDiv.innerHTML = '';
    planetsOfFilms.data.results.forEach(planet => {
        continerDiv.innerHTML += `
        <div class='person'><h3>Planet name: ${planet.name}</h3></div>
        `
    });
    }


 function renderPerson (name, birth_year, gender){
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('person');
    continerDiv.append(characterDiv);
    characterDiv.innerHTML = `
        <h2>Name: ${name}</h2>
        <h4>Birth year: ${birth_year}</h4>
        <h4>Gender: ${gender}</h4>
        
    `
    //console.log(personPhoto[name]); <img src=${personPhoto[name]}>
 }
 
