window.onload = function () {
    if (typeof history.pushState === "function") {
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    } else {
        history.go(1);
    }
};

function preventBack() {
    window.history.forward();
}
 setTimeout("preventBack()", 0);
window.onunloadfunction() {
    null;
}

function preback() {
    window.history.forward();
}
setTimeout("preback()", 0);
window.onunload = function () {
    null
};

