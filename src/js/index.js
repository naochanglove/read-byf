let opened = false;
let openedA = false;
let openedB = false;

function openData() {
    if (!opened) {
        document.getElementById("dua").style.display = 'block';
        opened = true;
    } else {
        document.getElementById("dua").style.display = 'none';
        opened = false;
    }
};

function openDataA() {
    if (!openedA) {
        document.getElementById("muncul").style.display = 'block';
        openedA = true;
    } else {
        document.getElementById("muncul").style.display = 'none';
        openedA = false;
    }
};

function openDataB() {
    if (!openedB) {
        document.getElementById("tiga").style.display = 'block';
        openedB = true;
    } else {
        document.getElementById("tiga").style.display = 'none';
        openedB = false;
    }
};