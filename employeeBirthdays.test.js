const moment = require('moment');
import * as emp from './employeeBirthdays.js';

let employeesBirthdays = [
    {name: 'Ваня Иванов', date: moment([2000, 9, 9])},
    {name: 'Ваня Иванов', date: moment([2000, 9, 9])}
]

describe('Employee birthday', () => {
    describe('Change the number date to the letter date when', () => {
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

    describe('Calculation how old is person', () => {
        describe('Pluralization of words', () => {

            it('when age equal 1', () => {
                let number = 1;
                expect(emp.funcPluralization(number)).toBe('год');
            });

            it('when age equal 3', () => {
                let number = 3;
                expect(emp.funcPluralization(number)).toBe('года');
            });

            it('when age equal 6', () => {
                let number = 6;
                expect(emp.funcPluralization(number)).toBe('лет');
            });

            it('when age equal 15', () => {
                let number = 15;
                expect(emp.funcPluralization(number)).toBe('лет');
            });

            it('when age equal 21', () => {
                let number = 21;
                expect(emp.funcPluralization(number)).toBe('год');
            });
        });
        it('number form', () => {
            
            let date = employeesBirthdays[0].date;
            expect(emp.funcGetAge(date)).toBe('21 год');
        });
    });
});