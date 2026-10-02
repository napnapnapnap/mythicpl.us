var affixSpellIds = {
    "Bolstering": 209859,
    "Necrotic": 209858,
    "Sanguine": 226512
};

function getSpellMacro(affixName) {
    var spellId = affixSpellIds[affixName];
    if (!spellId) return '"' + affixName + '"';
    return "GetSpellLink(" + spellId + ")";
}

function executeCopyToWoW(script, btnElement) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(script).then(function() {
            triggerCopiedFeedback(btnElement);
        }).catch(function(err) {
            console.error("Could not copy text: ", err);
        });
    } else {
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
    var imgs = document.querySelectorAll("#thisweek img");
    var a1 = imgs[0] ? imgs[0].alt : "";
    var a2 = imgs[1] ? imgs[1].alt : "";
    var a3 = imgs[2] ? imgs[2].alt : "";
    
    var msgPart = '"This week\'s affixes: "..' + getSpellMacro(a1) + '..", "..' + getSpellMacro(a2) + '..", "..' + getSpellMacro(a3);
    var script = '/run local e=ChatEdit_ChooseBoxForSend()local t=e:GetAttribute("chatType")SendChatMessage(' + msgPart + ',t,nil,e:GetAttribute("channelTarget"))';
    executeCopyToWoW(script, btnElement);
}

function copyAffixDescription(btnElement, affixName) {
    var li = btnElement.closest('li');
    var p = li.querySelector('p.trn'); 
    var description = p.innerText || p.textContent;
    
    // Clean up newlines and extra spaces that break WoW macros
    description = description.replace(/\s+/g, ' ').trim();
    // Escape double quotes for Lua string
    description = description.replace(/"/g, '\\"');
    
    var prefix = '/run local e=ChatEdit_ChooseBoxForSend()local t=e:GetAttribute("chatType")SendChatMessage(' + getSpellMacro(affixName) + '..": ';
    var suffix = '",t,nil,e:GetAttribute("channelTarget"))';
    
    // Calculate space for description to ensure macro stays <= 255 chars
    var availableSpace = 255 - prefix.length - suffix.length;
    
    if (description.length > availableSpace) {
        description = description.substring(0, availableSpace - 3) + "...";
    }
    
    var script = prefix + description + suffix;
    executeCopyToWoW(script, btnElement);
}

function getDiscordLink(affixName) {
    var spellId = affixSpellIds[affixName];
    if (!spellId) return affixName;
    return "[" + affixName + "](https://legion-shoot.tauri.hu/?spell=" + spellId + ")";
}

function executeCopyToDiscord(text, btnElement) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            triggerCopiedFeedback(btnElement);
        }).catch(function(err) {
            console.error("Could not copy text: ", err);
        });
    } else {
        var textArea = document.createElement("textarea");
        textArea.value = text;
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

function copyThisWeekAffixesDiscord(btnElement) {
    var imgs = document.querySelectorAll("#thisweek img");
    var a1 = imgs[0] ? imgs[0].alt : "";
    var a2 = imgs[1] ? imgs[1].alt : "";
    var a3 = imgs[2] ? imgs[2].alt : "";
    
    var msg = "This week's affixes: " + getDiscordLink(a1) + ", " + getDiscordLink(a2) + ", " + getDiscordLink(a3) + " - more info at [mythicpl.us](https://napnapnapnap.github.io/mythicpl.us/)";
    executeCopyToDiscord(msg, btnElement);
}

function copyAffixDescriptionDiscord(btnElement, affixName) {
    var li = btnElement.closest('li');
    var p = li.querySelector('p.trn'); 
    var description = p.innerText || p.textContent;
    
    description = description.replace(/\s+/g, ' ').trim();
    
    var msg = "**" + getDiscordLink(affixName) + "**: " + description + " - more info at [mythicpl.us](https://napnapnapnap.github.io/mythicpl.us/)";
    executeCopyToDiscord(msg, btnElement);
}
