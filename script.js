document.getElementById('task1Form').addEventListener('submit', function (e) {
    e.preventDefault();
    let hours = parseInt(document.getElementById('hours').value);
    let countOfSecond = hours * 3600;

    if (hours) 
        alert(`${countOfSecond.toLocaleString()} seconds`);
    else
        alert(`Please enter the number of hours.`);
});

