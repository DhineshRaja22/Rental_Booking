let car_listing =[];

document.addEventListener("DOMContentLoaded", function() {
   
      car_listing.push({c_id:1,brand:'Maruthi Shuzuki',model:'Shift',rent:'3500',seat:'4',dname:'Raguran',dno:'9785422254',imageData:'images/download.jfif'});
      car_listing.push({c_id:2,brand:'Innova',model:'Crysta',rent:'5000',seat:'6',dname:'Karan',dno:'6885478541',imageData:'images/innova.jfif'});
      car_listing.push({c_id:3,brand:'Hyundai',model:'i20',rent:'4000',seat:'5',dname:'Deepak',dno:'7855421478',imageData:'images/hyundai.webp'});
      localStorage.setItem('admin_cars', JSON.stringify(car_listing));
  let car_list_info="";
    let car_listings=JSON.parse(localStorage.getItem('admin_cars'));
    for(let i=0;i<=car_listings.length-1;i++){
        let cars=car_listings[i];
        c_brand=cars.brand;
        c_id=cars.c_id
        c_model=cars.model;
        c_rent=cars.rent;
        c_seat=cars.seat;
        c_dname=cars.dname;
        c_dno=cars.dno;
        c_image=cars.imageData;
        // console.log(c_image);
        let cars_html=`
         <div class="frame">
         <img class="car-img" src="${c_image}">
         <div>
         <table>
         <tr><td class="st">Car id:</td><td>${c_id}</td></tr>
         <tr><td class="st">Car Brand:</td><td>${c_brand}</td></tr>
        <tr><td class="st">Car Model:</td><td>${c_model}<td></tr>
        <tr><td class="st">Rent: </td><td>${c_rent} per Day<td></tr>
        <tr><td class="st">No of Seats:</td><td>${c_seat}<td></tr>
        <tr><td class="st">Deiver Name:</td><td>${c_dname}<td></tr>
        <tr><td class="st">Driver Number:</td><td>${c_dno}<td></tr>
        </table>
        </div>
        <button onclick="getbook('${c_id}')">Book Now</button>
        </div>` 
      
        car_list_info+=cars_html;  
    }
    document.querySelector(".container").innerHTML=car_list_info;
    
    
  });
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

  function getbook(id) {
    let booking_car_id=id;
    localStorage.setItem('booking_car_id', JSON.stringify(booking_car_id));
    window.location.href="Booking.html";
  }