import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

export type Track = {
  title: string;
  artist: string;
  src: string;
  albumCover: string;
}

type CurrentTrackIndex = number | undefined;
type CurrentTrack = Track | undefined;


// export const dummyPlaylist: Track[] = [
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     albumCover: "https://picsum.photos/250",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     albumCover: "https://picsum.photos/251",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//     albumCover: "https://picsum.photos/252",
//   },
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     albumCover: "https://picsum.photos/250",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     albumCover: "https://picsum.photos/251",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//     albumCover: "https://picsum.photos/252",
//   },
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     albumCover: "https://picsum.photos/250",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     albumCover: "https://picsum.photos/251",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//     albumCover: "https://picsum.photos/252",
//   },
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     albumCover: "https://picsum.photos/250",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     albumCover: "https://picsum.photos/251",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//     albumCover: "https://picsum.photos/252",
//   },
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     albumCover: "https://picsum.photos/250",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     albumCover: "https://picsum.photos/251",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//     albumCover: "https://picsum.photos/252",
//   },
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     albumCover: "https://picsum.photos/250",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     albumCover: "https://picsum.photos/251",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//     albumCover: "https://picsum.photos/252",
//   },
// ];

type MusicPlayerContextType = {
  currentTrack: CurrentTrack;
  currentTrackIndex: CurrentTrackIndex;
  setCurrentTrackIndex: React.Dispatch<React.SetStateAction<CurrentTrackIndex>>;
  playlist: Track[];
  setPlaylist: React.Dispatch<React.SetStateAction<Track[]>>;
  play: () => void;
  pause: () => void;
  togglePlayPause: () => void;
  next: () => void;
  previous: () => void;
  paused: boolean;
  percentage: number;
  seek: (percentage: number) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType>({} as MusicPlayerContextType);

export const MusicPlayerProvider = ({ children }: PropsWithChildren) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<CurrentTrackIndex>(undefined);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [audio] = useState(new Audio());
  const [paused, setPaused] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const onTimeUpdate = () => setPercentage((audio.currentTime / audio.duration) * 100);
    audio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
    }
  }, []);

  useEffect(() => {
    if (!canPlay()) return;
    if (percentage === 100) {
      next();
    }

  }, [percentage]);

  const canPlay = () => currentTrackIndex !== undefined && playlist.length > 0;

  useEffect(() => {
    if (!canPlay()) return;
    if (paused) {
      // console.log("audio.pause()");
      audio.pause();
    } else {
      // console.log("audio.play()");
      audio.play();
    }
  }, [paused]);

  const play = () => {
    if (!canPlay()) return;
    // console.log("play()");
    setPaused(false);
  }

  const pause = () => {
    if (!canPlay()) return;
    // console.log("pause()");
    setPaused(true);
  }

  const togglePlayPause = () => {
    if (!canPlay()) return;
    // console.log("togglePlayPause()");
    if (paused) {
      play();
    } else {
      pause();
    }
  }

  const next = () => {
    if (!canPlay()) return;
    // console.log("next()");
    const nextTrackIndex = currentTrackIndex! + 1;
    if (nextTrackIndex >= playlist.length) {
      setCurrentTrackIndex(0);
    } else {
      setCurrentTrackIndex(nextTrackIndex);
    }
  }

  const previous = () => {
    if (!canPlay()) return;
    // console.log("previous()");
    const previousTrackIndex = currentTrackIndex! - 1;
    if (previousTrackIndex < 0) {
      setCurrentTrackIndex(playlist.length - 1);
    } else {
      setCurrentTrackIndex(previousTrackIndex);
    }
  }

  useEffect(() => {
    if (!canPlay()) return;
    // console.log("useEffect currentTrackIndex");
    audio.src = playlist[currentTrackIndex!].src;
    audio.load();
    setPercentage(0);
    audio.play();
    setPaused(false);
  }, [currentTrackIndex]);

  const currentTrack = canPlay() ? playlist[currentTrackIndex!] : undefined;

  const seek = (percentage: number) => {
    if (!canPlay()) return;
    // console.log("seek()");
    audio.currentTime = (audio.duration * percentage) / 100;
    setPercentage(percentage);
  }

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        currentTrackIndex,
        setCurrentTrackIndex,
        playlist,
        setPlaylist,
        play,
        pause,
        togglePlayPause,
        next,
        previous,
        paused,
        percentage,
        seek,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export const useMusicPlayer = () => useContext(MusicPlayerContext);
