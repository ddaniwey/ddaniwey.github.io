function doGetRequest(url, processData){
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
      //  return response.text(); // Si estamos obteniendo texto
        return response.json(); // Si estamos obteniendo el json
    })
    .then((data) => {
        processData(data);
    })
    .catch((error) => console.error("Fetch error:", error));
  }