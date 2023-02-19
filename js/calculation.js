

//non-input geometry calculation
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    let result = (10 * 12).toFixed(2);
    const area = isInteger(result);
    showResult(area, 'Parallelogram');
});

document.getElementById('btn-rhombus').addEventListener('click', function(){
    let result = (0.5 * 16 * 8).toFixed(2);
    const area = isInteger(result);
    showResult(area, 'Rhombus');
});

document.getElementById('btn-pentagon').addEventListener('click', function(){
    let result = (0.5 * 6 * 10).toFixed(2);
    const area = isInteger(result);
    showResult(area, 'Pentagon');
});

document.getElementById('btn-ellipse').addEventListener('click', function(){
    let result = (Math.PI * 10 * 4).toFixed(2);
    const area = isInteger(result);
    showResult(area, 'Ellipse');
});