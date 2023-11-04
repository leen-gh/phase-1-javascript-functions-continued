// code your solution here
function saturdayFun(activity) {
    activity? true : activity = "roller-skate"
    return "This Saturday, I want to " + activity +"!"
    
  }

  const mondayWork = function (str) {
    str? true : str = "go to the office" 
    return "This Monday, I will " + str + "."
  };
  
  function wrapAdjective(strr ="*") {
    const innerFunction = function (str) {
      return "You are " + strr + str + strr +"!"
    };
    return innerFunction
  }