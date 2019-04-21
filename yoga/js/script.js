
window.addEventListener('DOMContentLoaded', function() {

'use strict';
// Табы
let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(a) {
        if (tabContent[a].classList.contains('hide')){
            tabContent[a].classList.remove('hide');
            tabContent[a].classList.add('show');            
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Таймер
    
    let deadline = '2019-04-22';

    function getTimeRemaining(endtime) {
        
        let t = Date.parse(endtime) - Date.now(),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor((t/1000/60/60/24));

            return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            dayname = timer.querySelector('.dayname'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
            function updateClock() {
                let t = getTimeRemaining(endtime);
                if (t.days > 0) {
                    days.textContent = t.days;
                } else {
                    days.textContent = "";
                }
                dayname.textContent = formatDays(t.days);
                hours.textContent = formatTime(t.hours);
                minutes.textContent = formatTime(t.minutes);
                seconds.textContent = formatTime(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    days.textContent = "";
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }

            function formatTime(time){
                if ( time < 10) {
                    time = '0' + time;
                }
                return time;
            }

            function formatDays(day) {
                let sb = '',
                    dayNew = day % 100,
                    lastFigure = dayNew % 10;

                if (dayNew > 10 && dayNew < 20) {
                  sb = 'ей';
                }
                else if (lastFigure == 1) {
                  sb = "день";
                }
                else if (lastFigure > 1 && lastFigure < 5) {
                  sb = 'дня';
                }
                else if (lastFigure == 0 ) {
                    sb = '';
                  }
                else {
                  sb = 'дней';
                }
                return sb;
            }
    }

    setClock('timer', deadline);

});