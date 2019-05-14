/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value.length === 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value.length === 0) {
      totalValue.innerHTML = 0;
    } else {
      console.log(persons.value.length);
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  // Form
  var message = {
    loading: "Загрузка...",
    succes: "Спасибо! Скоро мы с вами свяжемся!",
    failure: 'Что-то пошло не так'
  }; // Форма в модальном окне

  function sendForm(element) {
    var input = element.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    element.addEventListener('submit', function (event) {
      event.preventDefault();
      element.appendChild(statusMessage);
      var formData = new FormData(element);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencded');
          request.onreadystatechange(function () {
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
        for (var i = 0; i < input.length; i++) {
          input[i].value = "";
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.succes;
      })["catch"](function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  var form = document.querySelector('.main-form'),
      contactForm = document.querySelector('.contact-form');
  sendForm(form);
  sendForm(contactForm);
}

module.exports = form;

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  // Модальное окно
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.querySelectorAll('.description-btn');
  descriptionBtn.forEach(function (element) {
    element.addEventListener('click', function () {
      overlay.style.display = 'block';
      element.classList.add('more-spash');
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function () {
      element.classList.remove('more-spash');
    });
  });
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    more.classList.add('more-spash');
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-spash');
    document.body.style.overflow = '';
  });
}

module.exports = modal;

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports - slider;

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
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

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = '2020-04-29'; // Сколько осталось времени

  function getTimeRemaining(endtime) {
    // Получаем разницу. Переводим конечную дату в миллисекунды и отнимаем текущую дату
    var t = Date.parse(endtime) - Date.now(),
        // Высчитываем секунды, минуты, часы и дни
    seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60 % 24),
        days = Math.floor(t / 1000 / 60 / 60 / 24);
    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days
    };
  } // Форматируем и устанавливаем значения в разметку


  function setClock(id, endtime) {
    // Получаем блок таймера по его id
    var timer = document.getElementById(id),
        // И соотвественно, все элементы блока
    days = timer.querySelector('.days'),
        dayname = timer.querySelector('.dayname'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        // Обновляем таймер каждую секунду
    timeInterval = setInterval(updateClock, 1000); // Функция для обновления таймера

    function updateClock() {
      // Помещаем в t результат функции getTimeRemaining (объект)
      var t = getTimeRemaining(endtime); // Если дней осталось 0 - не выводим

      if (t.days <= 0) {
        days.textContent = "";
        dayname.textContent = "";
      } else {
        days.textContent = t.days; // Вставляем слово "день" при этом форматируя (дней, дня)

        dayname.textContent = formatDays(t.days);
      } // Вставляем оставшееся время


      hours.textContent = formatTime(t.hours);
      minutes.textContent = formatTime(t.minutes);
      seconds.textContent = formatTime(t.seconds); // Если Дедлайн прошёл - вставляем в таймер 00:00:00,
      // и останавливаем отсчёт (clearInterval)

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = "";
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    } // Функция добавляет 0 к единцам, получаем
    // 03:04:05 вместо 3:4:5


    function formatTime(time) {
      if (time < 10) {
        time = '0' + time;
      }

      return time;
    } // Форматируем слово день в зависимости от числа
    // 1 день, 2 дня, 5 дней.


    function formatDays(day) {
      var sb = '',
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
}

module.exports = timer;

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var slider = __webpack_require__(/*! ./parts/slider.js */ "./src/parts/slider.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/parts/form.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/parts/modal.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/parts/timer.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js");

  slider();
  form();
  modal();
  tabs();
  timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map