import MenuSvg from "./MenuSvg";
import PlaylistToggleButtonStyle from "./PlaylistToggleButton.style";

type PlaylistToggleButtonProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const PlaylistToggleButton = ({ collapsed, setCollapsed }: PlaylistToggleButtonProps) => {
  return (
    <PlaylistToggleButtonStyle
      $collapsed={collapsed}
      onClick={() => setCollapsed(!collapsed)}
    >
      <MenuSvg />
    </PlaylistToggleButtonStyle>
  );
}

export default PlaylistToggleButton;
