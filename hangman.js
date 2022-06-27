const wordsList = [
    'javascript',
    'html',
    'css',
    'bootstrap',
    'jquery',
    'react',
    'node',
    'express',
    'mongodb',
    'mysql',
    'sql',
    'ajax',
];
const targetsEl=Array.from(document.getElementsByClassName('targets'));
const wrongEl=[];
const correctEl=[];
const innerWord=document.getElementById('inner-word');
const wordEl=document.getElementById('word');
const wordSelected=wordsList[Math.floor(Math.random()*wordsList.length)];
const gameOverEl=document.getElementById('game-over');
const gameWinEl=document.getElementById('game-win');
const usedKeyEl=document.getElementById('used-key');
const wrongKeyEl=document.getElementById('wrong-key');
function displayWord(word) {
    innerWord.innerHTML=`${wordSelected.split('').map(
        (letter) => (correctEl.includes(letter) ? letter : '_')
    ).join('')}`;
    const innerWordReplace=innerWord.innerHTML.replace(/\s/g, '');
    if(innerWordReplace===wordSelected){
        gameWinEl.className='appear';
    }
};
function updateWrong(letter) {
    wrongKeyEl.classList.toggle('appear');
    targetsEl.forEach((target,index) => {   //ojo aca es mejor trabajar con querySelectorAll
        if(index<wrongEl.length){
            target.style.backgroundColor='green';
        }
        if(wrongEl.length===targetsEl.length){
            gameOverEl.className='appear';
        }
    });
}
window.addEventListener('keydown', (e) => {
    if(
        e.key==='a'||
        e.key==='b'||
        e.key==='c'||
        e.key==='d'||
        e.key==='e'||
        e.key==='f'||
        e.key==='g'||
        e.key==='h'||
        e.key==='i'||
        e.key==='j'||
        e.key==='k'||
        e.key==='l'||
        e.key==='m'||
        e.key==='n'||
        e.key==='o'||
        e.key==='p'||
        e.key==='q'||
        e.key==='r'||
        e.key==='s'||
        e.key==='t'||
        e.key==='u'||
        e.key==='v'||
        e.key==='w'||
        e.key==='x'||
        e.key==='y'||
        e.key==='z'||
        e.key==='A'||
        e.key==='B'||
        e.key==='C'||
        e.key==='D'||
        e.key==='E'||
        e.key==='F'||
        e.key==='G'||
        e.key==='H'||
        e.key==='I'||
        e.key==='J'||
        e.key==='K'||
        e.key==='L'||
        e.key==='M'||
        e.key==='N'||
        e.key==='O'||
        e.key==='P'||
        e.key==='Q'||
        e.key==='R'||
        e.key==='S'||
        e.key==='T'||
        e.key==='U'||
        e.key==='V'||
        e.key==='W'||
        e.key==='X'||
        e.key==='Y'||
        e.key==='Z'
    ){
        const letter=e.key
        if(wordSelected.includes(letter)){
            if(!correctEl.includes(letter)){
                correctEl.push(letter);
                displayWord(wordSelected);
            }else{
                alert('You already used this letter');
            }
        }else{
            if(!wrongEl.includes(letter)){
                wrongEl.push(letter);
                updateWrong(letter);
            }else{
                alert('You already used this letter');
            }
        }
    }
});