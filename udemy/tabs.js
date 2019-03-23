window.addEventListener('DOMContentLoaded', function() {

'use strict';

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
    })

});

/* Верстка
			<div class="info" >
				<div class="info-header">
					<div class="info-header-tab">Лечение</div>
					<div class="info-header-tab">Отдых</div>
					<div class="info-header-tab">Природа</div>
					<div class="info-header-tab">Йога</div>
				</div>
				<div class="info-tabcontent fade">
					<div class="description">
						<div class="description-title">Здоровый позвоночник</div>
						<div class="description-text">Йога, массажи и плавание в море - помогут уставшей спине! Индийские йоги считали, что здоровье человека можно определить по тому, насколько здоров и гибок у него позвоночник.<br> Интересно, что бы древние йоги сказали, глядя на современного человека, который уже со школьного возраста мучается болями в спине, работает подолгу в неудобных сидячих позах и не умеет расслабляться, имеет искривление, которое в итоге приведет к болезням других органов? Йоги сказали бы – займись собой и срочно!
						</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/massage.jpg" alt="Massage">
					</div>
				</div>
				<div class="info-tabcontent fade">
					<div class="description">
						<div class="description-title">Антистресс</div>
						<div class="description-text">Аюрведа и йога утверждают, что главным источником здоровья нашего организма является здоровый ум. Программа «Антистресс» сначала убирает последствия стресса на физическом уровне, потом помогает избавиться от негативных и навязчивых мыслей, затем повышает общий уровень энергии.<br> Вы наконец вспомните ощущение "свободной головы", ощутите прилив физических сил и вспомните, что такое счастье.</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/sunset.jpg" alt="sunset">
					</div>
				</div>
				<div class="info-tabcontent fade">
					<div class="description">
						<div class="description-title">Восстановление</div>
						<div class="description-text">Стрессы, жизнь в условиях города, плохая экология, загрязненные продукты и вода, напряженный ритм жизни - все это день ото дня отбирает у нас молодость и хорошее здоровье.<br> Одним кремом для лица не решить проблему омоложения организма, когда тебе за 40. Согласны?</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/sunrise.jpg" alt="sunrise">
					</div>
				</div>
				<div class="info-tabcontent fade">
					<div class="description">
						<div class="description-title">Йога и аюрведа</div>
						<div class="description-text">Несколько лет назад мы разработали специальные программы по йоге и аюрведе - и мы поняли, что они отлично работают - на опыте 530 наших туристов! В каждой из этих программ есть одна цель, на достижение которой будут направлены и асаны, и дыхательные практики, и медитации, и аюрведические процедуры, будут читаться лекции по этой теме. <br>Йога и аюрведа - два сильных война, которые сообща будут бороться с проблемами и болезнями.</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/yoga.jpg" alt="yoga">
					</div>
				</div>
            </div>
            */


/* Стили 
.fade {
  -webkit-animation-name: fade;
          animation-name: fade;
  -webkit-animation-duration: 2.5s;
          animation-duration: 2.5s;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2.5s;
}
@-webkit-keyframes fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

.content .info {
  width: 100%;
  min-height: 580px;
  background-color: #373737;
  padding: 50px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
}
.content .info-header {
  width: 100%;
  height: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around;
}
.content .info-header-tab {
  color: #c78030;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
.content .info-header-tab:after {
  content: '';
  display: block;
  width: 0%;
  height: 3px;
  background-color: #c78030;
  margin-top: 4px;
  -webkit-transition: 0.4s;
          transition: 0.4s;
}
.content .info-header-tab:hover:after {
  width: 60%;
}
.content .info-tabcontent {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 50px;
  -webkit-transition: 0.3s;
          transition: 0.3s;
}
.content .info-tabcontent .description,
.content .info-tabcontent .photo {
  width: 50%;
}
.content .info-tabcontent .description-title {
  font-size: 34px;
  color: #c78030;
}
.content .info-tabcontent .description-title:after {
  content: '';
  display: block;
  width: 20%;
  height: 3px;
  background-color: #c78030;
  margin-top: 4px;
}
.content .info-tabcontent .description-text {
  margin-top: 30px;
  color: #fff;
  font-weight: 300;
  padding-right: 20px;
}
.content .info-tabcontent .description-btn {
  width: 180px;
  height: 45px;
  line-height: 43px;
  margin-top: 30px;
  border: 1px solid #c78030;
  font-size: 14px;
  color: #c78030;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-weight: 300;
  cursor: pointer;
}
.content .info-tabcontent .description-btn:hover {
  box-shadow: 0px 0px 5px #c78030;
}
.content .info-tabcontent .photo {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.content .info-tabcontent .photo img {
  width: 100%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
}
.content .info .hide {
  display: none;
}
.content .info .show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

*/