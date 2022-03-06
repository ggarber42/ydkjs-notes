const compairson = require('../compairson')

describe('Compairson', () => {

     beforeEach(() => {
          const dayStart = '07:30'
          const dayEnd = '17:45'
     })

     it('always returns a boolean', () => {
          expect(typeof compairson('7:00', 15)).toBe('boolean')
     })

     it('returns false if the meeting is before daystart', () => {
          expect(compairson('7:00', 15)).toBe(false)
     })
     it('returns true if the meeting is at daystart', () => {
          expect(compairson('7:30', 15)).toBe(true)
     })

     it.todo('returns false if the meeting is at end day')
})