import { onMount } from "solid-js";
import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";
import { store } from "../../../store";

export default function EnterTheForestPart() {
  useScreenScroll();
  const title = useAnimatedText("Enter the Forest");

  onMount(() => {
    if (store.inventory.hasByTitle("Old Map")) {
      store.inventory.removeItemByTitle("Old Map");
      return;
    }

    store.player.removeFromHealth(10);
  });

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          The forest is thick and complex, and the deeper you go, the more
          mysterious and dangerous it becomes. ⚡
        </PartContent>
        <PartContent>
          You notice forgotten trails and hidden temples.
        </PartContent>
        <PartContent>You fall into a deadly trap. ☠️</PartContent>
        <PartContent>
          If you have the old map, you can avoid the trap.
        </PartContent>
        <PartContent>If not, you will lose 10 health points.</PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton
          onClick={() => {
            if (store.parts.state.circumventTheTempleActive) return;

            store.parts.setFollowTheOldTrialActive(true);
          }}
          disabled={store.parts.state.circumventTheTempleActive}
        >
          Follow the Old Trial
        </PartButton>
        <PartButton
          onClick={() => {
            if (store.parts.state.followTheOldTrialActive) return;

            store.parts.setCircumventTheTempleActive(true);
          }}
          disabled={store.parts.state.followTheOldTrialActive}
        >
          Circumvent the Temple
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
