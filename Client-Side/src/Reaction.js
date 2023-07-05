import LikeReact from "./LikeReact";
import LoveReact from "./LoveReact";
import CareReact from "./CareReact";
import HahaReact from "./HahaReact";
import WowReact from "./WowReact";
import SadReact from "./SadReact";
import AngryReact from "./AngryReact";

export default function Reaction({ reactionType, rotate }) {
  if (reactionType == 1) return <LikeReact rotate={rotate} />;
  else if (reactionType == 2) return <LoveReact rotate={rotate} />;
  else if (reactionType == 3) return <CareReact rotate={rotate} />;
  else if (reactionType == 4) return <HahaReact rotate={rotate} />;
  else if (reactionType == 5) return <WowReact rotate={rotate} />;
  else if (reactionType == 6) return <SadReact rotate={rotate} />;
  else if (reactionType == 7) return <AngryReact rotate={rotate} />;
}
