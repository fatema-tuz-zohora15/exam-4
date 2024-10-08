var tShirtPrice=399;
 var tShirtQty=11;
 var totalTShirtPrice=tShirtPrice*tShirtQty;

 var shoesPrice=1899;
 var shoesQty=9;
 var totalShoesPrice=shoesPrice*shoesQty;

 var mobilePrice=35990;

 var headPhonePrice=1280;
 var headPhoneQty=4;
 var totalHeadPhonePrice=headPhonePrice*headPhoneQty;

 var totalExpense=totalTShirtPrice+totalShoesPrice+mobilePrice+totalHeadPhonePrice;

 var isMember=true;

 if(isMember==true){
    var discount=totalExpense*30/100;
    var amount=totalExpense-discount;
    var vat=amount*4/100;
    var totalPay=amount+vat;
    console.log("Member with pay: "+totalPay);
  } 
  else{
     if(totalExpense>=30000){
        var discount=totalExpense*15/100;
        var amount=totalExpense-discount;
        var vat=amount*4/100;
        var totalPay=amount+vat;
        console.log(totalPay);
     }
     else if( totalExpense>=20000){
        var discount=totalExpense*10/100;
        var amount=totalExpense-discount;
        var vat=amount*4/100;
        var totalPay=amount+vat;
        console.log(totalPay);
     }
     else if(totalExpense>=10000){
        var discount=totalExpense*5/100;
        var amount=totalExpense-discount;
        var vat=amount*4/100;
        var totalPay=amount+vat;
        console.log(totalPay);
     }
    
    else{
        var vat=amount*4/100;
        var totalPay=amount+vat;
        console.log("pay full amount"+totalPay);
     }

  }