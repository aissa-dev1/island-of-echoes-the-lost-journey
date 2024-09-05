import { A } from "@solidjs/router";
import Button from "../../reusable/button";
import { soundController } from "../../../utils/sound";
import { useAnimatedText } from "../../../hooks/use-animated-text";
import { store } from "../../../store";
import { createSignal, onMount, Show } from "solid-js";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";
import Label from "../../reusable/label";
import Input from "../../reusable/input";

export default function BeginningPart() {
  const title = useAnimatedText("The Beginning");
  const [name, setName] = createSignal("");

  onMount(() => {
    setName(store.player.state.name);
  });

  return (
    <PartContainer>
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          In the heart of the vast ocean lies a mysterious island known only as
          the Island of Echoes. 🏝️
        </PartContent>
        <PartContent>
          Legends speak of untold riches hidden within its dense jungles,
          guarded by ancient secrets and forgotten sentinels. 🗝️
        </PartContent>
        <PartContent>
          Many have sought to uncover its treasures, but few have returned to
          tell the tale. 🔇
        </PartContent>
        <PartContent>
          You are a daring adventurer, determined to uncover the truth behind
          the island's legends.
        </PartContent>
        <PartContent>
          You embark on a perilous journey across treacherous seas. 🌊
        </PartContent>
      </PartContentContainer>
      <Show when={!store.parts.state.arrivingAtTheIslandActive}>
        <div class="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
          <Label for="your_name">Your name</Label>
          <div class="flex items-center gap-4">
            <Input
              id="your_name"
              type="text"
              variant="page"
              class="col-span-3"
              placeholder="Aissa"
              value={name()}
              onChange={(e) => setName(e.target.value)}
            />
            <PartButton
              class="col-span-1"
              onClick={() => {
                store.player.changeName(name());
              }}
            >
              Save
            </PartButton>
          </div>
        </div>
      </Show>
      <PartActions>
        <Show
          when={!store.parts.state.arrivingAtTheIslandActive}
          fallback={<PartButton disabled>Exit</PartButton>}
        >
          <A
            href="/"
            onClick={() => {
              store.parts.exit();
              soundController.play(soundController.clickSound);
            }}
          >
            <Button variant="page" class="w-full">
              Exit
            </Button>
          </A>
        </Show>
        <PartButton
          onClick={() => {
            store.parts.setArrivingAtTheIslandActive(true);
          }}
        >
          Continue
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
