const dayStart = '07:30'
const dayEnd = '17:45'

/**
 * It converts string do an array of numbers
 * 
 * @param {string} hours 
 * @returns {Number[]} converted elment
 */
function converteToNumber(hours) {
     return hours
          .split(':')
          .map(element => Number(element))
} 

/**
 * It tells if meet can be schedule.
 * 
 * @param {string} startTime 
 * @param {Number} durationMinutes 
 * @returns {boolean}
 */
function scheduleMeeting(startTime, durationMinutes) {
     const [hours, minutes] = converteToNumber(startTime)
     const [startHours, startMinues] = converteToNumber(dayStart)
     const [endHours, endMinutes] = converteToNumber(dayEnd)
     if(hours < startHours){
          return false
     } else if (hours === startHours && minutes < startMinues){
          return false
     } else if (hours === endHours && ( minutes + durationMinutes) > endMinutes){
          return false
     } else if (hours > endHours){
          return false
     }
     return true
}

module.exports = scheduleMeeting
