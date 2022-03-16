const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist-model');
const mongoose = require('mongoose');

router.get('/',(request,response)=>{
    response.send("<body><h1><center>Welcome to the Playlist's Section where you can perform CRUD Operations.<center/></h1><br><br><br><ul><li><h3>Get All Songs</h3></li><br><br><li><h3>Get  Songs By Id</h3></li><br><br><li><h3>Create Song</h3></li><br><br><li><h3>Delete Song By Id</h3></li><br><br><li><h3>Update Song By Id</h3></li><br><br></ul></body>");
});

router.get('/getAllPlaylists', (request, response, next) => {
    Playlist.find().then(result => {
        console.log("Playlist Fetching in Progress...");
        console.log(result);
        response.status(200).json(
            {
                "result" : result
            }
        );
    }).catch(err => {
        console.log("Some error Occured");
        response.status(500).json({
            "status": 500,
            "message": "Some error Occured"
        })
    })
});

router.get('/getPlaylistById/id=:id', (request, response, next) => {
    Playlist.findById(request.params._id).then(result => {
        console.log("Playlist By ID " + request.params._id + " Successfully Found...");
        response.status(200).json({
            "playlist": result
        })
    }).catch(error => {
        console.log("Some error Occured");
        response.status(500).json({
            "status": 500,
            "message": "Some error Occured"
        });
    })
})

router.post('/createPlaylist', (request, response, next) => {
        const playlist = new Playlist({
            _id: {

            },
            title: request.body.title,
            danceability: request.body.danceability,
            energy: request.body.energy,
            key: request.body.key,
            loudness: request.body.loudness,
            mode: request.body.mode,
            acousticness: request.body.acousticness,
            instrumentalness: request.body.instrumentalness,
            liveness: request.body.liveness,
            valence: request.body.valence,
            tempo: request.body.tempo,
            duration_ms: request.body.duration_ms,
            time_signature: request.body.time_signature,
            num_bars: request.body.num_bars,
            num_sections: request.body.num_sections,
            num_segments: request.body.num_segments,
            class: request.body.class,
            rating: request.body.rating,
        });
        playlist.save().then(result => {
            console.log(result);
            response.status(201).json({
                "status": "Student Created Successfully...",
                "student": result
            });
        }).catch(err => {
            console.log("Error Occured While Saving Student");
            response.status(500).json({
                "status": "Error Occured...",
                "error": err
            })
        })
});

router.delete('/deletePlaylistById/:id', (request, response, next) => {
    Playlist.deleteOne({
        _id: request.params.id
    }).then(result => {
        console.log("Playlist Deleted Successfully");
        response.status(200).json({
            "status": 200,
            "message": "Playlist Deleted Successfully"
        })
    }).catch(error => {
        response.status(500).json({
            "status": 500,
            "message": "Some error Occured"
        })
    })
});

router.put('/updatePlaylistById/:id', (request, response, next) => {
    Playlist.findOneAndUpdate({
        _id: request.params.id
    }, {
        $set: {
            title: request.body.title,
            danceability: request.body.danceability,
            energy: request.body.energy,
            key: request.body.key,
            loudness: request.body.loudness,
            mode: request.body.mode,
            acousticness: request.body.acousticness,
            instrumentalness: request.body.instrumentalness,
            liveness: request.body.liveness,
            valence: request.body.valence,
            tempo: request.body.tempo,
            duration_ms: request.body.duration_ms,
            time_signature: request.body.time_signature,
            num_bars: request.body.num_bars,
            num_sections: request.body.num_sections,
            num_segments: request.body.num_segments,
            class: request.body.class,
            rating: request.body.rating,
        }
    }).then(result => {
        console.log("Playlist Updated Successfully...");
        response.status(200).json({
            "status": 200,
            "message": "Playlist Updated Successfully"
        });
    }).catch(err => {
        console.log("Some error Occured...");
        response.status(500).json({
            "status": 500,
            "message": "Some error Occured"
        });
    });
});

module.exports = router;