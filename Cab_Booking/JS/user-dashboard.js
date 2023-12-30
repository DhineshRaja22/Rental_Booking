document.addEventListener("DOMContentLoaded", function() {
  let users = JSON.parse(localStorage.getItem('user_details'));
  let index = JSON.parse(localStorage.getItem('current_user'));
  let currentUser;
  let current_user_name = " ";

  currentUser = users[index];
  current_user_name = currentUser.name;

  console.log(current_user_name);

  document.getElementById("user-name").innerHTML = current_user_name;
  document.querySelector(".user-img").innerHTML = current_user_name[0];
});

function removeCurrentUser(){
  localStorage.removeItem('current_user');
}