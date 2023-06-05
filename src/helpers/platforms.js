import { BsPlaystation, BsXbox, BsSteam, BsApple } from "react-icons/bs";
import { SiNintendo, SiLinux } from "react-icons/si";

export const choosePlatform = (platform: string) => {
  switch (platform) {
    case "PC":
      return <BsSteam style={{ width: 30, height: 30 }} />;
    case "Xbox":
      return <BsXbox style={{ width: 30, height: 30 }} />;
    case "PlayStation":
      return <BsPlaystation style={{ width: 30, height: 30 }} />;
    case "Apple Macintosh":
      return <BsApple style={{ width: 30, height: 30 }} />;
    case "Nintendo":
      return <SiNintendo style={{ width: 30, height: 30 }} />;
    case "Linux":
      return <SiLinux style={{ width: 30, height: 30 }} />;
    default:
      return;
  }
};
