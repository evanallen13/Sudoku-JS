let lastBtn;

export function buildBoard(begin,end){
    buildBtns()
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            let id = `${col}${row}`
            let element = document.getElementById(id)
            document.getElementById(id).name = end[col][row]
            element.addEventListener('input',function(){
                inputEvent(element)
            })
            element.addEventListener('click',function(){
                lastBtn = element;
            })
            if(begin[col][row] > 0){
                document.getElementById(id).value = begin[col][row]
                document.getElementById(id).setAttribute('disabled','true')
            }
        }
    }
}

function buildBtns(){
    for( let num = 1; num < 10; num++){
        let element = document.getElementById(`numtBtn${num}`);
        element.addEventListener('click',function(){
            numBtnsEvents(element)
        })
    }
}

function inputEvent(element){
    lastBtn = element;
    if(element.value === element.name){
        element.style.color = 'green'
        element.setAttribute('disabled','true')
        element.value = element.name
        check()
    }else{
        element.style.color = 'red' 
        setTimeout(function(){
            element.value = ''
        },500);
    }
}

function numBtnsEvents(element){
    if(lastBtn !== undefined && lastBtn.style.color !== 'green'){
        lastBtn.value = element.innerHTML;
        inputEvent(lastBtn)
    }
}

function check(){
    let checker = 0;
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            let id = `${col}${row}`
            let sqr = document.getElementById(id).value
            checker = Number(checker) + Number(sqr)
            if(checker === 405){
                document.getElementById('win').innerHTML = 'You win'
            }
        }
    }
}
