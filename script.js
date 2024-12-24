const leaveTime = new Date('18 Jan 2025 06:09 EST');
const arriveTime = new Date('18 Jan 2025 12:29 PST');

const tfht = false;

window.addEventListener("DOMContentLoaded", () => {
    update();
    lineUp();
});
var last = Math.floor(Date.now()/1000);
function lineUp() {
    if (Math.floor(Date.now()/1000) != last) {
        setInterval(update, 1000);
    } else {
        requestAnimationFrame(lineUp);
    }
}

function update() {
    var currentTime = new Date();

    var time = new Date(leaveTime.getTime() - currentTime.getTime());

    var pm = false;

    var days = Math.floor(time.getTime() / 86400000);
    
    var hours = time.getHours();
    if (!tfht) {
    	if (hours > 12) {
        	hours-=12;
            pm = true;
        }
        if (hours == 0) {
            hours+=12;
            pm = true;
        }
    }

    hours = fix(hours);

    var minutes = fix(time.getMinutes());
    var seconds = fix(time.getSeconds());

    var meridian = (tfht ? "" : (pm ? "pm" : "am"));

    // console.log(`${hours}:${minutes}:${seconds}${meridian}`);

    // document.querySelector("#hours p").textContent = hours;
    // document.querySelector("#minutes p").textContent = minutes;
    // document.querySelector("#seconds p").textContent = seconds;
    document.querySelector("#days").textContent = days;
}

function fix(num) {
    if (String(num).length == 1) {
        return `0${num}`;
    }
    return num;
}