var resolveAffixes;
window.getAffixesReady = new Promise(function(resolve) {
    resolveAffixes = resolve;
});

function getAffixes() {
        var rotation = [
        "wk1",
        "wk2",
        "wk3",
        "wk4",
        "wk5",
        "wk6",
        "wk7",
        "wk8"
    ];
    
    // Epoch: 2026-09-16 09:00 CET (07:00 UTC)
    var epoch = new Date('2026-09-16T07:00:00Z').getTime();
    var now = Date.now();
    var msPerWeek = 7 * 24 * 60 * 60 * 1000;
    
    var weeksDiff = Math.floor((now - epoch) / msPerWeek);
    var index = (1 + (weeksDiff % 8) + 8) % 8;
    
    var currentAffixesId = rotation[index];
    var row = document.getElementById(currentAffixesId);
    
    var a1 = row.cells[0].innerHTML;
    var a2 = row.cells[1].innerHTML;
    var a3 = row.cells[2].innerHTML;
    
    document.getElementById("thisweek").innerHTML = a1 + " " + a2 + " " + a3;
    
    row.classList.add("table__row-both");
    row.classList.remove("table__row");
    
    var nextIndex = (index + 1) % 8;
    var wanIndex = (index + 2) % 8;
    
    var nextRow = document.getElementById(rotation[nextIndex]);
    var wanRow = document.getElementById(rotation[wanIndex]);
    
    document.getElementById("nextweek").innerHTML = nextRow.cells[0].innerHTML + ", " + nextRow.cells[1].innerHTML + ", " + nextRow.cells[2].innerHTML;
    document.getElementById("weekafternext").innerHTML = wanRow.cells[0].innerHTML + ", " + wanRow.cells[1].innerHTML + ", " + wanRow.cells[2].innerHTML;
    
    resolveAffixes();
}

document.addEventListener("DOMContentLoaded", function() {
    getAffixes();
});