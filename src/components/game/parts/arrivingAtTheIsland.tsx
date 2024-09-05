import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import { initHiManuscript } from "../../../init";
import { store } from "../../../store";
import Separator from "../../reusable/separator";
import Warning from "../../reusable/warning";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";

export default function ArrivingAtTheIslandPart() {
  useScreenScroll();
  const title = useAnimatedText("Arriving at the Island");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          The island welcomes adventurers with its refreshing golden rays and
          the soothing sounds of its gentle breezes. 👋
        </PartContent>
        <PartContent>
          The island invites explorers to uncover its ancient and marvelous
          secrets.
        </PartContent>
      </PartContentContainer>
      <Warning>
        If you choose to explore and proceed, you cannot turn back. 🔙
      </Warning>
      <PartActions>
        <PartButton
          onClick={() => {
            if (
              store.parts.state.exploreTheBeachActive ||
              store.parts.state.enterTheForestActive
            )
              return;

            store.parts.setArrivingAtTheIslandActive(false);
          }}
          disabled={
            store.parts.state.exploreTheBeachActive ||
            store.parts.state.enterTheForestActive
          }
        >
          Back
        </PartButton>
        <PartButton
          onClick={() => {
            if (store.parts.state.enterTheForestActive) return;

            initHiManuscript();
            store.parts.setExploreTheBeachActive(true);
          }}
          disabled={store.parts.state.enterTheForestActive}
        >
          Explore the Beach
        </PartButton>
        <PartButton
          onClick={() => {
            if (store.parts.state.exploreTheBeachActive) return;

            initHiManuscript();
            store.parts.setEnterTheForestActive(true);
          }}
          disabled={store.parts.state.exploreTheBeachActive}
        >
          Enter the Forest
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
