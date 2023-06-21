




async function getInfo(e) {
    e.preventDefault();
    const place = document.getElementById("placeId").value.trim();
    const description = document.getElementById("descriptionId").value.trim();
    const location = document.getElementById("locationId").value.trim();
    const price = document.getElementById("priceId").value.trim();
    const fileInput = document.getElementById("filenameId").value;
  
    let updatedText =  fileInput;
    let result = updatedText.slice(0, 5);

    let data = {
      accommodation_place: place,
      accommodation_description: description,
      accommodation_location: location,
      price: price,
      accommodation_filename: fileInput // Use the selected File object.files[0],
    };
    if (place && description && location && price && result) {
      const response = await fetch('/api/accomodation', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(fileInput)
        console.log("Data seeded");
      } else {
        console.log("Error:", response.statusText);
      }
    }
  
//     const previewImage = document.getElementById('previewImage'); // Get the element by id
  
//     if (fileInput.files[0]) {
//       const reader = new FileReader();
  
//       reader.addEventListener('load', function() {
//         previewImage.src = reader.result;
//       });
  
//       reader.readAsDataURL(fileInput.files[0]);
//     }
   }
  
  
document.querySelector(".getInfo").addEventListener("click",getInfo);

console.log("hello world")