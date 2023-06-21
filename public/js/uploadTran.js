async function getCarInfo(e){
    e.preventDefault()
    const carName = document.getElementById("tName").value.trim()
    const description = document.getElementById("tDescriptionId").value.trim()
    const carCapacity = document.getElementById("tCapacityId").value.trim()
    const price = document.getElementById("tPriceId").value.trim()
    const filename = document.getElementById("tFilenameId").value.trim()


let data = {
    transportation_name:carName ,
    transportation_description: description,
    capacity:carCapacity ,
    price:price,
    filename:filename 
}


    if (carName && description && carCapacity && price && filename ) {
        const response = await fetch('/api/transport', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },

          
        });
        // response.forEach(element => {
        //     console.log(element)
        // });
        
        if (response.ok) {
            console.log("data seeded")
        //   document.location.replace('/');
        } else (err)=>{
            console.log(err)
        //   alert(response.statusText);
        }
      }

 

    
    
    // console.log(place)
    // console.log(description)
    // console.log(location)
    // console.log(price)
    // console.log(filename)


}
document.querySelector(".uploadInfo").addEventListener("click",getCarInfo)