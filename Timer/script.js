const date = '2021-10-24 21:44';

const deadPoint = new Date(date);

const showDate = document.querySelector('.date');
showDate.innerHTML = `Our dead point is: ${date}`;


function countDateItems (deadPoint){

const dateNow = Date.now();

const t = deadPoint.getTime() - dateNow;

const days =Math.floor(t/(1000*60*60*24)) ,
    hours = Math.floor((t/(1000*60*60))%24),
    minutes = Math.floor((t/(1000*60))%60),
    seconds = Math.floor((t/1000)%60);



return {
    total: t,
    days:days,
    hours: hours,
    minutes: minutes,
    seconds: seconds

};
    }

   

function getZero(num){
    if(num<10 && num>0){
        return `0${num}`;
    }
    else return num;
    
    }



function showTimer (selector, endPoint){

    let timer  = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds');

    const time = setInterval(timerGo, 1000);

  


    timerGo();


            function timerGo(){
               const data =  countDateItems(endPoint);
              
               
                    days.innerHTML = getZero( data.days);
                    hours.innerHTML = getZero(data.hours);
                    minutes.innerHTML = getZero(data.minutes);
                    seconds.innerHTML = getZero(data.seconds);

                    if(data.total<=0){
                        clearInterval(time);
                        days.innerHTML = '0';
                        hours.innerHTML = '0';
                        minutes.innerHTML = '0';
                        seconds.innerHTML = '0';
                    }

            }
            
           


}
showTimer('.MyTimer',deadPoint);

