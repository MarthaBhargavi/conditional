//marks using if ,else statement
//  var marks=35
//  if (marks>=80){
//     console.log("A Grade")
//  }
//  else if (marks<80 && marks>=70){
//     console.log("B Grade")
//  }
//  else if( marks<70 && marks>=50){
//     console.log("C Grade")
//  }
//  else if (marks<50 && marks>=35){
//     console.log("D Grade")
//  }
//  else {
//     console.log("FAIL")
//  }



 //nested if 
// un="Bhargavi"
// ps="1245"
// if(un=="Bhargavi"){
//     if(ps=="12345"){
//         console.log("welcome")
//     }
//     else{
//         console.log("invalid password")
//     }
// }
// else{
//     console.log("invalid username")
// }



// switch case
// sw="on"
// switch(sw){
//     case"off":
//     console.log("off state")
//     case"on":
//     console.log("on state")
// }

// day="1"
// switch(day){
//     case"1":
//     console.log("Monday")
//     case"2":
//     console.log("Tuesday")
//     case"3":
//     console.log("wednesday")
//     case"4":
//     console.log("thursday")
//     case"5":
//     console.log("friday")
//     case"6":
//     console.log("saturday")
//     case"7":
//     console.log("saturday")
// default:
//         console.log("invalid day")
// }
            //    here the output will shows all the days when the case is matched (this is the drawback of using switch case)
            //    for that we use break

// after using break
// 


//loops
//************for Loop***************/

// for(var a=10;a<=100;a++){
//     console.log(a)
// }


// for(var a=10;a<=100;a++){
//     console.log(a)
// }
// console.log(a)

// for(var a=100; a>=1; a--){
//     console.log(a)
// }
// console.log(a)

// for(var a=1; a<=100;a++){
//     if(a%2==0){
//         console.log(a)
//     }
// }


/******************************while Loop*********************/
//infinate itterations

// var a=5
// while(a>=5){
//     console.log(a)
//     a--
// }

// var num=1
// while(num<=100){
//     console.log(num)
//     num++
// }
// console.log(num)




/*********break and continue********/
 

// for (i=1;i<=100;i++){
//     if(i==50){
//         break
//     }
//     console.log(i)
// }


// for (i=1;i<=100;i++){
//     console.log(i)
//     if(i==50){
//         break
//     }
//     console.log(i)
// }

for (i=1;i<=100;i++){
    if(i==50){
        continue
    }
    console.log(i)
}