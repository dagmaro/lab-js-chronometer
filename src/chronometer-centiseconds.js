class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
    this.currentTime++
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  getCentiseconds() {
    return Math.floor(this.currentTime / 1000)
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return "0" + value
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    min = this.getMinutes();
    sec = this.getSeconds();
    centSec = this.getCentiseconds();
    return `${this.computeTwoDigitNumber(min)}:${this.computeTwoDigitNumber(sec)}.${this.computeTwoDigitNumber(centSec)}}`
  }
}
