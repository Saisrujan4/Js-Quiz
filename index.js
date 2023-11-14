const quiz_container=document.querySelector('.quiz-container');
const time_left=document.querySelector('.time-left');
const list_items=document.querySelectorAll('ul li');
const labels=document.querySelectorAll('li label');
const header_question=document.querySelector('ul h3');
const inputs=document.querySelectorAll('ul input')
let score=0;
const questions=[
    {
        question:"1.Who is the father of C language?",
        "1":"Steve Jobs",
        "2":"James Gosling",
        "3":"Dennis Ritchie",
        "4":'Rasmus Lerdorf',
        correct:3
    },
    {
        question:"2.All keywords in C are in ____________",
        "1":"LowerCase letters",
        "2":"UpperCase letters",
        "3":"CamelCase letters",
        "4":'None of the above',
        correct:1
    },
    {
        question:"3.Which is valid C expression?",
        "1":"int my_num = 100,000;",
        "2":"int my_num = 100000;",
        "3":"int my num = 1000;",
        "4":'my_num int=1000;',
        correct:2
    },
    {
        question:"4.Which of the following cannot be a variable name in C?",
        "1":"volatile",
        "2":"true",
        "3":"friend",
        "4":'export',
        correct:1
    },
    {
        question:"5. What is an example of iteration in C?",
        "1":"for",
        "2":"while",
        "3":"do-while",
        "4":'All of the above',
        correct:4
    }
]
let marks=questions.length;

let index=0;
header_question.innerHTML=questions[index].question 
    header_question.innerHTML=questions[index].question 
    correct_ans=questions[index].correct;
    labels.forEach((label,opt)=>{
      label.innerHTML=questions[index][opt+1+""]
    }) 

function NextQuestion()
{
    inputs.forEach(input=>{
        input.checked=false
    })
    if(index<questions.length)
    {
        
        header_question.innerHTML=questions[index].question 
        correct_ans=questions[index].correct;
        labels.forEach((label,opt)=>{
            label.innerHTML=questions[index][opt+1+""]
        })
    }
}

setInterval(function(){
   inputs.forEach(input=>{
    if(input.checked)
    input.parentElement.classList.add('opt-select')
    else
   input.parentElement.classList.remove('opt-select')
   })

},1)



document.querySelector("#submit").addEventListener('click',function(e){

   let flag=0
    inputs.forEach((input, opt)=>{
     if(input.checked)
     { 

         if(index<questions.length && input.id==questions[index].correct)
         score++;
        
         index++
         flag=1;
         console.log(score)
    }
    })
    if(flag==1 && index<questions.length)
    NextQuestion()
   else if(index>=questions.length)
  {
        
    document.querySelector('h2').style.backgroundColor="rgba(20,15,200,0.3)"
    document.querySelector('h2').innerHTML=`Your Score ${score}/${marks}`
    this.innerHTML="ReTake"

    if(this.innerHTML=="ReTake")
    {
        this.addEventListener('click',function(e){
        window.location.href="./index.html"
        })
    } 
  } 
      
})