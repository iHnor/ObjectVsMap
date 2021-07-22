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

    describe('Change the number date to letter date when', () => {
        it('month number equal 0', () => {
        
            let numberOfMonth = 0
            expect(emp.funcChangeDate(numberOfMonth)).toBe('Январь')
        });
        it('month number equal 11', () => {
        
            let numberOfMonth = 11
            expect(emp.funcChangeDate(numberOfMonth)).toBe('Декабрь')
        });
        it('month number equal 5', () => {
        
            let numberOfMonth = 5
            expect(emp.funcChangeDate(numberOfMonth)).toBe('Июнь')
        });
    });

    describe('Pluralization ', () => {
        it('if year equal 1', () => {
            
        });
    });
});