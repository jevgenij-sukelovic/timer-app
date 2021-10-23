const date = '2021-12-31';

const deadPoint0 = new Date(date);

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



function showTimer (selector){

    let timer  = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds');
    const time = setInterval(timerGo, 1000);

    timerGo();


            function timerGo(){
               const data =  countDateItems(deadPoint0);
               
                    days.innerHTML = getZero( data.days);
                    hours.innerHTML = getZero(data.hours);
                    minutes.innerHTML = getZero(data.minutes);
                    seconds.innerHTML = getZero(data.seconds);

                    

            }


}
showTimer('.MyTimer');

