import { Song } from "@/types";
import { API_URL } from "@/Api/UsersApi";

const useLoadSongUrl = async (id?: string) => {
  
  
  const fetchSong = async () => {
    const response = await fetch(`${API_URL}/songs`);
    const data = await response.json();
    return data;
  };
  if (!id) {
    return '';
  }
  const songData = await fetchSong();
  const data = songData.filter((song) => id === song.song_id)
  return data[0].song_url
};

export default useLoadSongUrl;