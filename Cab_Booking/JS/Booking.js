let car_listings=JSON.parse(localStorage.getItem('admin_cars'));
let users = JSON.parse(localStorage.getItem('user_details'));
let index = JSON.parse(localStorage.getItem('current_user'));

let booking_car_id = JSON.parse(localStorage.getItem('booking_car_id')) || [];
let booking_car=car_listings[booking_car_id-1];
c_image=booking_car.imageData;
c_id=booking_car.c_id;
c_brand=booking_car.brand;
c_model=booking_car.model;
c_rent=booking_car.rent;
c_seat=booking_car.seat;
c_dname=booking_car.dname;
c_dno=booking_car.dno;

document.addEventListener("DOMContentLoaded",()=>{
   
   let htmlvalues=`
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
        </div>` 

        const displayCar=document.querySelector(".car");
        displayCar.innerHTML=htmlvalues;
        let currentUser;
        let current_user_name = " ";
        currentUser = users[index];
        current_user_name = currentUser.name;
        console.log(current_user_name);
        document.getElementById("user-name").innerHTML = current_user_name;
        document.querySelector(".user-img").innerHTML = current_user_name[0];
    })

    function getBookingInfo(){
        let   input_days=document.querySelector(".no_of_days")          
        let   input_date=document.querySelector(".date")          
        let   input_pick_up=document.querySelector(".pick_up_point")          
        let  input_drop=document.querySelector(".drop_point") 
        let curr_day=new Date;
        let month=new Date;
        let year=new Date;
        curr_day=curr_day.getDate();
        month=month.getMonth()+1;
        year=year.getFullYear();
        let  curr_date=`${year}-${month}-${curr_day}`;
        let bookig_details = JSON.parse(localStorage.getItem('booking_details')) || [];
        let no_of_days=input_days.value;
        let date=input_date.value;
        let pick_up_point=input_pick_up.value;
        let drop_point=input_drop.value; 
        let tot_rent=c_rent*no_of_days; 
        currentUser = users[index];     
        let name=currentUser.name;
        ifAvailable(date,c_id);
        function addBookDetails(){
        bookig_details.push({name,c_id,no_of_days,curr_date,date,pick_up_point,drop_point,tot_rent,c_dno,c_dname});
        localStorage.setItem('booking_details', JSON.stringify(bookig_details));
        alert("your car has been Bokked succesfully")
        input_days.value="";
        input_date.value="";
        input_pick_up.value="";
        input_drop.value="";
        }
        function ifAvailable(b_date, c_id) {
            let booking_details = JSON.parse(localStorage.getItem('booking_details'));
            if(bookig_details.length==0){
                addBookDetails();
            }
            else{
            let isAvailable = true;
            for (let i = 0; i < booking_details.length; i++) {
                let booking = booking_details[i];
                let car_id = booking.c_id;
                let date = booking.date;
                if (car_id === c_id && b_date === date) {
                    isAvailable = false;
                    break; 
                }
            }
            if (isAvailable) {
                addBookDetails();
            } else {
                alert('The car is booked for this date. Please choose another car or a different date.');
            }
        }
        }
    
    }