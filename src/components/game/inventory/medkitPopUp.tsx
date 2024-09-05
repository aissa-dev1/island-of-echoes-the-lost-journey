import { createEffect, createSignal, Show } from "solid-js";
import { store } from "../../../store";
import { soundController } from "../../../utils/sound";
import Icon from "../../reusable/icon";
import { PopUpContainer, PopUpOverlay } from "../../reusable/popUp";
import Range from "../../reusable/range";
import { rangeStyle } from "../../../utils/range-style";
import StatDisplay from "../reusable/statDisplay";
import Label from "../../reusable/label";
import InventoryButton from "./inventoryButton";

interface CardProps {
  title: string;
  value: number;
}

function Card(props: CardProps) {
  return (
    <div class="space-y-2 bg-primary text-white p-1 rounded-lg">
      <Label>{props.title}</Label>
      <StatDisplay
        icon={<Icon src="heart.svg" alt="heart" />}
        value={props.value}
      />
    </div>
  );
}

export default function MedkitPopUp() {
  const medkit = store.inventory.findById(
    store.inventory.state.currentMedkitId!
  );
  const [available, setAvailable] = createSignal(medkit?.value!);
  const [willBeUsed, setWillBeUsed] = createSignal(Math.round(available() / 2));
  const newValue = () => available() - willBeUsed();
  const player = () => store.player;

  function useMedkit() {
    if (!medkit) return;
    if (willBeUsed() > available()) return;
    if (player().state.health + willBeUsed() > player().state.maxHealth) {
      return;
    }

    const updatedList = store.inventory.state.list.map((item) => {
      if (item.id === medkit.id) {
        return {
          ...item,
          value: newValue(),
        };
      }

      return item;
    });
    store.inventory.update(updatedList);
    player().addToHealth(willBeUsed());
    setAvailable(newValue());
  }

  createEffect(() => {
    if (available() <= 0) {
      store.inventory.removeItemById(medkit?.id!);
      store.ui.setMedkitActive(false);
    }
  });

  if (!medkit) return null;

  return (
    <PopUpOverlay
      onClick={() => {
        store.ui.setMedkitActive(false);
      }}
    >
      <PopUpContainer onClick={(e) => e.stopPropagation()}>
        <Icon
          class="absolute top-1 right-1 size-7 cursor-pointer"
          src="xmark.svg"
          alt="xmark"
          onClick={() => {
            store.ui.setMedkitActive(false);
            soundController.play(soundController.clickSound);
          }}
        />
        <div class="space-y-4">
          <Label>{medkit.title}</Label>
          <Card title="Available" value={available()} />
          <Card title="Current" value={player().state.health} />
          <Card title="Will be used" value={willBeUsed()} />
          <Show
            when={
              available() > 0 &&
              player().state.health < player().state.maxHealth
            }
          >
            <Range
              style={rangeStyle(willBeUsed(), available())}
              value={willBeUsed()}
              onChange={(e) => {
                setWillBeUsed(Number(e.target.value));
              }}
              min={1}
              max={available()}
            />
            <InventoryButton onClick={useMedkit}>Confirm</InventoryButton>
          </Show>
        </div>
      </PopUpContainer>
    </PopUpOverlay>
  );
}
