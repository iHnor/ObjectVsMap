const moment = require('moment');
import * as emp from './employeeBirthdays.js';

let employeesBirthdays = [
    {name: 'Ваня Иванов', date: moment([2000, 7, 24])},
]

describe('Employee birthday', () => {
    it('Creating sorted birthday list ', () => {
        let map = new Map()
        map.set(employeesBirthdays[0].date.get('month'),employeesBirthdays[0]);

        expect(emp.funcCreateBirthdayList(employeesBirthdays)).toEqual(map)
    });

    it('Change the number date to letter date', () => {
        
    });
    // it('Rezult after output', () => {
        
    // });
});