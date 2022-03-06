/**
 * It tells if meet can be schedule.
 * 
 * @param {string} startTime 
 * @param {Number} durationMinutes 
 * @returns {boolean}
 */
function scheduleMeeting(startTime, durationMinutes) {
     const [startHours, startMinutes] = startTime.split(':')
     console.log(startHours, startMinutes)
     return false
}

module.exports = scheduleMeeting
