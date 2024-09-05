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

export default function MeetingSideCharactersPart() {
  useScreenScroll();
  const title = useAnimatedText("Meeting Side Characters");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>What they are doing in the island? 🤔</PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton
          onClick={() => {
            if (store.parts.state.theMysteriousCharacterActive) return;

            store.parts.setTheLostExplorerActive(true);
          }}
          disabled={store.parts.state.theMysteriousCharacterActive}
        >
          The Lost Explorer
        </PartButton>
        <PartButton
          onClick={() => {
            if (store.parts.state.theLostExplorerActive) return;

            store.parts.setTheMysteriousCharacterActive(true);
          }}
          disabled={store.parts.state.theLostExplorerActive}
        >
          The Mysterious Character
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
