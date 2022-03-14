const compairson = require('../compairson')

describe('Compairson', () => {

     it('always returns a boolean', () => {
          expect(typeof compairson('7:00', 15)).toBe('boolean')
     })

     it('returns false if the meeting is before daystart', () => {
          expect(compairson('7:00', 15)).toBe(false)
     })
     it('returns true if the meeting is at daystart', () => {
          expect(compairson('7:30', 15)).toBe(true)
     })

     it('returns true if the meeting is during working hours', () => {
          expect(compairson('11:30', 60)).toBe(true)
     })

     it('returns true if the meeting finishes at the end of work hours', () => {
          expect(compairson('17:00', 45)).toBe(true)
     })

     it('returns false if the meeting finishes after the end of work hours', () => {
          expect(compairson('17:30', 30)).toBe(false)
     })

     it('returns false if the meetingstarts after the end of work hours', () => {
          expect(compairson('18:00', 30)).toBe(false)
     })
})