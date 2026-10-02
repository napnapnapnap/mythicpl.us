var affixSpellIds = {
    "Bolstering": 209859,
    "Necrotic": 209858,
    "Overflowing": 221336,
    "Raging": 209862,
    "Sanguine": 226568,
    "Skittish": 209861,
    "Teeming": 209856,
    "Volcanic": 209855,
    "Fortified": 209279,
    "Tyrannical": 209278
};

function getWoWLink(affixName) {
    var spellId = affixSpellIds[affixName];
    if (!spellId) return affixName;
    return "|cff71d5ff|Hspell:" + spellId + "|h[" + affixName + "]|h|r";
}

function executeCopyToWoW(text, btnElement) {
    // using | instead of \124 is perfectly fine inside SetText() and saves massive character limits
    var script = '/run local b=ChatEdit_ChooseBoxForSend();ChatEdit_ActivateChat(b);b:SetText("' + text.replace(/"/g, '\\"') + '");';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(script).then(function() {
            triggerCopiedFeedback(btnElement);
        }).catch(function(err) {
            console.error("Could not copy text: ", err);
        });
    } else {
        // Fallback for older browsers
        var textArea = document.createElement("textarea");
        textArea.value = script;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            triggerCopiedFeedback(btnElement);
        } catch (err) {
            console.error("Could not copy text: ", err);
        }
        document.body.removeChild(textArea);
    }
}

function triggerCopiedFeedback(btnElement) {
    if (btnElement) {
        var oldText = btnElement.innerHTML;
        btnElement.innerHTML = "Copied!";
        setTimeout(function() { btnElement.innerHTML = oldText; }, 2000);
    } else {
        alert("Copied to clipboard!\nPaste into WoW chat and press Enter.");
    }
}

function copyThisWeekAffixes(btnElement) {
    var a1 = document.querySelector("#thisweek .affix-wrapper:nth-child(1) img").alt;
    var a2 = document.querySelector("#thisweek .affix-wrapper:nth-child(2) img").alt;
    var a3 = document.querySelector("#thisweek .affix-wrapper:nth-child(3) img").alt;
    var msg = "This week's affixes: " + getWoWLink(a1) + ", " + getWoWLink(a2) + ", " + getWoWLink(a3);
    executeCopyToWoW(msg, btnElement);
}

function copyAffixDescription(btnElement, affixName) {
    var li = btnElement.closest('li');
    var p = li.querySelector('p.trn'); 
    var description = p.innerText;
    var msg = getWoWLink(affixName) + ": " + description;
    executeCopyToWoW(msg, btnElement);
}
