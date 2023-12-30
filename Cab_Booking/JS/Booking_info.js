let booking_details="";
document.addEventListener("DOMContentLoaded",()=>{
let booking_info=JSON.parse(localStorage.getItem("booking_details"))
    for(let i=0;i<booking_info.length;i++){
      let  booking=booking_info[i];
        let name=booking.name;
        let c_id=booking.c_id;
        let no_of_days=booking.no_of_days;
        let tot_rent=booking.tot_rent;
        let date=booking.date;
        let curr_date=booking.curr_date;
        let pick_up_point=booking.pick_up_point;
        let drop_point=booking.drop_point;
        let html=`
            <tr>
            <td>${name}</td>
            <td>${c_id}</td>
            <td>${no_of_days}</td>
            <td>${curr_date}</td>
            <td>${date}</td>
            <td>${pick_up_point}</td>
            <td>${drop_point}</td>
            <td>${tot_rent}</td>

            </tr>`
         booking_details+=html;
    }
    document.querySelector("tbody").innerHTML=booking_details;
})

