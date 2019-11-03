window.addEventListener('DOMContentLoaded', function() {        // ТАБЫ

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

                                                                    // ТАЙМЕР

    let deadline = '2019-11-1'; // конечная дата

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),   // разница между текущей датой и конечной в милисекундах
            seconds = Math.floor((t/1000) % 60),                // получаем секунды часы и минуты
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {                        // возвращаем объект
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),        // создаем различные переменные, берем их со страницы
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);      // получаем разницу между дедлайном и текущим временем с помощью функции описанной выше
            hours.textContent = t.hours;           // записываем полученные из объекта данные прямо в верстку
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

        function addZero(num){              // добавляем 0 перед цифрой 
            if(num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        }
            hours.textContent = addZero(t.hours);           
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

        if(t.total <= 0) {
                clearInterval(timeInterval);        // останавливаем таймер
                hours.textContent = '00';           
                minutes.textContent = '00';
                seconds.textContent = '00';    
            }  
        }
    }

    setClock('timer', deadline);
    
    // ==============================================МОДАЛЬНОЕ ОКНО
    
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreInTab = document.querySelectorAll('.description-btn', [0]);
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';   // запрет скролла страницы при открытом модальном окне
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-spalsh');
        document.body.style.overflow = '';
    });

    
    moreInTab.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            let target = event.target;
            if(target && target.classList.contains('description-btn')) {
                if(target == tab) {
                    overlay.style.display = 'block';
                    this.classList.add('more-splash');
                }
            }
        });
    });
    
});









