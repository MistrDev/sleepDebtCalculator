const getSleepHours = day => {
    if (day === 'monday') {
      return 7; 
    } else if (day === 'tuesday') {
      return 7;     
    } else if (day === 'wednesday') {
      return 6;     
    } else if (day === 'thursday') {
      return 5;     
    } else if (day === 'friday') {
      return 5;     
    } else if (day === 'saturday') {
      return 11;     
    } else if (day === 'sunday') {
      return 7;     
    }
      }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
  
  
  const getIdealSleepHours= () => {
    let idealHours = 7;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log('You got' , {actualSleepHours} ,' perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You slept' , {actualSleepHours} , 'your ideal goal is' , {idealSleepHours}, 'You slept to much!')
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You need some more rest.')
    }
  }
  
  calculateSleepDebt();