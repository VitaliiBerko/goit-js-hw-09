import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
function getEl(selector) {
    return document.querySelector(selector);
};

refs = {
    inputText: getEl('input[type="text"]')
}

const options = {
    
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options)