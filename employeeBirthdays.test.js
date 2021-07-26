const moment = require('moment');
import * as emp from './employeeBirthWithCSV.js';

let employeesBirthdays = [
    {name: 'Ваня Иванов', date: moment([2000, 9, 9])},
    {name: 'Ваня Иванов', date: moment([2000, 9, 9])}
]

let words = ["лет", "год", "года"];
let todayData = new Date();
let totalYear = todayData.getFullYear();

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
                expect(emp.funcPluralization(number, words)).toBe('1 год');
            });

            it('when age equal 3', () => {
                let number = 3;
                expect(emp.funcPluralization(number, words)).toBe('3 года');
            });

            it('when age equal 6', () => {
                let number = 6;
                expect(emp.funcPluralization(number, words)).toBe('6 лет');
            });

            it('when age equal 15', () => {
                let number = 15;
                expect(emp.funcPluralization(number, words)).toBe('15 лет');
            });

            it('when age equal 21', () => {
                let number = 21;
                expect(emp.funcPluralization(number, words)).toBe('21 год');
            });
        });
        it('number form', () => {
            
            let date = employeesBirthdays[0].date;
            expect(emp.funcGetAge(date, totalYear)).toBe('21 год');
        });
    });
});