function pingWebsite() {
  fetch('https://illegal-faizur.onrender.com')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Website pinged successfully');
    })
    .catch(error => console.error('There was a problem with the ping:', error));
}

setInterval(pingWebsite, 30000);
