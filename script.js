let totalTimeInSeconds = 777600
let days = 00
let hours = 00
let minutes = 00
let seconds = 00

let isRunning
let interval

let secondsElement = document.getElementById('seconds')
let minutesElement = document.getElementById('minutes')
let hoursElement = document.getElementById('hours')
let daysElement = document.getElementById('days')

function modifyTimeAndDay() {
  isRunning = true

  days = Math.floor(totalTimeInSeconds / (3600 * 24))
  hours = Math.floor((totalTimeInSeconds % (3600 * 24)) / 3600)
  minutes = Math.floor((totalTimeInSeconds % 3600) / 60)
  seconds = Math.floor(totalTimeInSeconds % 60)

  secondsElement.textContent = verifyNumber(seconds)
  minutesElement.textContent = verifyNumber(minutes)
  hoursElement.textContent = verifyNumber(hours)
  daysElement.textContent = verifyNumber(days)

  --totalTimeInSeconds
}

function verifyNumber(value) {
  return value < 10 ? `0${value}` : value
}

function handleStopTime() {
  clearInterval(interval)
  isRunning = false
}

function handleStartTime() {
  interval = setInterval(function () {
    modifyTimeAndDay()
  }, 1000)
}

function toggleCountdown() {
  isRunning ? handleStopTime() : handleStartTime()
}

handleStartTime()
