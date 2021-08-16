// event handler  
document.getElementById('login-submit').addEventListener('click',function(){
    // console.log('clicked');
   const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
//  get user password  
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;
// console.log(userPassword);


// checking user correct email& password  
if(userEmail == 'saharabanungn@gmail.com' && userPassword == '01752810246');
// console.log('valid user');

// connection with another html 
window.location.href = 'banking.html'



   
})