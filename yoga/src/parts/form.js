function form() {
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
}

module.exports = form;