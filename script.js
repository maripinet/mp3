
var myaudio = new Audio('musica.mp3');

myaudio.play(); - //This will play the music.
myaudio.pause(); - //This will stop the music.
myaudio.duration; - //Returns the length of the music track.
myaudio.currentTime = 0; //- This will rewind the audio to the beginning.
myaudio.loop = true; //- This will make the audio track loop.
myaudio.muted = true; //- This will mute the track