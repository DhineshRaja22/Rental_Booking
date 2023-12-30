
function getUserList(){
  let user_info = JSON.parse(localStorage.getItem('user_details')) || [];
  let input_name=document.querySelector(".name");
  let input_username=document.querySelector(".userName");
  let input_password=document.querySelector(".password");
  let input_email=document.querySelector(".email");
  let input_ph_no=document.querySelector(".ph_no");
  let name=input_name.value;
  let username=input_username.value;
  let password=input_password.value;
  let email=input_email.value;
  let ph_no=input_ph_no.value;
  user_info.push({name,username,password,email,ph_no});
  input_name.value='';
  input_username.value='';
  input_password.value='';
  input_email.value='';
  input_ph_no.value='';
  localStorage.setItem('user_details', JSON.stringify(user_info));
  // alert("Account as been created succesfully");
  window.location.href = "Signin.html";
}   

  // function deleteUsers(){
  //   user_info=user_info.splice(0,getlength())
  //   console.log(user_info);
  //   getLocalStorage();
  // }
  
  // function getlength(){
  //   n=length.user_info;
  //   return n;
  // }
