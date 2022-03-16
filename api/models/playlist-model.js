const mongoose = require('mongoose');
const playlistSchema = new mongoose.Schema({
    _id: {String,String},
    title: {String,String},
    danceability: {String,Number},
    energy: {String,Number},
    key: {String,Number},
    loudness: {String,Number},
    mode: {String,Number},
    acousticness: {String,Number},
    instrumentalness: {String,Number},
    liveness: {String,Number},
    valence: {String,Number},
    tempo: {String,Number},
    duration_ms: {String,Number},
    time_signature: {String,Number},
    num_bars: {String,Number},
    num_sections: {String,Number},
    num_segments: {String,Number},
    class: {String,Number},
    rating: {String,Number},
    
});

module.exports = mongoose.model('Playlist', playlistSchema);