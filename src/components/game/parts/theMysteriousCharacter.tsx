import { createEffect, createSignal, on } from "solid-js";
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
import { InventoryItemType } from "../../../features/inventory";

export default function TheMysteriousCharacterPart() {
  useScreenScroll();
  const title = useAnimatedText("The Mysterious Character");
  const [choosed, setChoosed] = createSignal(false);
  const [listenToThem, setListenToThem] = createSignal(false);

  createEffect(
    on(listenToThem, () => {
      if (store.parts.state.reachingTheProphecyChamberActive || !choosed()) {
        return;
      }

      if (listenToThem()) {
        store.inventory.addItem({
          type: InventoryItemType.Manuscript,
          title: "From Mysterious Character",
          description: "You can avoid a tough encounter later.",
        });
        store.parts.setReachingTheProphecyChamberActive(true);
        return;
      }

      store.parts.setReachingTheProphecyChamberActive(true);
    })
  );

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          You meet a mysterious character who offers you a warning of an
          impending danger. 🚫
        </PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton
          onClick={() => {
            setChoosed(true);
            setListenToThem(true);
          }}
          disabled={choosed() && !listenToThem()}
        >
          Listen to them
        </PartButton>
        <PartButton
          onClick={() => {
            setChoosed(true);
            setListenToThem(false);
          }}
          disabled={choosed() && listenToThem()}
        >
          Igone them
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
