const range = require('../closure')

describe('Closure', () =>{
     it('returns a single array', () =>{
          expect(range(3,3)).toStrictEqual([3])
     })
     it('returns a range array', () =>{
          expect(range(3,8)).toStrictEqual([3,4,5,6,7,8])
     })
     it('returns an empty array', () =>{
          expect(range(3,0)).toStrictEqual([])
     })
     it('return a single array using closure',() =>{
          const start3 = range(3)
          expect(start3(3)).toStrictEqual([3])
     })
})