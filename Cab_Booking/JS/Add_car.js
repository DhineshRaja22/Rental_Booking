
function get_car_list() {
  let input_brand = document.querySelector(".brand_name");
  let input_model = document.querySelector(".model");
  let input_rent = document.querySelector(".rent");
  let input_seat = document.querySelector(".seat");
  let input_dname = document.querySelector(".driver_name");
  let input_dno = document.querySelector(".driver_no");
  let input_img = document.querySelector(".car_image");
  let brand = input_brand.value;
  let model = input_model.value;
  let rent = input_rent.value;
  let seat = input_seat.value;
  let dname = input_dname.value;
  let dno = input_dno.value;
  let c_id=(car_listing.length)+1;
  let imageData;
  const file = input_img.files[0];

  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          imageData = e.target.result;
          // Store the image data in an array (you can modify this array as needed)
          // const imageArray = JSON.parse(localStorage.getItem('imageArray')) || [];

          car_listing.push({c_id, brand, model, rent, seat, dname, dno, imageData});

          input_brand.value = "";
          input_model.value = "";
          input_rent.value = "";
          input_seat.value = "";
          input_dname.value = "";
          input_dno.value = "";
          input_img.value = "";
          localStorage.setItem('admin_cars', JSON.stringify(car_listing));
          alert("The new car has been added successfully");
      };
      reader.readAsDataURL(file);
  } else {
      alert('Please select an image to upload.');
  }
}

