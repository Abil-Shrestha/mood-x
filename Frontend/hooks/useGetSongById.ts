import { useEffect, useMemo, useState } from "react"

import { Song } from "@/types"
import { API_URL } from "@/Api/UsersApi"

const useSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [song, setSong] = useState<Song | any>({})
  const [songData, setSongData] = useState<Song[]>([])
  useEffect(() => {
    if (!id) {
      return
    }

    setIsLoading(true)

    const fetchSong = async () => {
      const response = await fetch(`${API_URL}/songs`)
      const data = await response.json()
      setSongData(data)
    }

    const data = songData.filter((song) => id === song.song_id)

    setSong(data)
    setIsLoading(false)

    fetchSong()
  }, [id])

  return useMemo(
    () => ({
      isLoading,
      song,
    }),
    [isLoading, song]
  )
}

export default useSongById
