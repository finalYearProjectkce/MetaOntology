import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';
import { Avatar } from "@readyplayerme/visage";
import { useState } from "react";

const config: AvatarCreatorConfig = {
  clearCache: false,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' };

export default function App() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    setAvatarUrl(event.data.url);
  };

  return (
      <div>
        <AvatarCreator subdomain="sims-nslw60" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
        {avatarUrl && <Avatar modelSrc={avatarUrl} />}
      </div>
  );
}