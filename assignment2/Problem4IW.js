// Given stored username and password and input username and password, Print if the user can login or not.

let database_user = "sne@gmail.com";
let database_pass = "sne123";
let user = "sne@gmail.com";
let pass = "sne123";

if(database_user==user)
{
  if(database_pass==pass)
  {
    console.log("You are Successfully Login!");
  }
  else 
  {
    console.log("Your password is wrong!");
  }
}
else
{
  console.log("Please checked your credential!");
}