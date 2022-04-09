import {useState} from "react";

const backgroundImages = [
  'bg-ubuntu-default',
  'bg-ubuntu-grey',
  'bg-brad',
  'bg-hardy',
  'bg-joshua',
  'bg-matt',
  'bg-ryan'
];

export default function Desktop() {
  const [backgroundImageKey, setBackgroundImageKey] = useState(backgroundImages[0]);

  return (
      <div className={`h-screen w-screen bg-cover ${backgroundImageKey}`} >
      </div>
  );
}
