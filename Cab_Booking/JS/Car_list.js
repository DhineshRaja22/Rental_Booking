let car_listing=JSON.parse(localStorage.getItem("admin_cars"));
let car_list_html="";
document.addEventListener("DOMContentLoaded",()=>{
    for(let i=0;i<=car_listing.length-1;i++){
        cars=car_listing[i];
        id=cars.c_id;
        brand=cars.brand;
        model=cars.model;
        seat=cars.seat;
        rent=cars.rent;
        dname=cars.dname;
        dno=cars.dno;

        let html=` 
        <tr>
        <td>${id}</td>
        <td>${brand}</td>
        <td>${model}</td>
        <td>${seat}</td>
        <td>${rent}</td>
        <td>${dname}</td>
        <td>${dno}</td>
        </tr>`
        car_list_html+=html;
    }
    document.querySelector("tbody").innerHTML=car_list_html;
})