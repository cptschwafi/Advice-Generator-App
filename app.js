const Advice_Id = document.getElementById("Advice__Id");
const Advice_Text = document.getElementById("Advice__Text");

const Dice_Button = document.getElementById("Dice__Btn");

/* Used for Changing cursor style while loading Advice */
const cursorStyle = document.createElement('style');
cursorStyle.innerHTML = '*{cursor: progress;}';
cursorStyle.id = 'cursor-style';

/* Since the Api suggested by FrontendMentor.io is not running reliably,
 i decided to use another, better and on top of that even funnier one.
 unfortunately it does not provide an id for every advice like 
 https://api.adviceslip.com/advice, (provided by FrontendMentor.io) does
 so i hacked around it by generating a fake ID for every Advice :) */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let AdviceText ="";
let AdviceID = 0;
async function getAdvice() {
    document.head.appendChild(cursorStyle);
    try {
      
      const response = await axios.get('https://www.boredapi.com/api/activity/');
      AdviceText =  response.data.activity;
    } catch (error) {
      console.log("error");
      cursorStyle.remove();
    }
    AdviceID = getRandomInt(500);
    Advice_Id.innerText ="Advice #" +AdviceID;
    Advice_Text.innerText =  AdviceText;
    cursorStyle.remove();
  }

Dice_Button.addEventListener("click", getAdvice);
