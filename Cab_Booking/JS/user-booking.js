let users = JSON.parse(localStorage.getItem('user_details'));
let index = JSON.parse(localStorage.getItem('current_user'));
let booking_details='';
document.addEventListener("DOMContentLoaded", function() {
    let currentUser;
    let current_user_name = " ";
  
    currentUser = users[index];
    current_user_name = currentUser.name;
  
    console.log(current_user_name);
  
    document.getElementById("user-name").innerHTML = current_user_name;
    document.querySelector(".user-img").innerHTML = current_user_name[0];
    let bookingDetails=JSON.parse(localStorage.getItem('booking_details'));

    if(bookingDetails.length>0){
       for(let i=0;i<bookingDetails.length;i++){
           let booking= bookingDetails[i];
           let b_name=booking.name;
        if(b_name==currentUser.name){
          let c_id=booking.c_id;
          let no_of_days=booking.no_of_days;
          let tot_rent=booking.tot_rent;
          let date=booking.date;
          let curr_date=booking.curr_date;
          let pick_up_point=booking.pick_up_point;
          let drop_point=booking.drop_point;
          let dname=booking.c_dname;
          let dno=booking.c_dno;
          let html=`
              <tr>
              <td>${b_name}</td>
              <td>${c_id}</td>
              <td>${no_of_days}</td>
              <td>${curr_date}</td>
              <td>${date}</td>
              <td>${pick_up_point}</td>
              <td>${drop_point}</td>
              <td>${dname}</td>
              <td>${dno}</td>
              <td>${tot_rent}</td>

              </tr>`
           booking_details+=html;
      }
      document.querySelector("tbody").innerHTML=booking_details;
        }
          }
        
});

