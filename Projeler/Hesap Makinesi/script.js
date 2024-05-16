const islemButton = document.querySelectorAll(".islem");
const numbersButton = document.querySelectorAll(".number");
const gosterilecekSonuc = document.querySelector(".result span");


islemButton.forEach(islemler=>{
    islemler.addEventListener("click",()=>{
        kosullar(islemler.textContent);
        islemler.classList.add("active2");
        setTimeout(()=>{
            islemler.classList.remove("active2");
        },150);
    })
})

numbersButton.forEach(sayilar=>{
    sayilar.addEventListener("click",()=>{
        console.log(sayilar);
        kosullar(sayilar.textContent)
        sayilar.classList.add('active');
        setTimeout(() => {
            sayilar.classList.remove("active");
        }, 150);
    })
})
let sayi1 ;
let sayi2 ;
let gosterilecektext = "";
let sonuc;
let islem;
function kosullar( text){
   
    if(text =="AC"){
        sayi1 =0;
        sayi2 =0;
        gosterilecektext="";
        sonuc ="";
        islem ="";

    }
    else if (text == "+/-"){
        sayi1 = Number(gosterilecektext);
        if (sayi1>0){
            sonuc = "-"+sayi1.toString();
        }else{
            sonuc = Math.abs(sayi1).toString();
        }

    }
    else if(text =="%"){
        sayi1 = Number(gosterilecektext);
        sonuc = (sayi1/100).toString();
    }
    else if(text == "/"){
        sayi1 = Number(gosterilecektext);
        sonuc="";
        islem = text;
    }
    else if(text == "x"){
        sayi1 = Number(gosterilecektext);
        sonuc="";
        islem=text;

    }
    else if(text == "="){
           sayi2 = Number(gosterilecektext);
           if(islem == "+"){
            sonuc = (sayi1+sayi2).toString();
           }
           else if(islem == "-"){
            sonuc = (sayi1-sayi2).toString();
           }
           else if(islem =="x"){
            sonuc= (sayi1*sayi2).toString();
           }
           else if(islem == "/"){
            if(sayi2!=0){
                sonuc = (sayi1/sayi2).toString();
            }
            else{
                sonuc="Error";
            }
           }
    }
    else if (text =="-"){
        sayi1 = Number(gosterilecektext);
        sonuc = "";
        islem="-";

    }
    else if (text =="+"){
            sayi1 = Number(gosterilecektext);
            sonuc="";
            islem="+";
    }

    else{
        sonuc = gosterilecektext +text;
        
    }

    gosterilecektext=sonuc;
    gosterilecekSonuc.innerHTML = `<span>${sonuc}</span>`;

}
console.log(islem);