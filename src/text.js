export function writeToScreen() {
    document.write("hello webpack")
}

export function changeH1(text) {
    document.querySelector('h1').innerText = text;
}

if(module && module.hot) module.hot.accept()