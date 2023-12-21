function fetchDataAndRedirect() {
  fetch("https://demo-api.tutturu.workers.dev")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      window.location.replace(data.url);
    })
    .catch(error => {
      console.error('Error fetching and redirecting:', error);
    });
}

function fetchDataAndLogURL() {
  fetch("https://demo-api.tutturu.workers.dev")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('URL from the API:', data.url);
    })
    .catch(error => {
      console.error('Error fetching and logging URL:', error);
    });
}

fetchDataAndRedirect();
fetchDataAndLogURL();
