
document.addEventListener("DOMContentLoaded", function() {
  let user_info_html="";
  let users = JSON.parse(localStorage.getItem('user_details'));
 
  let table_head = "<tr><th>Name</th><th>E-mail</th><th>Mobile</th></tr>";
  document.querySelector(".table-head").innerHTML = table_head;
  for(i=0;i<=users.length-1;i++){
    let  user_list=users[i];
    input_name=user_list.name;
    input_email=user_list.email;
    input_ph_no=user_list.ph_no;
   let user_html=`
             <tr class="values">
             <td>${input_name}</td>
             <td>${input_email}</td> 
             <td>${input_ph_no}</td>
             </tr>` 
             
             user_info_html+=user_html;
            }
            console.log(user_info_html)
            document.querySelector('.users').innerHTML=user_info_html;

});

