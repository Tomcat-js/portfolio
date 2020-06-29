
let body = document.querySelector('body');
let links = document.querySelectorAll('a');
let pics = document.querySelectorAll('.pic')


const flasher = () => {
    if (body.className !== 'blinking') {
        body.className = 'blinking';
    } else {
        body.className = ''
    }
}


links.forEach(e => {
    e.addEventListener('mouseover', flasher);
})


