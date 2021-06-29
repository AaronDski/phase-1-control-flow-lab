function scuberGreetingForFeet(someNum) {
  let free
  if (someNum <= 400) {
    free = 'This one is on me!'
    return free
  }
  let dock
  if (someNum >= 2000 && someNum <= 2500) {
    dock = 'I will gladly take your thirty bucks.'
    return dock
  }
  else if (someNum >= 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  const isCity = (city === "NYC") ? 'Ok, sounds good.' :'No go.'
  return isCity
  
}

function switchOnCharmFromTip(tip){
  const fareTip = tip
  switch (fareTip){
    case 'generous' : return ("Thank you so much.")
    break;
    case 'not as generous' : return ('Thank you.')
    break;
    case 'thanks for everything' : return ('Bye.')
    break;
    

  }
    
  
}