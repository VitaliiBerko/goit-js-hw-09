import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
function getEl(selector) {
  return document.querySelector(selector);
}

const refs = {
  inputCalendar: getEl('input[type="text"]'),
  startBtn: getEl('button[type="button"]'),
  timerDays: getEl('[data-days]'),
  timerHours: getEl('[data-hours]'),
  timerMinutes: getEl('[data-minutes]'),
  timerSeconds: getEl('[data-seconds]'),
};

let selectedTime;
let currentTime;
let timerId = null;
refs.startBtn.disabled = 1;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    currentTime = options.defaultDate.getTime();
    selectedTime = selectedDates[0].getTime();

    if (selectedTime - currentTime > 0) {
      refs.startBtn.disabled = 0;
      return;
    }
    // window.alert('Please choose a date in the future');
    Notiflix.Notify.init({
      position: 'center-center',
    });
    Notiflix.Notify.failure('Please choose a date in the future');
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  start() {
    refs.startBtn.disabled = 1;

    timerId = setInterval(() => {
      const currentTime = Date.now();
      const { days, hours, minutes, seconds } = convertMs(
        selectedTime - currentTime
      );
      refs.timerDays.textContent = days;
      refs.timerHours.textContent = hours;
      refs.timerMinutes.textContent = minutes;
      refs.timerSeconds.textContent = seconds;
      if (selectedTime - currentTime <= 400) {
        clearInterval(timerId);
      }
    }, 1000);
  },
};

refs.startBtn.addEventListener('click', timer.start);

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
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
