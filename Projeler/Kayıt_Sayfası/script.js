const form=document.querySelector(".form-check");
const emailInput=document.querySelector(".mail");

emailInput.addEventListener("input", function() {
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        emailInput.style.borderColor = "green"; // Geçerli mail adresi
    } else {
        emailInput.style.borderColor = "red"; // Geçersiz mail adresi
    }
    checkButtonActivation();
});
const nameInput=document.querySelector(".name");
nameInput.addEventListener("input",e=>{
    const nameValue=nameInput.value;
    const namePattern=/^[A-Z][a-z]{2,20}$/;
    if(namePattern.test(nameValue)){
        nameInput.style.borderColor="green";
    }
    else{
        nameInput.style.borderColor="red";
    }
    checkButtonActivation();
    
});

const surnameInput=document.querySelector(".surname");
surnameInput.addEventListener("input",e=>{
    const surnameValue=surnameInput.value;
    const surnamePattern=/^[A-Z][a-z]{2,20}$/;
    if(surnamePattern.test(surnameValue)){
        surnameInput.style.borderColor="green";
    }
    else{
        surnameInput.style.borderColor="red";
    }
    checkButtonActivation();
});
const userName=document.querySelector(".username");
userName.addEventListener("input",e=>{
  const userNameValue=userName.value;
  const usernamePattern=/(?=.*[a-z])(?=.*[A-Z])/;
  if(usernamePattern.test(userNameValue)){
    userName.style.borderColor="green";
  }
  else{
    userName.style.borderColor="red";
  }
  checkButtonActivation();
  
});
const passwordInput=document.querySelector(".password");
const message = document.querySelector(".message");
passwordInput.addEventListener("input",e=>{
   const passwordValue=passwordInput.value;
   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-.^#]).{8,}$/;
   if(passwordPattern.test(passwordValue)){
    passwordInput.style.borderColor="green";
    message.textContent="Güçlü Şifre!";
   }
   else{
    passwordInput.style.borderColor="red";
    message.textContent="Şifreniz en az bir büyük karakter, en az bir küçük karakter, en az bir özel harf ve uzunluğu en az 8 karakter olmalıdır!";
   }
   checkButtonActivation();

});
const buton=document.querySelector(".buton-kayıt");
function checkButtonActivation(){
    const isEmailValid=emailInput.style.borderColor==="green";
    const isUserNameValid = userName.style.borderColor === "green";
    const isNameValid=nameInput.style.borderColor==="green";
    const isSurnameValid=surnameInput.style.borderColor==="green";
    const isPasswordValid=passwordInput.style.borderColor==="green";
    if(isEmailValid && isUserNameValid && isUserNameValid && isSurnameValid && isPasswordValid){
        buton.classList.add("succes");
    }
}
function redirectToAnotherPage() {
    
    var yeniSayfaURL = "kayıt_tamamlandı_sayfası/index.html";
    
   
    window.location.href = yeniSayfaURL;
}
