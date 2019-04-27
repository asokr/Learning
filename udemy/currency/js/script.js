let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

getCurrentRate(inputRub, inputUsd);

function getCurrentRate(inputRub, inputUsd) {
    inputRub.addEventListener('input', function () {

        function inputResponse() {
            return new Promise( (resolve, reject) => {
                
                    let request = new XMLHttpRequest();

                    request.open('GET', 'js/current.json');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.send();

                    request.addEventListener('readystatechange', () => {
                        if (request.readyState <= 4) {
                            if (request.readyState === 4 && request.status == 200) {
                                let data = JSON.parse(request.response);
                                resolve(data);
                            }
                        } else {
                            reject();
                        }
                    });
                });
            }

            inputResponse()
            .then(data => {
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => {
                inputUsd.value = "Что-то пошло не так!";
            });
    });
}