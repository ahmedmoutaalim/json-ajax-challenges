var Coustomer = document.getElementById('button1');
var Coustomers = document.getElementById('button2');

var Coust = document.getElementById('customer');
var Cousts = document.getElementById('customers');


Coustomer.addEventListener('click',function(){

var xReq = new XMLHttpRequest();
xReq.open('GET','customer.json');

xReq.onload = function(){

    var xData = JSON.parse(xReq.responseText);

    Coust.innerHTML  =  "id :" + xData.id + "<br>"
                         +  "name :" + xData.name + "<br>" 
                         + " company :"  + xData.company +"<br>" 
                         + " phone :" +xData.phone;
}



xReq.send();


});



Coustomers.addEventListener('click',function(){






});

