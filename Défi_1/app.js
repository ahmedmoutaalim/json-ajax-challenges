var button = document.getElementById('button');
var output = document.getElementById('output');

button.addEventListener('click', function () {

    var xReq = new XMLHttpRequest();
    xReq.open('GET', 'data.txt', true);

    xReq.onload = function () {

        var xData = xReq.response;

        output.innerText=xData

    };
    xReq.send();

});
