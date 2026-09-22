var resolveAffixes;
window.getAffixesReady = new Promise(function(resolve) {
    resolveAffixes = resolve;
});

function getAffixes() {
    var rotation = [
        "tyvora", // 0
        "foexte", // 1
        "tygrbo", // 2
        "fonesa", // 3
        "tyskbu", // 4
        "foqute", // 5
        "tynera", // 6
        "foskbo", // 7
        "tyvote", // 8
        "fogrsa", // 9
        "tyexbo", // 10
        "foqubu"  // 11
    ];
    
    // Epoch: 2026-09-16 09:00 CET (07:00 UTC)
    var epoch = new Date('2026-09-16T07:00:00Z').getTime();
    var now = Date.now();
    var msPerWeek = 7 * 24 * 60 * 60 * 1000;
    
    var weeksDiff = Math.floor((now - epoch) / msPerWeek);
    var index = (2 + (weeksDiff % 12) + 12) % 12;
    
    var currentAffixesId = rotation[index];
    var row = document.getElementById(currentAffixesId);
    
    var a1 = row.cells[0].innerHTML;
    var a2 = row.cells[1].innerHTML;
    var a3 = row.cells[2].innerHTML;
    
    document.getElementById("thisweekus").innerHTML = "<span class='title__intro trn'>US</span> " + a1 + " " + a2 + " " + a3;
    document.getElementById("thisweekeu").innerHTML = "<span class='title__intro trn'>EU</span> " + a1 + " " + a2 + " " + a3;
    
    row.classList.add("table__row-both");
    row.classList.remove("table__row");
    
    var nextIndex = (index + 1) % 12;
    var wanIndex = (index + 2) % 12;
    
    var nextRow = document.getElementById(rotation[nextIndex]);
    var wanRow = document.getElementById(rotation[wanIndex]);
    
    document.getElementById("nextweek").innerHTML = nextRow.cells[0].innerHTML + ", " + nextRow.cells[1].innerHTML + ", " + nextRow.cells[2].innerHTML;
    document.getElementById("weekafternext").innerHTML = wanRow.cells[0].innerHTML + ", " + wanRow.cells[1].innerHTML + ", " + wanRow.cells[2].innerHTML;
    
    resolveAffixes();
}

document.addEventListener("DOMContentLoaded", function() {
    getAffixes();
});