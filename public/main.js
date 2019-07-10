import { buildBoard } from './board/buildBoard.js';

document.getElementById('easyBtn').addEventListener('click',function(){
    readData('Easy')
})
document.getElementById('mediumBtn').addEventListener('click',function(){
    readData('Medium')
})
document.getElementById('hardBtn').addEventListener('click',function(){
    readData('Hard')
})

function readData(difficulty){
    clearBoard()
    const DB = firebase.firestore();
    const Boards = DB.collection('Boards');
    const rand = 1;
    let begin;
    let end;
    Boards.onSnapshot(boards =>{
        boards.forEach(function(board){
            if(board.id == `${difficulty}${rand}`){
                begin = board.data().Start;
                end = board.data().End;
                buildBoard(begin,end);
            }
        })
    })

}
function clearBoard(){
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            let id = `${col}${row}`
            let element = document.getElementById(id)
            element.value = null;
            element.name = null;
            element.removeAttribute('disabled')
            element.removeEventListener('input',function(){
                inputEvent(element)
            })
        }
    }
    
}
