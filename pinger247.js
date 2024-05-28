function pingWebsites() {
  const websites = ['https://illegal-faizur.onrender.com', 'https://aioo-3a2a.onrender.com'];

  websites.forEach(website => {
    fetch(website)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(`Website ${website} pinged successfully`);
      })
      .catch(error => console.error(`There was a problem with the ping for ${website}:`, error));
  });
}

setInterval(pingWebsites, 30000);
