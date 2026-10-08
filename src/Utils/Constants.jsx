const GOOGLE_API_KEY = "AIzaSyAzm_QcSugs7XWah5GSVLOfOUT1ofHg7zs";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=50&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "/api/complete/search?client=firefox&ds=yt&q=";
