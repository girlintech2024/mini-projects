const changeColorBtn = document.getElementById('changeColorBtn');
 
//function to change the backgroundColor
function random (number) {
    return Math.floor(Math.random()* (number + 1));
}
 changeColorBtn.addEventListener('click' , () => {
    const rndCol = `rgba(${random(255) }, ${random(255)}, ${random(255)}, 1)`;
    document.body.style.backgroundColor = rndCol;
    changeColorBtn.body.style.backgroundColor = rndCol;
 });

