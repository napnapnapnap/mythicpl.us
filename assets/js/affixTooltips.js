// Affix tooltips on every link to an affix of the list (#affix-Name: this week, next weeks, schedule table).
// Tauri's power.js has no affix tooltips (legion-shoot's ?affix= pages carry no tooltip data), so they are ours,
// built from the page's own affix list, already translated: icon, name, keystone level, effect and note.
(function () {
    var tip = document.createElement('div');
    tip.className = 'affix-tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.hidden = true;

    function affixLink(target) {
        return target.closest && target.closest('a[href^="#affix-"]');
    }

    function fill(li) {
        var name = li.querySelector('.affix-icon-container a');
        var level = li.closest('.affixes-block').querySelector('.title__subtitle');
        var info = li.querySelector('p.trn:not(.affixes-list__note)');
        var note = li.querySelector('.affixes-list__note');
        tip.innerHTML = '';
        var head = document.createElement('div');
        head.className = 'affix-tooltip__head';
        head.appendChild(li.querySelector('.affix-icon-list').cloneNode());
        var title = document.createElement('span');
        title.className = name.className.replace(/\btrn\b/, '');
        title.textContent = name.textContent;
        head.appendChild(title);
        tip.appendChild(head);
        [[level, 'affix-tooltip__level'], [info, ''], [note, 'affix-tooltip__note']].forEach(function (part) {
            if (!part[0] || !part[0].textContent.trim()) return;
            var p = document.createElement('p');
            p.className = part[1];
            p.textContent = part[0].textContent.trim();
            tip.appendChild(p);
        });
    }

    // Next to the cursor, kept inside the window: above the cursor when it does not fit below
    function place(x, y) {
        tip.style.left = Math.max(8, Math.min(x + 16, window.innerWidth - tip.offsetWidth - 8)) + 'px';
        var below = y + 16;
        tip.style.top = (below + tip.offsetHeight <= window.innerHeight - 8 ? below : Math.max(8, y - 16 - tip.offsetHeight)) + 'px';
    }

    function show(link, x, y) {
        var li = document.getElementById(link.getAttribute('href').slice(1));
        if (!li) return;
        fill(li);
        tip.hidden = false;
        place(x, y);
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(tip);
    });
    document.addEventListener('mouseover', function (e) {
        var link = affixLink(e.target);
        if (link && !link.contains(e.relatedTarget)) show(link, e.clientX, e.clientY);
    });
    document.addEventListener('mousemove', function (e) {
        if (!tip.hidden && affixLink(e.target)) place(e.clientX, e.clientY);
    });
    document.addEventListener('mouseout', function (e) {
        var link = affixLink(e.target);
        if (link && !link.contains(e.relatedTarget)) tip.hidden = true;
    });
    document.addEventListener('focusin', function (e) {
        var link = affixLink(e.target);
        if (!link) return;
        var r = link.getBoundingClientRect();
        show(link, r.left, r.bottom - 8);
    });
    document.addEventListener('focusout', function () { tip.hidden = true; });
    document.addEventListener('scroll', function () { tip.hidden = true; }, true);
})();
