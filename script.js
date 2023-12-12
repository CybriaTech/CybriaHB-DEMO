fetch("https://demo-api.tutturu.workers.dev")
  .then(response => response.json())
  .then(data => {
    window.location.replace(data.url);
  })
  .catch(error => console.log(error));
