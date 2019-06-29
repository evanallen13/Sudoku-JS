let begin = [
[0,0,0,6,0,0,7,0,0],
[0,7,0,8,0,0,6,1,0],
[0,8,0,4,7,2,0,0,0],
[0,1,0,0,0,0,5,0,0],
[0,0,5,0,0,0,4,0,0],
[0,0,6,0,0,0,0,9,0],
[0,0,0,5,4,1,0,2,0],
[0,5,4,0,0,7,0,6,0],
[0,0,8,0,0,3,0,0,0]
]

let end = [
[5, 3, 2, 6, 1, 9, 7, 4, 8],
[4, 7, 9, 8, 3, 5, 6, 1, 2],
[6, 8, 1, 4, 7, 2, 9, 3, 5],
[2, 1, 7, 3, 9, 4, 5, 8, 6],
[8, 9, 5, 1, 2, 6, 4, 7, 3],
[3, 4, 6, 7, 5, 8, 2, 9, 1],
[9, 6, 3, 5, 4, 1, 8, 2, 7],
[1, 5, 4, 2, 8, 7, 3, 6, 9],
[7, 2, 8, 9, 6, 3, 1, 5, 4],
]

for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 9; row++) {
        let id = `${col}${row}`
        let element = document.getElementById(id)
        document.getElementById(id).name = end[col][row]
        element.addEventListener('input',function(){
            inputEvent(element)
        })
        if(begin[col][row] > 0){
            document.getElementById(id).value = begin[col][row]
            document.getElementById(id).setAttribute('disabled','true')
        }
    }
}

function inputEvent(element){
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