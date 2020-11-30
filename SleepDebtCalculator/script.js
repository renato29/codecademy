console.log('hellow world');
function getSleepHours (day){
    if (day === 'monday')
    {
        return 8;
    }else if( day === 'tuesday'){
        return 8;
    }else if( day === 'wednesday'){
        return 8;
    }else if( day === 'thursday'){
        return 8;
    }else if( day === 'friday'){
        return 8;
    }else if( day === 'saturday'){
        return 8;
    }else if( day === 'sunday'){
        return 8;
    }
}
// console.log(getSleepHours('saturday'));

const getActualSleepHours = () => {
    let sumSleptHours = getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thusday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
    // soma de horas realmente dormidas
    return sumSleptHours;
}

const getIdealSleepHours = () => {
    const idealHours = 8; 
    // horas ideais de sono
    return idealHours*7;
    // horas de sono ideal vezes 7 dias da semana.

}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// agora que ja temos as horas dormidas e  as horas ideais de sono. Vamos calcular o debito de horas de sono. 

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours(); //constante de horas realmente dormidas.
    let  idealSleepHours = getIdealSleepHours();
    let extrahours = actualSleepHours - idealSleepHours;
    let debthours = idealSleepHours - actualSleepHours
    console.log(extrahours);
    console.log(debthours);
    if(actualSleepHours === idealSleepHours){
        console.log('Congratulations you have a perfect sleep hours!');
    } else if (actualSleepHours > idealSleepHours){
        console.log(`C\`mon you are sleeping too much, go run in the morning! You got ${extrahours} bonus` );
    }else if (actualSleepHours < idealSleepHours){
        console.log(`You should go slow, your body need some rest today! You got ${debthours} debt`);
    }
}
calculateSleepDebt()
// console.log(calculateSleepDebt());