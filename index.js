const btn = document.getElementById('btn');
const input = document.getElementById('n');

//Listener for live updating
input.addEventListener('keyup', calc);

//Listener for update on button click
btn.addEventListener('click', calc);

function calc () {
    let n = document.getElementById('n').value;
    document.getElementById('resultN').style.display = 'flex';
    
    return n == !isNaN ? document.getElementById('resultN').textContent = ('Please enter a number!') 
    : document.getElementById('resultN').innerHTML = (`You can lift about&nbsp;<span id="numbers">${(n * 1.1307 + 0.6998).toFixed(1)}kgs</span> for one rep!`);
}

//FORMULA:
//(n * 1.1307 + 0.6998).toFixed(1)