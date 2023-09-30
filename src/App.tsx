import AppStyle from "./App.style";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Playlist from "./components/Playlist/Playlist";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <AppStyle>
      <MusicPlayerProvider>
        <Playlist />
        <MusicPlayer />
      </MusicPlayerProvider>
    </AppStyle>
  );
}

export default App
