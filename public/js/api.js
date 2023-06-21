async function getModels() {


  const make = document.getElementById("Make").value;
  const model = document.getElementById("Model").value;
  const year = document.getElementById("year").value.trim();
  const Transmission = document.getElementById("Transmission").value.trim();
  const fuel = document.getElementById("fuel").value.trim();
  


  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${make}&year=${year}&drive=${Transmission}&fuel_type=${fuel}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cfdc7f3373mshae41231ec895e6ap1f7273jsn2d02751e771b',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    if (result.length > 0 && result[0].class) {
      const {
        class: carClass,
        highway_mpg: highwayMpg,
        city_mpg: cityMpg,
        combination_mpg: combinedMpg,
        cylinders,
        year,
        make,
        model,
        fuel_type: fuelType,
        transmission
      } = result[0]; 
    
      document.getElementById("carClass").innerHTML = carClass;
      document.getElementById("highwayMpg").innerHTML = highwayMpg;
      document.getElementById("cityMpg").innerHTML = cityMpg;
      document.getElementById("Combined").innerHTML = combinedMpg;
      document.getElementById("cylinders").innerHTML = cylinders;
      document.getElementById("mYear").innerHTML = year;
      document.getElementById("cMake").innerHTML = make;
      document.getElementById("cModel").innerHTML = model;
      document.getElementById("cFuel").innerHTML = fuelType;
      document.getElementById("cTrans").innerHTML = transmission;
      const add = document.querySelector(".Specs-For")
      add.innerHTML=`Specs For: ${make} ${model}`
    } else {
      
      console.error("Invalid response or missing properties.");
    }
    //     const cClass = result[0].class;
    //     console.log(cClass  )




    const pexelsUrl = `https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${make} ${model}&locale=en-US&per_page=4&page=1`;
    const pexelsOptions = {
      method: 'GET',
      headers: {
        Authorization: 'ZMXNZMrEoNchb3tHs6uvb4oGlAryWhQ9S67p3l4Lr2Smoq025FzcCSIS',
        'X-RapidAPI-Key': 'cfdc7f3373mshae41231ec895e6ap1f7273jsn2d02751e771b',
        'X-RapidAPI-Host': 'pexelsdimasv1.p.rapidapi.com'
      }
    };

    const pexelsResponse = await fetch(pexelsUrl, pexelsOptions);
    const pexelsResult = await pexelsResponse.json();
    console.log(pexelsResult)
    const imageUrl = pexelsResult.photos[0].src.original;

const appendImage = document.getElementById("imageT")
appendImage.src=imageUrl





  } catch (error) {
    console.error(error);
  }
}
document.getElementById('getSelection').addEventListener('click', getModels);


