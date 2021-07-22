const wordFrequency = require('./wordFrequency');

describe('wordFrequency', () => {
    it('Lowercase letter', () =>{
        let map = new Map([['red', 2], ['black', 1]]);

        expect(wordFrequency('red black red')).toEqual(map)
    })

    it('Some leter is capital', () => {
        let map = new Map([['red', 2]]);

        expect(wordFrequency('red Red')).toEqual(map)
    })
})