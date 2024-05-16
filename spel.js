var datumInput = document.getElementById('datumInput');
var antalPersonerInput = document.getElementById('antalPersonerInput');
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
    var antalPersonerVärde = antalPersonerInput.value;
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
    var tiderLista = document.getElementById('tider');
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

function boka() {
    var valtDatum = document.getElementById('datumInput').value;
    var valdTid = document.getElementById('tider').value;
    var antalPersoner = document.getElementById('antalPersonerInput').value;

    document.getElementById('valtDatum').textContent = valtDatum;
    document.getElementById('valdTid').textContent = valdTid;
    document.getElementById('antalPersoner').textContent = antalPersoner;
    document.getElementById('sammanfattning').style.display = 'block';
}

bokningsFormulär.addEventListener('submit', function(event) {
    event.preventDefault(); 
    boka();
});

var bokaKnapp = document.getElementById('bokaknapp');

function genomför(){
    alert("Bokning genomförd!")
}

bokaKnapp.addEventListener('click', genomför);
