var username="bhargavi"
var password="BHARGAVI"
if (username==='bhargavi' && password==='BHARGAVI'){
    console.log("valid user")
}
else if(username==='bhargavi' || password==="bha"){
    console.log(" wrong password")
}
else if (password==='BHARGAVI' || username==="BHA"){
    console.log('wrong username')
}
else{
    console.log("user not found")
}