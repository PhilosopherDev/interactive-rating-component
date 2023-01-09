const selected = [];

document.querySelector('.step').addEventListener('click', selectNumber);

function selectNumber(evt) {
    const target = evt.target;
    const value = evt.target.dataset.value;

    if (value) {
        const index = selected.indexOf(value);
        if (index > -1) {
            selected.splice(index, 1);
            target.setAttribute('class', 'btn__number');
        } else {
            selected.push(value);
            target.setAttribute('class', 'btn__number btn__number-active');
        }
    }
}