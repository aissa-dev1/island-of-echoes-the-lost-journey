import { InventoryItemType } from "../../../features/inventory";
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

export default function ExploreTheBeachPart() {
  useScreenScroll();
  const title = useAnimatedText("Explore the Beach");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          You notice something strange sticking out from the soft sand.
        </PartContent>
        <PartContent>
          You discover a mysterious chest that cannot be opened at this time.
        </PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton
          onClick={() => {
            if (store.parts.state.theSmallMonsterActive) return;

            store.parts.setTheSmallMonsterActive(true);
            store.inventory.addItem({
              type: InventoryItemType.Chest,
              title: "Mysterious Chest",
              description: "What do u think is inside?",
              locked: true,
              onUse() {
                store.ui.setInventoryActive(false);
                store.ui.setMysteriousChestActive(true);
              },
            });
          }}
        >
          Continue
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
