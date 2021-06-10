let counter = 0;

function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0){
        alert(`The counter now is ${counter}`)
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click',count)
});
