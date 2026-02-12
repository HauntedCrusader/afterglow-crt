document.addEventListener("DOMContentLoaded", () => {

const body = document.body;

const themes = [
    "crt-office98",
    "crt-green",
    "crt-amber",
    "crt-pvm"
];

let index = 0;

function applyTheme(){
    
    body.classList.remove(...themes);
    body.classList.add(themes[index]);

    index++;

    if(index >= themes.length){
        index = 0;
    }
}

applyTheme();
setInterval(applyTheme, 2000);
});