const getSleepHours = day => {
    if (day === 'monday') {
      return 8; 
    } else if (day === 'tuesday') {
      return 6;     
    } else if (day === 'wednesday') {
      return 7;     
    } else if (day === 'thursday') {
      return 5;     
    } else if (day === 'friday') {
      return 5;     
    } else if (day === 'saturday') {
      return 10;     
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
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You slept too much this week.')
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You need some more rest.')
    }
  }
  
  calculateSleepDebt();