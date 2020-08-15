const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let n = document.getElementById('n').value;

    return n == !isNaN ? document.getElementById('resultN').textContent = ('Please enter a number') 
    : document.getElementById('resultN').textContent = (`You can do aproximately ${(n * 1.1307 + 0.6998).toFixed(1)} for one rep!`);
})
