
let users=(JSON.parse(localStorage.getItem('user_details')));
let user_name,user_password;
let z=-1;
let click_btn;
 function getValues(){
    let userName=document.getElementById('name');
    let userPass=document.getElementById('pass');
    user_name=userName.value;
    user_password=userPass.value;
      checkDetails();
  }
function checkDetails(){
    let name='username and password doesnt match';
    
    for(let i=0;i<=users.length-1;i++){
      let user_details=users[i];
      if(user_details.username==user_name && user_details.password==user_password){ 
        z=i;
        getCurrentUser();
        window.location.href = "user-dashboard.html";
        return
      }
    }
  document.querySelector(".results").innerHTML=name;

}

function  getCurrentUser(){
    localStorage.setItem('current_user', JSON.stringify(z));    
}