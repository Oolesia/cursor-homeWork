const buttonGetPersons = document.getElementById('get-persons');
const buttonGetPlanets = document.getElementById('get-planets');
const continerDiv = document.getElementById('container');
const paginDiv = document.getElementById('pagination');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const translBtn = document.getElementById('translate');
const numberPlanetsOnPage = 10;
let curentPage;

const BASE_URL = 'https://swapi.co/api/';
const personPhoto = {
    'Luke Skywalker': 'https://vignette.wikia.nocookie.net/ru.starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/500?cb=20061127144734',
    'C-3PO': 'https://vignette.wikia.nocookie.net/ru.starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest/top-crop/width/360/height/450?cb=20180306071015',
    'R2-D2': 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914',
    'Darth Vader': 'https://vignette.wikia.nocookie.net/starwars/images/a/a3/ANOVOS_Darth_Vader_1.png/revision/latest?cb=20150128225029',
    'Leia Organa': 'https://vignette.wikia.nocookie.net/starwars/images/f/f1/Leia_Organa_TROS.png/revision/latest?cb=20200102034101',
    'Obi-Wan Kenobi': 'https://vignette.wikia.nocookie.net/starwars/images/e/e7/LE_Obi-Wan_Kenobi_Commander_Expansion.png/revision/latest?cb=20190906023428',
    'Chewbacca': 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20190830144754',
    'Han Solo': 'https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png/revision/latest?cb=20160208055002',
    'Wedge Antilles': 'https://vignette.wikia.nocookie.net/starwars/images/8/82/Wedge_TROS.jpg/revision/latest?cb=20200119002320',
    'Yoda': 'https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125',
    'Palpatine': 'https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/revision/latest?cb=20130620100935',
    'IG-88': 'https://vignette.wikia.nocookie.net/starwars/images/a/aa/IG-88B-ESB.jpg/revision/latest?cb=20151130035541',
    'Boba Fett': 'https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png/revision/latest?cb=20161114160631',
    'Bossk': 'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png/revision/latest?cb=20130219044712',
    'Lando Calrissian': 'https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/0/0a/Lando5.jpg/revision/latest?cb=20170807090725',
    'Lobot': 'https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg/revision/latest?cb=20160123060717',
    'Biggs Darklighter': 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
    'Raymus Antilles': 'https://vignette.wikia.nocookie.net/starwars/images/d/d7/Antilles-SWE.png/revision/latest?cb=20141111165721',
    'Owen Lars': 'https://vignette.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20070626181249',
}

export default async function getPersons () {
    document.getElementById('container').innerHTML = ' Loading... ';
    let filmIndex = 2;
    const res = await axios.get(BASE_URL + 'films/' + filmIndex + '/');
    document.getElementById('container').innerHTML = '';
    res.data.characters.forEach(character => {
        axios.get(character).then((element) => {
            renderPerson(element.data.name, element.data.birth_year, element.data.gender);
        });
    });
};

function renderPerson(name, birth_year, gender) {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('person');
    characterDiv.classList.add('element');
    document.getElementById('container').append(characterDiv);
    characterDiv.innerHTML = `
        <h2>Name: ${name}</h2>
        <h4>Birth year: ${birth_year}</h4>
        <h4>Gender: ${gender}</h4>
        <div class='character-img'> <img src=${personPhoto[name]}> <div>
    `

}
