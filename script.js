async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  // const apiUrl =
  //   "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
  const apiUrl = "https://zenquotes.io/api/random";

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
   
    console.log("whoops no quote", error);
  }
  

    

}

//On load
getQuote();



// 