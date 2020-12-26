const getSleepHours = day => {
    if (day === 'Monday') {
      return 7; 
    } else if (day === 'Tuesday') {
      return 7;     
    } else if (day === 'Wednesday') {
      return 6;     
    } else if (day === 'Thursday') {
      return 5;     
    } else if (day === 'Friday') {
      return 5;     
    } else if (day === 'Saturday') {
      return 11;     
    } else if (day === 'Sunday') {
      return 7;     
    }
      }
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  
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
  