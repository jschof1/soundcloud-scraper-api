
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs');

const data = require("./playlist.json");



const tracks = []
for(let i of data.tracks){
    //create object with track info
    let track = {
        title: i.title,
        genre: i.genre,
        likes: i.likes_count,
        duration: new Date(i.duration * 1000).toISOString().substr(11, 8),
        url: i.permalink_url,
        playback_count: i.playback_count,
        tags: i.tag_list,
        description: i.description,
        dateCreated: i.created_at
}
// push tracks to global variable object
    tracks.push(track);
}
var json = JSON.stringify(tracks);
fs.writeFileSync('./output.json', json);