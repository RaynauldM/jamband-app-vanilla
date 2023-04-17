export let spotifyURL =
  "https://open.spotify.com/playlist/0DJCPFhnw5bawptCpgCcMh?si=1fe15f5940324687";

//setlist artiest - nummer
export let setListArr = [
  "Zz Top - Tush",
  "Liquido - Narcotic",
  "Lenny Kravitz - Always On The Run",
  "Wild Cherry - Play That Funky Music",
  "Pearl Jam - Jeremy",
  "Prince - Purple Rain",
  "Brainbox - Summertime",
  "Jimi Hendrix - Little Wing",
  "Stevie Ray Vaughan - Pride and Joy",
  "CCR - Have You Ever Seen The Rain",
  "Herman Brood - Never Be Clever",
  "Guns N Roses - Knocking On Heavens Door",
  "Radiohead - Creep",
  "Bob Marley and The Wailers - Stir It Up",
  "Ben E King - Stand By Me",
  "Chris Stapleton - Tennessee Whiskey",
  "ZZ Top - Jesus Left Chicago",
  "The Beatles - Come Together",
  "Sublime - Santeria",
  "De Dijk - Ik Kan Het Niet Alleen",
  "The Beatles - I Saw Her Standing There",
  "Lynyrd Skynyrd - Sweet Home Alabama",
  "Elvis Presley - Burning Love",
  "The Scene - Iedereen Is Van De Wereld",
  "Elvis Presley - Hound Dog",
  "Golden Earring - Twilight Zone",
  "U2 - One",
  "Jimi Hendrix - Hey Joe",
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
