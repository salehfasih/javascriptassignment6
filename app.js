// assign  21-25 
// Q1
 var firt_names=prompt("enter first name");
 var last_name=prompt("enter last name");
 var fullname=firt_names+last_name;
 document.write(fullname);
 document.write('<br>');
//  Q2
var mobile=prompt("enter your favourite mobile phone :");
var len=mobile.length;
document.write("My favourite phone is :"+" " +mobile+"length of string is:"+len);
// Q3
document.write("<br>");
var coun="pakistani";
document.write("String:")
document.write(coun);
var clen=coun.length;
document.write("<br>");
for(var i=0; i<=clen; i++){
    if(coun.charAt(i)=="n"){
        document.write(i);
    }
}
// Q4
document.write("<br>");
var coun="Hello World";
document.write("String:")
document.write(coun);
var clen=coun.length;
document.write("<br>");
for(var i=0; i<=clen; i++){
    if(vars=coun.lastIndexOf("l")){
        
    }
}
document.write(vars);
// Q5
var country="pakistani"
document.write("<br>");
document.write("string:"+" "+country);
document.write("<br>");
    var var1=country.charAt(3);

    document.write("character at index  3:"+" "+var1);
    document.write("<br>");

// Q7

var city="hyderabad";
document.write("city:"+city);
document.write("<br>");

var repl=city.replace("hyder","islam");
document.write("<br>");
document.write("After replcement :"+" "+repl);
// Q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message);
document.write("<br>");
var aft_repl=message.replace("and","&");
document.write("after replacement:"+"<br>"+aft_repl);
// Q9
document.write("<br>");
var number="472";
var st=String(number);

document.write(st);
document.write("<br>");
var  number2=Number(number);
document.write("val :"+number+"<br>"+"Type :"+"number");
document.write("<br>");

// Q10
 var user=prompt("enter input");
 document.write("<br>");
 document.write("user input:"+" "+user);
 document.write("<br>");

 var conv=user.toUpperCase();
 document.write("upercase"+" "+conv);
//   Q11
var user=prompt("enter input");
document.write("<br>");
document.write("user input:"+" "+user);
document.write("<br>");

var conv=user.toUpperCase();
document.write("upercase"+" "+conv);
//Q12
document.write("<br>");
 var  num=34.36;
 document.write("Number :"+num);
 document.write("<br>");
 var cont=num.toString();
 document.write("Result"+"3436");
 document.write("<br>");
//  Q13
var usrname=prompt("enter username");
for(var i=0; i<usrname.length; i++){
    if(usrname.charAt(i)=="@"){
        alert("pleae enter a valid username");

    }
    if(usrname.charAt(i)=="."){
        alert("please enter a valid username");

    }
    if(usrname.charAt(i)=="!"){
        alert("please enter a valid username");
    }
}
// Q14
var bakery=["cake","apple pie","cokies","chips","patties"];
var choice=prompt("welcome to  ABC bakery .What do you want to orser sir/ma'm");
var conv=choice.toLowerCase();
for(var i=0; i<bakery.length; i++){
    if(conv===bakery[i]){
        alert(choice+" "+"is available at  index"+" "+i+" "+"in your bakery");

    }
    else{
        alert("we are sorry "+" "+choice+ " "+"is not available in our bakery");
    }
}
// q15
var password=prompt("enter password");
for(var i=0; i<password.length; i++){
    if(password.slice(0,1)== /[0-9]/g){
        alert("password cannot begin start with a number");

    
}
if(password ==/[a-z]/g){
    alert("valid password");
}


}

// Q16
var university = "University of Karachi"; 
var arr=university.split("");
document.write(arr);
document.write("<br>");
// Q17
var country="pakistan";
document.write("user input :"+country);
document.write("<br>");
for(var i=0; i<country.length; i++){
    var point=country.charAt(i);
    if(i==(country.length-1)){
  document.write("last character of input is:"+""+point);

    }
}
document.write("<br>");
// Q18
 var  para="The quick brown fox jumps over the lazy dog";
 document.write(para);
 document.write("<br>");
var  count=0;
 for(var i=0; i<para.length; i++){
     if(para.slice(i,i+3)=="the" || para.slice(i,i+3)=="The"){
        count++;
     }

     
         
 }
 document.write("there are "+count+"occurence of the the");
 document.write("<br>");
//  Assignment # 26-30
// Q1 
var number=Number(prompt("enter an integar"));
// a
document.write("number"+number);
document.write("<br>");
// b
var round=Math.round(number);
document.write("round off value :"+round);
var floor=Math.floor(number);
document.write("<br>");
document.write("floor value:"+floor);
document.write("<br>");
var ceil=Math.ceil(number);
document.write("ceil value:"+ceil);
// Q2
var number=Number(prompt("enter an negative  floating point number"));
// a
document.write("number"+number);
document.write("<br>");
// b
var round=Math.round(number);
document.write("round off value :"+round);
var floor=Math.floor(number);
document.write("<br>");
document.write("floor value:"+floor);
document.write("<br>");
var ceil=Math.ceil(number);
document.write("ceil value:"+ceil);
// Q3
var abs=-4;
var af_abs=Math.abs(abs);
document.write("<br>");
document.write("the absolute value of -4 is"+" "+af_abs);
// Q4
document.write("<br>");
 var random=Math.random();
 var die=random*6;
 var improvenum=Math.round(die);
 document.write("random dice value ;"+improvenum); 
 document.write("<br>");
 var random=Math.random();
 var die=random*6;
 var improvenum=Math.round(die);
 document.write("random dice value ;"+improvenum); 
// Q5
document.write("<br>");
 var random=Math.random();
 var improvenum=Math.round(random);
 if(improvenum==2){
     document.write(improvenum+"<br>"+"Random coin value Head")
 }
 if(improvenum==1){
    document.write(improvenum+"<br>"+"Random coin value Tails");

}
// Q6
document.write("<br>");
 var random=Math.random();
 var die=random*99;
 var improvenum=Math.round(die);
if(improvenum>1 || improvenum<100){
    document.write("Random number between 1 and 100 is"+improvenum);
}
// Q7
document.write("<br>");
    var weight =prompt("enter your weight ");
document.write("The weight of the user is"+" "+weight);
// Q8
document.write("<br>");
var num=prompt("enter a number between 1 and 10");
 var random=Math.random();
 var die=random*9;
 var improvenum=Math.round(die);
if(num==improvenum){
    alert("**Cogratulations**")
}
else{
    alert("Try again!");
}
// Assignment # 31-34 
// Q1
var a=new Date();

document.write("<br>");
document.write(a);
// Q2 month display of date 
var b=a.toString();
var c=b.slice(4,8);
document.write("<br>");
document.write("current Month"+" "+c);
// current day display
var c=b.slice(0,3);
alert("Today is"+" "+c);
//  IF IT'S FUN DAY
var c=b.slice(0,3);
if(c=="Sun" || c=="Sat" ){
    document.write("it's a fun day");

}
// display first 15 days || last 15 days
var c=b.slice(8,11);
document.write("<br>");
if(c<16){
    document.write("“First fifteen days of the month");
}
else{
    document.write("“Last days of the month");

}
// Write a program that determines the minutes since midnight, Jan. 1, 1970 
// var a =new Date("January 1, 1970");
// var b=a.getTime();
// document.write("<br>");
// // document.write(b);
// var cur_date=new Date();
// var cur_mil=cur_date.getTime();
// var diff=cur_mil-b;
// var years=diff/(1000*60*60*24*30*12);
// years1=Math.floor(years);
// document.write(years1);

var a =new Date("Jan 1, 1970");
var b=a.getTime();
document.write("<br>");
var cur_date=new Date();
var mil=cur_date-b;
var min=mil/(1000*60*60);
document.write("current Date:"+""+cur_date);
document.write("<br>");
document.write("Elapsed millisecond since January 1, 1970:"+ b );
document.write("<br>");
document.write("Elapsed minutes since January 1, 1970:"+min );
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
var date=new Date();
var convst=date.toString();
var time=convst.slice(16 ,18);
document.write("<br>");
document.write(time);
if(time<12){
    alert("“Its AM” ");
}
else{
    alert("“its PM");
}
//  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate
var later_date=new Date("Dec 31, 2020");
document.write("<br>");
document.write("Later Date :"+later_date);
//  Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
var ram_passed=new Date("April 25,2020");
var current_date=new Date();
var diff=current_date-ram_passed;
var convdays=diff/(1000*60*60*24);
var improvedays=Math.floor(convdays);
document.write("<br>");
document.write(improvedays+" "+"days have passed since 1st Ramadan,2020 ");

//Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?  
var date=new Date();
document.write("<br>");
document.write("current date:"+date);
date.setFullYear(1920);
document.write("<br>");
document.write("100 years back:"+date);
// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and 
var date2=new Date();
document.write("<br>");
document.write("current date:"+date2);
date2.setHours(19);
document.write("<br>");
document.write("1 hours ago:"+date2);
// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.   
var age1=prompt("please enter your age");
var mydate=new Date();
var b=mydate.toString();
var current_year=b.slice(11,15);
var d_o_b=current_year-age1;
document.write("<br>");
document.write("Your age is:"+age1);
document.write("<br>");

document.write("your birth year is:"+d_o_b);
// Assignment # 35-38 
function date(){
    var d=new Date();
    document.write("<br>");
      document.write(d);
}
//  Write a function that takes first & last name and then it greets the user using his full name. 
var first=document.getElementById("first").value;
var last=document.getElementById("last").value;
function fullname(){
    var full_name=first+" "+last;
    document.write(full_name);
    
}
//  Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
var f1=prompt("enter 1st number:");
var f2=prompt("enter 2nd number:");
function sum(){
    var sum=f1+f2;
    document.write("The sum of 1st and 2nd number is:"+sum);

}
// Calculator
function Calculator(){
    var num1=parseInt(document.getElementById("f1").value);
    var num2=parseInts(document.getElementById("f2").value);
    var operation=document.getElementById("operation").value;
    if(operation=="+"){
        document.getElementById("ans").value=(num1+num2);
    }
    if(operation=="-"){
        document.getElementById("ans").value=(num1-num2);
    }
} if(operation=="*"){
    document.getElementById("ans").value=(num1*num2);
}
 if(operation=="/"){
     var c=(num1/num2);
    document.getElementById("ans").value=c;
}
 if(operation=="%"){
    document.getElementById("ans").value=(num1%num2);
}

// . Write a function that squares its argument. 
var  square=prompt("enter number");
function square(square){
    var s=Math.square(square);
    document.write(s);
}
//  Write a function that computes factorial of a number. 
var num=prompt("enter the number of factorial:")
function factorial(num){
    for(var i=num-1; i>1; i--){
     var fact=num*i;

    }
    document.write(fact);

}
//  Write a function that computes factorial of a number. 
var start=prompt("enter start number :");
var end=prompt("enter ending number :");
function counting(){
    for(var i=start; i<=end; i++){
        document.write(i,);
    }
}
//  Write a nested function that computes hypotenuse of a right angle triangle.  
//  var base=prompt("enter base of the triangle:");
//  var perp=prompt("enter perpendicular of the triangle: ");
//  function hyp(){
//      function square(){
//          var sqbase=base*base;
//          var sqperp=perp*perp;

//      }
//     //  function square();
//      var hyp=(sqbase+sqperp)^1/2;
//      document.write("the hypotenous of the traiangle is:"+hyp);

//  }
//  function hyp();
//  Write a function that calculates the area of a rectangle. 
var width=2;
var height=3;
function AreaofTriangle(width,height){
    var area=width*height;
    document.write("The area of triangle is:"+area);
}
AreaofTriangle(1,4);