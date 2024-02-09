const GOOGLE_API_KEY = "AIzaSyB-OcSVtK4uu5fE-Uu6hkkjtJKi-0uhJW4";

export var youtubeVideoApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
