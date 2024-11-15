let el1 = document.querySelector('#elem1')
let el2 = document.querySelector('#elem2')
let el3 = document.querySelector('#elem3')
let el4 = document.querySelector('#elem4')
let el5 = document.querySelector('#elem5')
let el6 = document.querySelector('#elem6')
let el7 = document.querySelector('#elem7')
let el8 = document.querySelector('#elem8')

let p1 = document.querySelector('#par1')
let p2 = document.querySelector('#par2')
let p3 = document.querySelector('#par3')
let p4 = document.querySelector('#par4')

let but1 = document.querySelector('#button1')
let but2 = document.querySelector('#button2')
let but3 = document.querySelector('#button3')
let but4 = document.querySelector('#button4')

function func1(){
    p1.textContent = Number(el1.value) + Number(el2.value)
}

function func2(){
    p2.textContent = Number(el3.value) - Number(el4.value)
}

function func3(){
    p3.textContent = Number(el5.value) * Number(el6.value)
}

function func4(){
    p4.textContent = Number(el7.value) / Number(el8.value)
}

but1.addEventListener('click', func1)
but2.addEventListener('click', func2)
but3.addEventListener('click', func3)
but4.addEventListener('click', func4)