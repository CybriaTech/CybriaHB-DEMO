fetch("https://demo-api.tutturu.workers.dev")
  .then(response => response.json())
  .then(data => {
    console.log(data.url);
  })
  .catch(error => console.log(error));
