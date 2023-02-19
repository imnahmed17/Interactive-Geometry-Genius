//input geometry calculation
document.getElementById('btn-triangle').addEventListener('click', function(){
    const baseTriangle = getInputFieldValueById('b-tri');
    const heightTriangle = getInputFieldValueById('h-tri');

    const validNumber = isNumber(baseTriangle, heightTriangle);
    if (validNumber == true) {
        const result = (0.5 * baseTriangle * heightTriangle).toFixed(2);
        const area = isInteger(result);
        showResult(area, 'Triangle');
    }
    else {
        alert("Please enter a positive number");
    }
});

document.getElementById('btn-rectangle').addEventListener('click', function(){
    const widthRectangle = getInputFieldValueById('w-rec');
    const lengthRectangle = getInputFieldValueById('l-rec');

    const validNumber = isNumber(widthRectangle, lengthRectangle);
    if (validNumber == true) {
        const result = (widthRectangle * lengthRectangle).toFixed(2);
        const area = isInteger(result);
        showResult(area, 'Rectangle');
    }
    else {
        alert("Please enter a positive number");
    }
});

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