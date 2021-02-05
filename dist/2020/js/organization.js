function untoggleAll(component) {
    let flippers = document.getElementsByClassName('flipper')
    for (let i = 0; i < flippers.length; i++) {
        const f = Array.from(flippers[i].classList);
        const c = Array.from(component.classList);
        if (f.toString() !== c.toString()) {
            flippers[i].classList.remove('click')
        }
    }
}

function toggleRotate(component) {
    untoggleAll(component)
    component.classList.toggle('click')
}