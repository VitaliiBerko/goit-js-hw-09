import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
function getEl(selector) {
    return document.querySelector(selector);
};

refs = {
    inputCalendar: getEl('#datetime-picker'),
    startBtn: getEl('button[type="button"]'),
    timerDays: getEl('[data-days]'),
    timerHours: getEl('[data-hours]'),
    timerMinutes: getEl('[data-minutes]'),
    timerSeconds: getEl('[data-seconds]'),
};

refs.startBtn.disabled = 1;

const options = {
    
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
    console.log(options.defaultDate.getTime());

    if(selectedDates[0].getTime() - options.defaultDate.getTime()<0) {
      refs.startBtn.disabled = 0;    
    }
    window.alert('Please choose a date in the future')
  },

};

 flatpickr(refs.inputCalendar, options);


const timer = {
  start() {
   const startTime= Date.now();
   refs.startBtn.disabled = 1;

   setInterval(()=>{
    const currentTime = Date.now();
    const deltaTime = currentTime-startTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    refs.timerDays.textContent = days;
    refs.timerHours.textContent = hours;
    refs.timerMinutes.textContent = minutes;
    refs.timerSeconds.textContent = seconds;

   }, 1000)
  }

};

refs.startBtn.addEventListener('click', timer.start)

// timer.start();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// ______________________________________________________________
// ______________________________________________________________

