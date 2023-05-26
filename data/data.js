export const whenData = "26-05-2023";
export const whoData = [
  "Peter Koole",
  "Marcel Faas",
  "Ron van der Park",
  "Raynauld Minkema",
];

export let spotifyURL =
  "https://open.spotify.com/playlist/50VuVwuEVUY45WrasQhp9S?si=5aad93df21a947c2";

//setlist artiest - nummer
export let setListArr = [
  "Eric Clapton - Cocaine",
  "Faith No More - Easy",
  "Lynyrd Skynyrd - Sweet Home Alabama",
  "Prince - Purple Rain",
  "U2 - One",
  "Tina Turner - Proud Mary",
  "Pearl Jam - Jeremy",
  "ZZ Top - Tush",
  "Lenny Kravitz - Always On The Run",
  "Wild Cherry - Play That Funky Music",
  "Brainbox - Summertime",
  "Jimmy Hendrix - Little Wing",
  "Herman Brood And His Wild Romance - Never Be Clever",
  "Guns n Roses - Knocking On Heavens Door",
  "Radiohead - Creep",
  "Bob Marley - Stir It Up",
  "Chris Stapleton - Tennessee Whiskey",
  "De Dijk - Ik kan het niet alleen",
  "Black Crowes - Hard To Handle",
  "Thin Lizzy - Still In Love With You",
];

export let setListArrArtists = [];
export let setListArrSongs = [];

export let setListArrSorted = setListArr.toSorted();

// setListArr wordt onderverdeeld in losse arrays voor nummer en artiest
setListArr.forEach((element) => {
  let arr = element.split("-");
  let artist = arr[0].trim();
  let song = arr[1].trim();
  if (!setListArrArtists.includes(artist)) {
    setListArrArtists.push(artist);
  }
  if (!setListArrSongs.includes(song)) {
    setListArrSongs.push(song);
  }
});
