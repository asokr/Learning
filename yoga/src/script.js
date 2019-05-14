document.addEventListener('DOMContentLoaded', function () {
'use strict';

let slider = require('./parts/slider.js'),
    form = require('./parts/form.js'),
    modal = require('./parts/modal.js'),
    tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js'),
    calc = require('./parts/calc.js');

    slider();
    form();
    modal();
    tabs();
    timer();
})