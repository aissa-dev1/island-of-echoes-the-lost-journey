import { createEffect, createSignal, on, Show } from "solid-js";
import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartTitle from "../reusable/partTitle";
import PartContentContainer from "../reusable/partContentContainer";
import PartContent from "../reusable/partContent";
import { store } from "../../../store";
import { InventoryItemType } from "../../../features/inventory";

export default function TheLostExplorerPart() {
  useScreenScroll();
  const title = useAnimatedText("The Lost Explorer");
  const [choosed, setChoosed] = createSignal(false);
  const [helpedHim, setHelpedHim] = createSignal(false);
  const [message, setMessage] = createSignal("");

  createEffect(
    on(helpedHim, () => {
      if (store.parts.state.reachingTheProphecyChamberActive || !choosed()) {
        return;
      }

      if (helpedHim()) {
        store.inventory.addItem({
          type: InventoryItemType.Map,
          title: "What's next?",
          description: "wait a minute",
        });
        setMessage(
          "He gives you a map of the island revealing secret passages."
        );
        store.parts.setReachingTheProphecyChamberActive(true);
        return;
      }

      setMessage("He disappears, and you lose the chance to get the map.");
      store.parts.setReachingTheProphecyChamberActive(true);
    })
  );

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>He asks you to help him find his lost bag. 🎒</PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton
          onClick={() => {
            setChoosed(true);
            setHelpedHim(true);
          }}
          disabled={choosed() && !helpedHim()}
        >
          Help him
        </PartButton>
        <PartButton
          onClick={() => {
            setChoosed(true);
            setHelpedHim(false);
          }}
          disabled={choosed() && helpedHim()}
        >
          Ignore him
        </PartButton>
      </PartActions>
      <Show when={choosed()}>
        <PartContent>{message()}</PartContent>
      </Show>
    </PartContainer>
  );
}
