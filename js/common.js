document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
});

changeColor = function(e) {
    e.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+
                                            ','+Math.round(Math.random()*255)+
                                            ','+Math.round(Math.random()*255)+')';
}

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

// validation
function isNumber(value1, value2) {
    if (isNaN(value1) == false && isNaN(value2) == false && value1 > 0 && value2 > 0) {
        return true;
    }
    else {
        return false;
    }
}

function isInteger(number) {
    if (number.toString().split('.')[1] == 00) {
        return parseInt(number);
    }
    else {
        return number;
    }
}

// showing result on a div
let count = 0;
function showResult(area, geometry) {
    const div = document.getElementById('calculate-geometry');
    count += 1;
    let count1 = count +'. '+ geometry;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="h-3">${count1}</td>
    <td class="h-3"><span>${area} cm</span><sup>2</sup></td>
    <td class="text-right h-10">
        <button onclick="calculateToM(this, ${area})" class="bg-sky-500 px-4 py-1 text-white rounded">Convert to m<sup>2</sup></button>
    </td>`
    div.appendChild(tr);
}

function calculateToM(btn, area) {
    // console.log(btn.parentNode.previousElementSibling.children[0]);
    const areaM = (area / 10000).toFixed(4);
    btn.parentNode.previousElementSibling.children[0].innerText = areaM + " m";
}