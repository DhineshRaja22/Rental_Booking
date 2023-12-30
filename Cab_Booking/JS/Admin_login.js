let admin_user_name="admin";
let admin_password="admin123";



function check_admin(){
  let admin_Name=document.querySelector(".admin_name");
  let admin_Pass=document.querySelector(".admin_pass");
  let admin_name=admin_Name.value;
  let admin_pass=admin_Pass.value;
  if(admin_name==admin_user_name && admin_pass==admin_password){
    window.location.href="Admin_home.html";
  }
  else{
    alert('User name password mis_Matched');
  }
  admin_Name.value="";
  admin_Pass.value="";
}