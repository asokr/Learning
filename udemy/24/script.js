let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = +box.scrollWidth,
    height = +box.scrollHeight,
    offsetHeight = +box.offsetHeight;
    

console.log('width = '+width+'; height = '+height+'; offsetHeight = '+offsetHeight);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


btn.addEventListener('click', function(){
    if (box.getAttribute('style')) {
        box.removeAttribute('style');
    } else {
        box.setAttribute('style', 'height: '+height-(height - offsetHeight)+'px; overflow: hidden;');
        box.scrollTop = 0;
    }

});