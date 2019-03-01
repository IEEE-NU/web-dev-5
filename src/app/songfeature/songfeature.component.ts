import { Component, OnInit } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-songfeature',
  templateUrl: './songfeature.component.html',
  styleUrls: ['./songfeature.component.css']
})
export class SongfeatureComponent implements OnInit {
  song: Song = {
    id: 1,
    name: 'my_song',
    artist: 'my_artist',
    album: 'my_album'
  };

  tracks: SONGS;

  onRemove(): void {
  	Spotify.removeUserTracks(song.id).then(function (data) {
      console.log(data);
    });
    Spotify.getSavedUserTracks().then(function (data) {
	  console.log(data);
	  this.song = data;
	});
  }

  onKeep(): void {
  	
  }

  constructor() { }

  ngOnInit() {
  	Spotify.getSavedUserTracks().then(function (data) {
	  console.log(data);
	  this.tracks = data;
	});
  }

  getNewTrack() {

  }

}
