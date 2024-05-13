var datumInput = document.getElementById('datumInput');
var idag = new Date();
var bokningsFormulär = document.querySelector('.form');
let bokningsInfo = document.getElementById("boknings-info")
let sammanfattning = document.getElementById("sammanfattning")

var idagFormatted = idag.toISOString().split('T')[0];
sammanfattning.style.display = 'none';


datumInput.setAttribute('min', idagFormatted);

bokningsFormulär.addEventListener('submit', function(event) {
    event.preventDefault();
    var datumVärde = document.getElementById('datumInput').value;
    var antalPersonerVärde = document.getElementById('antalPersonerInput').value;

bokningsInfo.innerHTML = (`Datum: ${datumVärde} Antal personer: ${antalPersonerVärde}`)
    var bokningsInfo2 = {
        datum: datumVärde,
        antalPersoner: antalPersonerVärde
    };
});

function genereraTider() {
    var tider = [];
    var startTimme = 10;
    var slutTimme = 22;

    var valtDatum = new Date(document.getElementById('datumInput').value);
    var veckodag = valtDatum.getDay();

    if (veckodag === 0) {
        startTimme = 11;
    } else if (veckodag >= 1 && veckodag <= 6) { 
        slutTimme = 21;
    }

    for (var timme = startTimme; timme <= slutTimme; timme++) {
        var timStr = (timme < 10) ? '0' + timme : '' + timme;
        tider.push(timStr + ':00');
    }

    return tider;
}

function uppdateraTider() {
    tiderLista.innerHTML = '';
    var tider = genereraTider();
    tider.forEach(function(timme) {
        var alternativ = document.createElement('option');
        alternativ.value = timme;
        alternativ.textContent = timme;
        tiderLista.appendChild(alternativ);
    });
}
datumInput.addEventListener('change', uppdateraTider);
var tiderLista = document.getElementById('tider');

function uppdateraBokningsInfo() {
    var valtDatumElement = document.getElementById('valtDatum');
    var valdTidElement = document.getElementById('valdTid');
    var antalPersonerElement = document.getElementById('antalPersoner');


    var valtDatum = document.getElementById('datumInput').value;
    var valdTid = document.getElementById('tider').value;
    var antalPersoner = document.getElementById('antalPersonerInput').value;

    valtDatumElement.textContent = valtDatum;
    valdTidElement.textContent = valdTid;
    antalPersonerElement.textContent = antalPersoner;
    sammanfattning.style.display = 'block';
}


function boka() {
    alert('Bokning genomförd!');
}
datumInput.addEventListener('change', uppdateraBokningsInfo);
antalPersonerInput.addEventListener('input', uppdateraBokningsInfo);
var bokaKnapp = document.getElementById('bokaKnapp');
bokaKnapp.addEventListener('click', boka);
