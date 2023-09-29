import AppStyle from "./App.style";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <AppStyle>
      <MusicPlayerProvider>
        <MusicPlayer />
      </MusicPlayerProvider>
    </AppStyle>
  );
}

export default App
