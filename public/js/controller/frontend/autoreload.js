// Alle 60 Sekunden sich selber mit dem aktuellen Tagesdatum aufrufen lassen
$(document).ready(function(){
    setInterval(function()
    { 
        start = Date.now();
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(start);
        location.href = "?date=" + `${year}-${month}-${day}`;
    }, 60000);
});