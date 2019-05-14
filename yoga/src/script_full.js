window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    // Табы
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(a) {
        if (tabContent[a].classList.contains('hide')) {
            tabContent[a].classList.remove('hide');
            tabContent[a].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
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
    let deadline = '2020-04-29';

    // Сколько осталось времени
    function getTimeRemaining(endtime) {
        // Получаем разницу. Переводим конечную дату в миллисекунды и отнимаем текущую дату
        let t = Date.parse(endtime) - Date.now(),
            // Высчитываем секунды, минуты, часы и дни
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / 1000 / 60 / 60 / 24));

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
        function formatTime(time) {
            if (time < 10) {
                time = '0' + time;
            }
            return time;
        }

        // Форматируем слово день в зависимости от числа
        // 1 день, 2 дня, 5 дней.
        function formatDays(day) {
            let sb = '',
                dayNew = day % 100,
                lastFigure = dayNew % 10;
            if (dayNew > 10 && dayNew < 20) {
                sb = 'ей';
            } else if (lastFigure == 1) {
                sb = "день";
            } else if (lastFigure > 1 && lastFigure < 5) {
                sb = 'дня';
            } else {
                sb = 'дней';
            }
            return sb;
        }
    }

    setClock('timer', deadline);


    // Модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach(element => {
        element.addEventListener('click', () => {
            overlay.style.display = 'block';
            element.classList.add('more-spash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            element.classList.remove('more-spash');
        });
    });


    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        more.classList.add('more-spash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-spash');
        document.body.style.overflow = '';
    });

    // Form
    let message = {
        loading: "Загрузка...",
        succes: "Спасибо! Скоро мы с вами свяжемся!",
        failure: 'Что-то пошло не так'
    };

    // Форма в модальном окне
    function sendForm(element) {
        let input = element.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        element.addEventListener('submit', (event) => {
            event.preventDefault();
            element.appendChild(statusMessage);
            let formData = new FormData(element);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencded');
                    request.onreadystatechange(() => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.succes)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }
    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('.contact-form');
    sendForm(form);
    sendForm(contactForm);

    // Слайдер
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);

        function showSlides(n) {

            if( n > slides.length) {
                slideIndex = 1;
            } else if ( n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item)=> item.style.display = 'none');
            dots.forEach((item)=> item.classList.remove('dot-active'));

            slides[slideIndex-1].style.display = 'block';
            dots[slideIndex-1].classList.add('dot-active');
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', ()=>{
            plusSlides(-1); 
        });

        next.addEventListener('click', ()=>{
            plusSlides(1); 
        });

        dotsWrap.addEventListener('click', (event)=>{
            for(let i=0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });

        //Калькулятор
        let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personsSum = 0,
            daysSum = 0,
            total = 0;

            totalValue.innerHTML = 0;

            persons.addEventListener('change', function() {
                personsSum = +this.value;
                total = (daysSum + personsSum)*4000;

                if (restDays.value == '' || persons.value.length === 0) {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });
            
            restDays.addEventListener('change', function() {
                daysSum = +this.value;
                total = (daysSum + personsSum)*4000;

                if (persons.value == '' || restDays.value.length === 0) {
                    totalValue.innerHTML = 0;
                } else {
                    console.log(persons.value.length)
                    totalValue.innerHTML = total;
                }
            });

            place.addEventListener('change', function() {
                if (restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                } else {
                    let a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                }
            });
});