// triangle calculation
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

// rectangle calculation
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

// parallelogram calculation
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const baseParallelogram = getInputFieldValueById('b-para');
    const heightParallelogram = getInputFieldValueById('h-para');

    const validNumber = isNumber(baseParallelogram, heightParallelogram);
    if (validNumber == true) {
        const result = (baseParallelogram * heightParallelogram).toFixed(2);
        const area = isInteger(result);
        showResult(area, 'Parallelogram');
    }
    else {
        alert("Please enter a positive number");
    }
});

// rhombus calculation
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const diagonal1Rhombus = getInputFieldValueById('d1-rhom');
    const diagonal2Rhombus = getInputFieldValueById('d2-rhom');

    const validNumber = isNumber(diagonal1Rhombus, diagonal2Rhombus);
    if (validNumber == true) {
        const result = (0.5 * diagonal1Rhombus * diagonal2Rhombus).toFixed(2);
        const area = isInteger(result);
        showResult(area, 'Rhombus');
    }
    else {
        alert("Please enter a positive number");
    }
});

// pentagon calculation
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const apothem = getInputFieldValueById('a-pen');
    const sideLength = getInputFieldValueById('s-pen');

    const validNumber = isNumber(apothem, sideLength);
    if (validNumber == true) {
        const result = (2.5 * apothem * sideLength).toFixed(2);
        const area = isInteger(result);
        showResult(area, 'Pentagon');
    }
    else {
        alert("Please enter a positive number");
    }
});

// ellipse calculation
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const majorRadius = getInputFieldValueById('a-elli');
    const minorRadius = getInputFieldValueById('b-elli');

    const validNumber = isNumber(majorRadius, minorRadius);
    if (validNumber == true) {
        if (minorRadius <= majorRadius) {
            const result = (Math.PI * majorRadius * minorRadius).toFixed(2);
            const area = isInteger(result);
            showResult(area, 'Ellipse');
        }
        else {
            alert("Minor radius can not be greater than major radius");
        }
    }
    else {
        alert("Please enter a positive number");
    }
});