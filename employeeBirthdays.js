const moment = require('moment');

function birthdayList() {

    let employeesBirthdays = [
        { name: 'Ваня Иванов', date: moment([2000, 7, 29]) },
        { name: 'Игрик Игрикович', date: moment([1989, 7, 28]) },
        { name: 'Артур Артурович', date: moment([2001, 7, 4]) },
        { name: 'Петя Петров', date: moment([1999, 10, 23]) },
        { name: 'Коля Новогодний', date: moment([1985, 12, 5]) },
        { name: 'Стас Рождественский', date: moment([1993, 6, 8]) },
        { name: 'Николай Васильевич', date: moment([2000, 8, 16]) }
    ]
    return employeesBirthdays;
}

function sortedListOnMonth(birthdays, planning) {

    let map = new Map()
    for (let i = 0; i < birthdays.length; i++) {

        if (map.has(birthdays[i].date.get('month'))) {
            map.get(birthdays[i].date.get('month')).push(birthdays[i]);
        }
        else {
            let tmpBirth = new Array();

            tmpBirth.push(birthdays[i]);
            map.set(birthdays[i].date.get('month'), tmpBirth);
        }

    }
    return map;
}

function changeDate(dateNumber) {

    let monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return monthList[dateNumber];
}

function pluralization(numberOfOld) {

    let sNumb = numberOfOld % 10
    let dNumb = numberOfOld % 100

    if ((10 <= dNumb && dNumb <= 20) || (sNumb == 0) || (5 <= sNumb && sNumb <= 20))
        return "лет"
    else if (sNumb == 1)
        return "год"
    else
        return "года"
}

function getAge(yearOfBirth) {

    let month = yearOfBirth.get('month') < 10 ? '0' + String(yearOfBirth.get('month')) : String(yearOfBirth.get('month'));
    let date = yearOfBirth.get('date') < 10 ? '0' + String(yearOfBirth.get('date')) : String(yearOfBirth.get('date'));
    let birthdayDate = String(yearOfBirth.get('year')) + month + date
    let ageOfPerson = moment(birthdayDate, "YYYYMMDD").fromNow().split(' ')[0];

    return ageOfPerson + ' ' + pluralization(Number(ageOfPerson))
}

function outputOfRezult(birthday, planning) {

    let todayData = new Date();
    let getTotalMonth = todayData.getMonth();
    let getTotalYear = todayData.getFullYear();

    for (let i = 0; i <= planning; i++) {

        if (birthday.get(getTotalMonth + 1)) {
            let changeTheDate = changeDate(getTotalMonth);
            console.log(`${changeTheDate} ${getTotalYear}`);

            let sortedOnDate = new Array();
            let tmpMap = new Map();
            // for (let j = 0; j < birthday.get(getTotalMonth + 1).length; j++) {
            //     let date = birthday.get(getTotalMonth + 1)[j].date.get('date');
            //     tmpMap.set(date, j);
            //     sortedOnDate.push(date);
            // }
            
            birthday.get(getTotalMonth + 1).sort(function (a, b) {
                return a.date.get('date') - b.date.get('date')
            });

            for (let j = 0; j < birthday.get(getTotalMonth + 1).length; j++) {
                let sortedData = (birthday.get(getTotalMonth + 1))[tmpMap.get(sortedOnDate[j])];
                let personAge = getAge(sortedData.date);
                let dayOfBirth = sortedData.date.get('date') < 10 ? ' ' + String(sortedData.date.get('date')) : String(sortedData.date.get('date'));
                console.log(`${dayOfBirth} - ${sortedData.name} (${personAge})`);
            }
            console.log('\n');
        }

        if (getTotalMonth == 11) {
            getTotalMonth = 0;
            getTotalYear++;
        }
        else
            getTotalMonth++;

    }
}


let birthdays = birthdayList();
let gorizontslPlanning = 11;
let sortedBirthday = sortedListOnMonth(birthdays);

outputOfRezult(sortedBirthday, gorizontslPlanning);

// export {sortedListOnMonth as funcCreateBirthdayList, outputOfRezult as funcOutputOfRezult, changeDate as funcChangeDate,
// getAge as funcGetAge, pluralization as funcPluralization};