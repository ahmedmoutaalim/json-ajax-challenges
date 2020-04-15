var Customer = document.getElementById('button1');
var Customers = document.getElementById('button2');

var Cust = document.getElementById('customer');
var Custs = document.getElementById('customers');


Customer.addEventListener('click',function(){

var xReq = new XMLHttpRequest();
xReq.open('GET','customer.json');

xReq.onload = function(){

    var xData = JSON.parse(xReq.responseText);

    Cust.innerHTML  =  "id :" + xData.id + "<br>"
                         +  "name :" + xData.name + "<br>" 
                         + " company :"  + xData.company +"<br>" 
                         + " phone :" +xData.phone + "<hr>";
}



xReq.send();


});



Customers.addEventListener('click',function(){

    var xReq = new XMLHttpRequest();
    xReq.open('GET','customers.json');

    xReq.onload= function(){

    var xData = JSON.parse(xReq.responseText);
    var output = "";
    for(i=0 ; i<xData.length ; i++){

         output += "id :" + xData[i].id + "<br>" 
                   + "name :" + xData[i].name + "<br>" 
                   +"company :"+ xData[i].company+"<br>" 
                   + "phone :"+ xData[i].phone +"<hr>";
        }
    Custs.innerHTML = output;
    }
    xReq.send();
});

