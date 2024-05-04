let MinusKatta = document.querySelector(".conPlusMinus1")
let MinusKatta2 = document.querySelector(".conPlusMinus22")
let  uzgaruvchi = document.querySelector(".ConLeftH11")
let uzgaruvchi2 = document.querySelector(".ConLeftH12")
let Lettopcd2 = document.querySelector(".Lettopcd2")
let lefttopcomponendDiv2btn = document.querySelector(".lefttopcomponendDiv2btn")
let lefttopcomponendDiv2btn2 = document.querySelector(".lefttopcomponendDiv2btn2")
let ltcdikki = document.querySelector(".ltcdikki")
let lbcd2ikki = document.querySelector(".lbcd2ikki")
let lbcd2ikki2 = document.querySelector(".lbcd2ikki2")
let rbcdikki2 = document.querySelector(".rbcdikki2")
let rbcdikki2ikki = document.querySelector(".rbcdikki2ikki")
let rbcdikki2ikki2 = document.querySelector(".rbcdikki2ikki2")
let rbcdikk2 = document.querySelector(".rbcdikk2")
let rbcdikk22 = document.querySelector(".rbcdikk22")
let rbcdikk23 = document.querySelector(".rbcdikk23")
  
rbcdikk22.onclick = () => {
    rbcdikk2.innerHTML++
}
rbcdikk23.onclick = () => {
    if(rbcdikk2.innerHTML == 0){
     rbcdikk2.innerHTML = 0
    }else{
     rbcdikk2.innerHTML--
    }
  }

rbcdikki2ikki.onclick = () => {
    rbcdikki2.innerHTML++
}
rbcdikki2ikki2.onclick = () => {
    if(rbcdikki2.innerHTML == 0){
     rbcdikki2.innerHTML = 0
    }else{
     rbcdikki2.innerHTML--
    }
  }

lbcd2ikki.onclick = () => {
    ltcdikki.innerHTML++
}
lbcd2ikki2.onclick = () => {
    if(ltcdikki.innerHTML == 0){
     ltcdikki.innerHTML = 0
    }else{
     ltcdikki.innerHTML--
    }
  }

lefttopcomponendDiv2btn.onclick = () => {
    Lettopcd2.innerHTML++
 }
 lefttopcomponendDiv2btn2.onclick = () => {
    if(Lettopcd2.innerHTML == 0){
     Lettopcd2.innerHTML = 0
    }else{
     Lettopcd2.innerHTML--
    }
  }
MinusKatta.onclick = () => {
   rbcdikk2.innerHTML++
rbcdikki2.innerHTML++
ltcdikki.innerHTML++
  Lettopcd2.innerHTML++
}
MinusKatta2.onclick = () => {
  if(rbcdikk2.innerHTML == 0){
    rbcdikk2.innerHTML = 0
   }else{
    rbcdikk2.innerHTML--
   }
if(rbcdikki2.innerHTML == 0){
    rbcdikki2.innerHTML = 0
   }else{
    rbcdikki2.innerHTML--
   }
if(ltcdikki.innerHTML == 0){
    ltcdikki.innerHTML = 0
   }else{
    ltcdikki.innerHTML--
   }
if(Lettopcd2.innerHTML == 0){
    Lettopcd2.innerHTML = 0
   }else{
    Lettopcd2.innerHTML--
   }
 }