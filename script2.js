/*eslint-disable */
// Regular - Basic
function getCalculatedTax(amount = 100, tax = 14) {
  const result = amount + ((tax / 100) * amount);

  console.log(result);
  return result;
}

function getCalculatedTax2(amount) {
  console.log('Run getCalculatedTax2');

  getCalculatedTax(amount + 1);
}

function getCalculatedTax3(amount) {
  console.log('Run getCalculatedTax3');

  getCalculatedTax2(amount + 1);
}

const fetchAdvice = function () {
  fetch('https://api.adviceslip.com/advice')
    .then((data) => data.json())
    .then((result) => {
      const element = document.querySelector('#advice');

      if (element) {
        element.innerHTML = result.slip.advice;
      }
    });
};

const onClickH1 = ()=> {
    const element = document.querySelector("h1");
    
    if(element){
        element.addEventListener("click", ()=>alert("Some clicked me"))
    }
};

onClickH1()




// Function Expression
const getCalculatedTaxExpression = function (amount = 100, tax = 14) {
  const result = amount + ((tax / 100) * amount);

  return result;
};

// Arrow function
const getCalculatedTaxArrow = (amount = 100, tax = 14) => amount + ((tax / 100) * amount);
const getCalculatedTaxArrow2 = (amount = 100, tax = 14) => ({
  firstName: 'Mohamed',
  lastName: 'Abusrea',
  position: 'Software Engineer',
  experience: 10,
  hasFinishedMilitary: false,
  coursesTaken: null,
});

// IIFE: Immediately Invoked Function Expression
// (function (amount = 100, tax = 14) {
//   const result = amount + ((tax / 100) * amount);
//   console.log('getCalculatedTax:', result);
//   return result;
// }(50, 10));

// Methods
const USER_DATA2 = {
  firstName: 'Mohamed',
  lastName: 'Abusrea',
  position: 'Software Engineer',
  experience: 10,
  hasFinishedMilitary: false,
  coursesTaken: null,
  getCalculatedTax(amount = 100, tax = 14) {
    return amount + ((tax / 100) * amount);
  },
  getCalculatedTax2: (amount = 100, tax = 14) => amount + ((tax / 100) * amount),
};

// Callback function
// setTimeout(getCalculatedTax, 500);
