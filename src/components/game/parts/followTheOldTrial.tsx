import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import { store } from "../../../store";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";

export default function FollowTheOldTrialPart() {
  useScreenScroll();
  const title = useAnimatedText("Follow the Old Trial");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>You find an ancient temple. 🏛️</PartContent>
        <PartContent>
          You encounter living statues guarding the entrance. 🗿
        </PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton
          onClick={() => {
            store.parts.setLivingStatuesActive(true);
          }}
        >
          Continue
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
