import AppStyle from "./App.style";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Playlist from "./components/Playlist/Playlist";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <AppStyle>
        <Playlist />
        <MusicPlayer />
      </AppStyle>
    </MusicPlayerProvider>
  );
}

export default App
