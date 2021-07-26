const moment = require('moment');
const csv = require('csv-parser');
const fs = require('fs');


let employeesData = [];

fs.createReadStream('employeeBirthdays.csv')
.pipe(csv())
.on('data', (data) => employeesData.push(data))
.on('end', () => {
    
    for( let i = 0; i < employeesData.length; i++){
        employeesData[i].date = moment([employeesData[i].year, employeesData[i].month, employeesData[i].day]);
    }

    main(employeesData);  

});

function sortedBirthdayList(birthdays) {

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

function pluralization(numberOfOld, words) {

    let sNumb = numberOfOld % 10
    let dNumb = numberOfOld % 100

    if ((10 <= dNumb && dNumb <= 20) || (sNumb == 0) || (5 <= sNumb && sNumb <= 20))
        return `${numberOfOld} ${words[0]}`;
    else if (sNumb == 1)
        return `${numberOfOld} ${words[1]}`;
    else
        return `${numberOfOld} ${words[2]}`;
}

function getAge(yearOfBirth, todayYear) {

    let ageOfPerson = todayYear - yearOfBirth.get('year') ;
    let words = ["лет", "год", "года"];

    return pluralization(Number(ageOfPerson), words);
}

function outputOfRezult(birthday, planning) {

    let todayData = new Date();
    let getTotalMonth = todayData.getMonth();
    let getTotalYear = todayData.getFullYear();

    for (let i = 0; i <= planning; i++) {

        if (birthday.get(getTotalMonth + 1)) {
            let changeTheDate = changeDate(getTotalMonth);
            console.log(`${changeTheDate} ${getTotalYear}`);

            birthday.get(getTotalMonth + 1).sort(function (a, b) {
                return a.date.get('date') - b.date.get('date');
            });

            for (let j = 0; j < birthday.get(getTotalMonth + 1).length; j++) {
                let sortedData = (birthday.get(getTotalMonth + 1))[j];
                let personAge = getAge(sortedData.date, getTotalYear);
                let dayOfBirth = sortedData.date.get('date') < 10 ? '0' + String(sortedData.date.get('date')) : String(sortedData.date.get('date'));

                console.log(`${dayOfBirth} - ${sortedData.name} (${personAge})`);
            }
        }

        if (getTotalMonth == 11) {
            getTotalMonth = 0;
            getTotalYear++;
        }
        else
            getTotalMonth++;
        
    }   
}

function main(birthdays){

    let gorizontslPlanning = 8;
    let sortedBirthday = sortedBirthdayList(birthdays);

    outputOfRezult(sortedBirthday, gorizontslPlanning);
}
