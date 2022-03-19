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
     it('return a single array using closure with end of 8',() =>{
          const start3 = range(3)
          expect(start3(8)).toStrictEqual([3,4,5,6,7,8])
     })
     it('return a single array using closure with end of 0',() =>{
          const start3 = range(3)
          expect(start3(0)).toStrictEqual([])
     })
     it('return a single array using closure 4 with end of 6',() =>{
          const start4 = range(4)
          expect(start4(6)).toStrictEqual([4,5,6])
     })
})