console.log("Hello World.");

let alarmTime = document.getElementById('alarmTime');

const ringAlarm = function(url) {
    let audio = new Audio(url);
    audio.play();
}

const setAlarm = function(e) {
    e.preventDefault(); // Stops the page from reloading upon submitting the form.
    console.log("Setting up your alarm.");
    let date = document.getElementById('date');
    let aTime = document.getElementById('aTime');
    console.log(date.value);
    console.log(aTime.value);
    let timeofTheAlarm = new Date(`${date.value} ${aTime.value}`);
    console.log(timeofTheAlarm);

    let now = new Date();
    let timeToAlarm = timeofTheAlarm - now;

    console.log(timeToAlarm);

    if(timeToAlarm>=0) {
        setTimeout(() =>{
            ringAlarm(url);
        }, timeToAlarm);
    }
    else {
        console.log("Please enter a valid date and time.");
    }

}

alarmTime.addEventListener('click', setAlarm);
