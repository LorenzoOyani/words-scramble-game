
const wordText = document.querySelector('.word'),
hint = document.querySelector('.hint'),
refreshBtn= document.querySelector('.refresh-word'),
checkWordArr = document.querySelector('.check-word'),
inputField = document.querySelector('input'),
timerText = document.querySelector('.time b')



let CORRECT_WORD , timer

const timeInterval = maximumTime=>{
  clearInterval(timer);
  timer = setInterval(()=>{
      if(maximumTime > 0){
          maximumTime -- ;
     return timerText.textContent = maximumTime
      }
      clearInterval(timer);
      alert(`TimeUp! ${CORRECT_WORD.toUpperCase()} is the correct word`)
      initializeGame()
  }, 1000)
  
}

const initializeGame = ()=>{
  timeInterval(30) 
  let randomWords = words[Math.floor(Math.random()* words.length)];
 let splitWordArr = randomWords.word.split("")

 for(let i = splitWordArr.length -1; i > 0; i--){
  let j = Math.floor(Math.random()* (1 + i))
  let mixWords = splitWordArr[i];
  splitWordArr[i] = splitWordArr[j];
  splitWordArr[j] = mixWords;
 }
 
  wordText.textContent =splitWordArr.join("");
  hint.textContent = randomWords.hint
  CORRECT_WORD = randomWords.word.toLocaleLowerCase()
  inputField.value = "";
  inputField.setAttribute('maxlength', CORRECT_WORD.length)

 
 
}
initializeGame()

const checkWords = ()=>{
  let userInputText = inputField.value.toLocaleLowerCase();
 if(!userInputText) return alert(`please enter a valid input`)
 if(userInputText !== CORRECT_WORD) return alert(`oops! ${userInputText} is not the correct word`)
 alert(`congrats🍾${userInputText.toUpperCase()} is the correct word`)
  initializeGame()
 
}

refreshBtn.addEventListener('click', initializeGame )
checkWordArr.addEventListener("click", checkWords);