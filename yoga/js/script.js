
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
    // Задаём конечную дату
    let deadline = '2019-04-22';

    // Сколько осталось времени
    function getTimeRemaining(endtime) {
        // Получаем разницу. Переводим конечную дату в миллисекунды и отнимаем текущую дату
        let t = Date.parse(endtime) - Date.now(),
        // Высчитываем секунды, минуты, часы и дни
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

    // Форматируем и устанавливаем значения в разметку
    function setClock(id, endtime) {
        // Получаем блок таймера по его id
        let timer = document.getElementById(id),
        // И соотвественно, все элементы блока
            days = timer.querySelector('.days'),
            dayname = timer.querySelector('.dayname'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            // Обновляем таймер каждую секунду
            timeInterval = setInterval(updateClock, 1000);

            // Функция для обновления таймера
            function updateClock() {
                // Помещаем в t результат функции getTimeRemaining (объект)
                let t = getTimeRemaining(endtime);
                // Если дней осталось 0 - не выводим
                if (t.days <= 0) {
                    days.textContent = "";
                    dayname.textContent = "";
                } else {
                    days.textContent = t.days;
                // Вставляем слово "день" при этом форматируя (дней, дня)
                    dayname.textContent = formatDays(t.days);                    
                }
                // Вставляем оставшееся время
                hours.textContent = formatTime(t.hours);
                minutes.textContent = formatTime(t.minutes);
                seconds.textContent = formatTime(t.seconds);

                // Если Дедлайн прошёл - вставляем в таймер 00:00:00,
                // и останавливаем отсчёт (clearInterval)
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    days.textContent = "";
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }

            // Функция добавляет 0 к единцам, получаем
            // 03:04:05 вместо 3:4:5
            function formatTime(time){
                if ( time < 10) {
                    time = '0' + time;
                }
                return time;
            }

            // Форматируем слово день в зависимости от числа
            // 1 день, 2 дня, 5 дней.
            function formatDays(day) {
                let sb = '',
                    dayNew = day % 100,
                    lastFigure = day % 10;
                if (dayNew > 10 && dayNew < 20) {
                  sb = 'ей';
                }
                else if (lastFigure == 1) {
                  sb = "день";
                }
                else if (lastFigure > 1 && lastFigure < 5) {
                  sb = 'дня';
                }
                else {
                  sb = 'дней';
                }
                return sb;
            }
    }

    setClock('timer', deadline);

});