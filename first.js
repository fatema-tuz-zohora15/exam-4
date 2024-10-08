var sampooPrice=980;
var facewashPrice=450;
var facecremPrice=1345;


var totalPrice=sampooPrice+facewashPrice+facecremPrice;
var vat=totalPrice*13/100;
var amount=totalPrice+vat;
console.log("amount:"+amount+"taka");
