const axios = require('axios');

app.get('/purge-cache', async (req, res) => {
    try {
        await axios.post('https://cdn.example.com/purge', { all: true });
        console.log('CDN cache purged');
        res.send('CDN cache purged');
    } catch (error) {
        console.error('Error purging CDN cache:', error);
        res.status(500).send('Failed to purge CDN cache');
    }
});
