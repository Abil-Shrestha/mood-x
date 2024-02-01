"use client";
import {useEffect, useState} from 'react';
import { Song } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";
import SongItem from "@/components/SongItem";
import { API_URL } from '@/Api/UsersApi';

const PageContent = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
      const fetchSong = async () => {
        const response = await fetch(`${API_URL}/songs`);
        const data = await response.json();
        setSongs(data);
      };

      fetchSong();
  }, []);
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        Loading Songs ...
      </div>
    )
  }

  return ( 
    <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-x-4
        gap-y-4 
        mt-4
      "
    >
      {songs.map((song) => (
        <SongItem
          onClick={(song_id: string) => onPlay(song_id)} 
          key={song.song_id} 
          data={song}
        />
      ))}
    </div>
  );
}
export default PageContent;