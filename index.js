let quizDB =[
    {
        question : "Q1 : What is full form of HTML",
        a : "Hello to my land",
        b : "Hey text markup language",
        c : "Hyper text to my land",
        d : "Hyper text markup language",
        ans : "ans4"
    },

    {
        question : "Q2 : What is full form of CSS",
        a : "Cascading style sheet",
        b : "Cascading style sheep",
        c :  "Cartton style sheet",
        d : "Cascading super sheet",
        ans : "ans1"
    },


    {
        question : "Q3 : What is full form of HTTP",
        a :   "Hypertext Transfer product",
        b :  "Hyper Transfer protocal",
        c :  "Hey Transfer protocal",
        d : "Hypertext Transfer protocal",
        ans : "ans4"
    },

    {
        question : "Q4 : What is full form of JS",
        a : "Javascript",
        b :  "Javasuper",
        c : "Javasheep",
        d :  "Javasleep",
        ans : "ans1"
    },
]



const question = document.querySelector(".question")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const submit = document.querySelector("#submit")
const answers = document.querySelectorAll(".answer")
const showSCore = document.querySelector("#showScore")

var questionCount= 0
let score=0
const loadquestion = () => {

  const questionList = quizDB[questionCount]
   question.innerHTML= questionList.question;
   option1.innerHTML=questionList.a
   option2.innerHTML=questionList.b
   option3.innerHTML=questionList.c
   option4.innerHTML=questionList.d
}

loadquestion()


const getCheckAnswer=()=>{
    let answer;
    answers.forEach((currentElem)=>{
       if(currentElem.checked){
           answer=currentElem.id
       }
       
    })

    return answer
}
   
submit.addEventListener('click' ,()=>{
    const checkedAnswer = getCheckAnswer()
    console.log(checkedAnswer)
    if(checkedAnswer === quizDB[questionCount].ans){
        score++
    }
    questionCount++ 
    diselectall()
    if(questionCount<quizDB.length){
        loadquestion()

    }
    else{
        showScore.innerHTML=`
        <h3>You Scored ${score}/${quizDB.length}  </h3>
        
        <button class="btn" onclick="location.reload()" >Play Again</button>
          
        

        `;

        showScore.classList.remove("scoreAREA")

    }
    
})

const diselectall =()=>{
     answers.forEach((currentElem) => currentElem.checked=false) 
         
    
}

