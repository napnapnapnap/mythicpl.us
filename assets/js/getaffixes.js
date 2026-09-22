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
    
    var a1 = row.cells[1].innerHTML;
    var a2 = row.cells[2].innerHTML;
    var a3 = row.cells[3].innerHTML;
    
    
    function wrapWithIcon(htmlStr) {
        var match = htmlStr.match(/affix-([A-Za-z]+)/);
        if (match) {
            var affixName = match[1];
            var iconStr = '<img src="assets/img/affixes/' + affixName + '.jpg" class="affix-icon-top" alt="' + affixName + '">';
            return '<div class="affix-wrapper">' + iconStr + htmlStr + '</div>';
        }
        return htmlStr;
    }

    document.getElementById("thisweek").innerHTML = '<div class="affix-group-container">' + wrapWithIcon(a1) + wrapWithIcon(a2) + wrapWithIcon(a3) + '</div>';

    
    row.classList.add("table__row-both");
    row.classList.remove("table__row");
    
    var nextIndex = (index + 1) % 8;
    var wanIndex = (index + 2) % 8;
    
    var nextRow = document.getElementById(rotation[nextIndex]);
    var wanRow = document.getElementById(rotation[wanIndex]);
    
    
    document.getElementById("nextweek").innerHTML = '<div class="affix-group-container">' + wrapWithIcon(nextRow.cells[1].innerHTML) + wrapWithIcon(nextRow.cells[2].innerHTML) + wrapWithIcon(nextRow.cells[3].innerHTML) + '</div>';

    
    document.getElementById("weekafternext").innerHTML = '<div class="affix-group-container">' + wrapWithIcon(wanRow.cells[1].innerHTML) + wrapWithIcon(wanRow.cells[2].innerHTML) + wrapWithIcon(wanRow.cells[3].innerHTML) + '</div>';

    
    
    function formatDateRange(startDateTimestamp) {
        var start = new Date(startDateTimestamp);
        var end = new Date(startDateTimestamp + 7 * 24 * 60 * 60 * 1000);
        
        var options = { month: 'short', day: 'numeric' };
        return "(" + start.toLocaleDateString('en-US', options) + " - " + end.toLocaleDateString('en-US', options) + ")";
    }

    var thisWeekStart = epoch + weeksDiff * msPerWeek;
    var nextWeekStart = epoch + (weeksDiff + 1) * msPerWeek;
    var wanWeekStart = epoch + (weeksDiff + 2) * msPerWeek;
    
    var elThisWeekDate = document.getElementById("date-thisweek");
    if (elThisWeekDate) elThisWeekDate.innerText = formatDateRange(thisWeekStart);
    
    var elNextWeekDate = document.getElementById("date-nextweek");
    if (elNextWeekDate) elNextWeekDate.innerText = formatDateRange(nextWeekStart);
    
    var elWanWeekDate = document.getElementById("date-weekafternext");
    if (elWanWeekDate) elWanWeekDate.innerText = formatDateRange(wanWeekStart);

    for (var i = 0; i < 8; i++) {
        var weeksFromNow = (i - index + 8) % 8;
        var rowDateStart = epoch + (weeksDiff + weeksFromNow) * msPerWeek;
        var elRowDate = document.getElementById("date-" + rotation[i]);
        if (elRowDate) {
            elRowDate.innerText = formatDateRange(rowDateStart);
        }
    }

    resolveAffixes();
}

document.addEventListener("DOMContentLoaded", function() {
    getAffixes();
});