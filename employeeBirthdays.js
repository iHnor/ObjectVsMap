const moment = require('moment');

function birthdayList(){

    let employeesBirthdays = [
        {name: 'Ваня Иванов', date: moment([2000, 7, 24])},
    ]
    return employeesBirthdays;
}

function sortedBirthdayList(birthdays, planning){
    
    let map = new Map()
    for (let i = 0; i < birthdays.length; i++ ){
        map.set(birthdays[i].date.get('month'),birthdays[i]);
    }    
    console.log(map);
    return map;
}

function changeDate(dateNumber){
    let 
}

function outputOfRezult(birthday){
    let todayData = new Date();
    let sortedData = birthday.get(7);
    let changeTheDate = changeDate(todayData.getMonth()); 

    console.log(` ${changeTheDate} ${todayData.getFullYear()}\n(${sortedData.date.get('date')}) - ${sortedData.name} (${todayData.getFullYear() - sortedData.date.get('year')})`);
}

let birthdays = birthdayList();
let gorizontslPlanning = 0;
let sortedBirthday = sortedBirthdayList(birthdays, gorizontslPlanning);

outputOfRezult(sortedBirthday, birthdays);

export {sortedBirthdayList as funcCreateBirthdayList, outputOfRezult as funcOutputOfRezult, changeDate as funcChangeDate};