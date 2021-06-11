// Retrieving Elem from DOM

const sec_1 = document.getElementById('sec1')
const sec_2 = document.getElementById('sec2')
const sec_3 = document.getElementById('sec3')
const sec_4 = document.getElementById('sec4')
const sec_5 = document.getElementById('sec5')
const sec_6 = document.getElementById('sec6')
const btn_1 = document.getElementById('btn1')
const btn_2 = document.getElementById('btn2')
const btn_3 = document.getElementById('btn3')
const btn_4 = document.getElementById('btn4')
const btn_5 = document.getElementById('btn5')
const btn_6 = document.getElementById('btn6')

const sec2_inp = document.getElementById('sec2Inp')
const sec3_inp = document.getElementById('sec3Inp')
const sec4_inp = document.getElementById('sec4Inp')

const noone = document.getElementById('noOne')
const father = document.getElementById('father')
const mother = document.getElementById('mother')
const brother = document.getElementById('noOne')
const sister = document.getElementById('sister')

// Functions

const btnDisplay= (arg1,arg2)=>{
   if(arg1.value.length > 1){
       arg2.classList.remove('hidden')
   }else{
    arg2.classList.remove('hidden')
   }
}
const display =(arg1 , arg2)=>{
arg1.classList.add('hidden')
arg2.classList.remove('hidden')
}
const checkClicked = ()=>{
    if(noone.checked===true || father.checked===true || mother.checked===true || brother.checked===true || sister.checked===true){
        btn_5.classList.remove('hidden')
    }else{
        btn_5.classList.add('hidden')
    }
}



// Event Listeners

sec2_inp.addEventListener('keyup',()=>{
    btnDisplay(sec2_inp, btn_2)
})
sec3_inp.addEventListener('keyup',()=>{
    btnDisplay(sec3_inp, btn_3)
})
sec4_inp.addEventListener('keyup',()=>{
    btnDisplay(sec4_inp, btn_4)
})



btn_1.addEventListener('click',()=>{
    display(sec_1, sec_2)
})
btn_2.addEventListener('click',()=>{
    if(sec2_inp.value===''){
        alert('Name cant be empty')
    }else if(!isNaN(sec2_inp.value)){
        alert("Name cant be a number")
    }else if(sec2_inp.value.length<3){
        alert("Name cant be smaller then 3 chars")
    }
    else{
        display(sec_2, sec_3)
    }
})
btn_3.addEventListener('click',()=>{
    if(sec3_inp.value==='' ){
        alert('Date cant be empty')
    }else if(sec3_inp.value.length<5){
        alert('Date cant be smaller then 5 chars')
    }
    else{
        display(sec_3, sec_4)
    }
})
btn_4.addEventListener('click',()=>{
    if(sec4_inp.value===''){
        alert('Field cant be empty')
    }else if(sec4_inp.value.length<5){
        alert('Field cant be smaller then 5 chars')
    }
    else{
        display(sec_4, sec_5)
    }
})
btn_5.addEventListener('click',()=>{
        display(sec_5, sec_6)
})
btn_6.addEventListener('click',()=>{
    btn_6.innerText='Subitted🐱‍🏍'
    document.body.style.background='green'

})

