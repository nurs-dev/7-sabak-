// const up=window.document.getElementById('up')
// const down=document.querySelector('.down')
// const reset=document.querySelector('.reset')
// const pTag=document.querySelector('#pTag')
// const counterName=document.querySelector('h1')

// let counter=0

// up.onclick=()=>{
//     pTag.innerText=++counter
//     pTag.style.backroundcolor='green'
// }
// down.onclick=()=>{
//     pTag.innerHTML=--counter
//     pTag.style.color='red'
// }
// reset.onclick=()=>{
//     pTag.innerHTML=counter=0
// }

const btns=document.querySelectorAll('button')
console.log(btns);

btns[0].onclick=()=>{
    document.body.style.background='greeen'
}

btns[1].onclick=()=>{
document.body.style.background='Blue'
}

btns[2].onclick=()=>{
document.body.style.background='Red'
}