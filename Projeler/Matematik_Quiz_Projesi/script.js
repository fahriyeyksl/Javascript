const correctAnswer=["8","10","3","25"];
const form = document.querySelector(".question-form");
const result=document.querySelector(".result");
const succesMessage=document.querySelector("#succesMessage");
const button=document.querySelector(".btn");


form.addEventListener("submit",(e)=>{
   e.preventDefault();

   let score=0;
   const userAnswer=[
     form.q1.value,
     form.q2.value,
     form.q3.value,
     form.q4.value,
   ];

   userAnswer.forEach((answer,index)=>{
    if(answer=== correctAnswer[index]){
        score+=25;
    }
   });
   if(score==100){
    succesMessage.classList.remove("d-none");
    button.setAttribute("disabled","");
   }
   result.classList.remove("d-none");
   result.querySelector("span").textContent=`${score}`;
});