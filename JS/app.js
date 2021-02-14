// * console.log("Hello World.");

let alarmTime = document.getElementById('alarmTime');

// => Creating the function to ring the alarm tone: It accepts a parameter which could be url to an audio file or location of an audio file in your local directory.
const ringAlarm = function (url) {
    let audio = new Audio(url);
    audio.play();
}

const setAlarm = function (e) {
    e.preventDefault(); // Stops the page from reloading upon submitting the form.
    let date = document.getElementById('date');
    let aTime = document.getElementById('aTime');
    let timeofTheAlarm = new Date(`${date.value} ${aTime.value}`);
    let now = new Date();

    let timeToAlarm = timeofTheAlarm - now;
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            // --> The below function call requires a valid audio url or a valid audio file location path.
            ringAlarm(url);
        }, timeToAlarm);
        let alertHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Alarm set!!!</strong> Alarm is successfully set for ${timeofTheAlarm}.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
        document.getElementById('alert').innerHTML = alertHTML;
    }
    else {
        console.log("Please enter a valid date and time.");
        let alertHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error setting up the alarm!!!</strong> Please enter valid date and time.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
        document.getElementById('alert').innerHTML = alertHTML;
    }

}

alarmTime.addEventListener('click', setAlarm);
