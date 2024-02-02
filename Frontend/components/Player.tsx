"use client";
import { useState, useEffect, useMemo } from 'react';
import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import PlayerContent from '@/components/PlayerContent'
import useLoadArtistById from "@/hooks/useLoadArtistById";

import { Song } from "@/types"
import { API_URL } from "@/Api/UsersApi"

const Player = () => {
    const player = usePlayer();

    const artist = useLoadArtistById(player.activeId);
    const [songUrl, setSongUrl] = useState(null);
    const [song, setSong] = useState<Song | any>({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const songById = async (id?: string) => {
            setIsLoading(true);
            const response = await fetch(`${API_URL}/songs`);
            const data: Song[] = await response.json();
            const song = data.find((song) => id === song.song_id);
            setSong(song);
            console.log('setting song', song)
            setIsLoading(false);
        };

        const loadSongUrl = async () => {
            const url = await useLoadSongUrl(player.activeId);
            setSongUrl(url);
        };
        songById(player.activeId);
        loadSongUrl();
    }, [player.activeId]);

    if (!song || !songUrl || !player.activeId) {
        return null;
    }
    return (
        <div
            className="
        fixed 
        bottom-0 
        bg-black
        w-full 
        py-2 
        h-[85px] 
        px-4
      "
        >
            <PlayerContent
                song={song}
                key={songUrl || ''}
                songUrl={songUrl || ''}
                artist={artist || ''} />
        </div>
    );
}

export default Player;