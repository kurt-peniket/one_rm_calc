const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let n = document.getElementById('n').value;
    document.getElementById('resultN').style.display = 'flex';

    return n == !isNaN ? document.getElementById('resultN').textContent = ('Please enter a number') 
    : document.getElementById('resultN').textContent = (`${(n * 1.1307 + 0.6998).toFixed(1)}kgs`);
})

// You can do aproximately ${(n * 1.1307 + 0.6998).toFixed(1)}kg for one rep!