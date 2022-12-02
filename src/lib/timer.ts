let sec = 0;
let min = 0;
let timerID;
export let t;

export const startTimer = () => {
    timer();
};

export const stopTimer = () => {
    t = '00:00';
    clearTimeout(timerID);
    const finalTime =
        (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
    sec = 0;
    min = 0;
    window.application.finalTime = finalTime;
};

function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
}

function add() {
    tick();
    t =
        (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
    timer();
}

function timer() {
    timerID = setTimeout(add, 1000);
}
