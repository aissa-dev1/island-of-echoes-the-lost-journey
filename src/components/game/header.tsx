import { createSignal, onCleanup, onMount } from "solid-js";
import { store } from "../../store";
import StatDisplay from "./reusable/statDisplay";
import PartButton from "./reusable/partButton";
import Icon from "../reusable/icon";

export default function Header() {
  const [onTop, setOnTop] = createSignal(false);
  const player = () => store.player.state;

  function handleScroll() {
    if (window.scrollY >= 100) {
      setOnTop(true);
    } else setOnTop(false);
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      class="container fixed left-1/2 -translate-x-1/2 w-[calc(100%-32px)] h-24 bg-primary text-white p-4 z-10 duration-300"
      classList={{
        "border border-page": onTop(),
      }}
      style={{
        top: onTop() ? "0" : "16px",
        "border-radius": onTop() ? "0" : "8px",
      }}
    >
      <div class="flex items-center gap-4 flex-wrap">
        <p>{player().name.slice(0, 10)}</p>
        <StatDisplay
          icon={<Icon class="size-7" src="heart.svg" alt="heart" />}
          value={player().health}
        />
        <StatDisplay
          icon={<Icon class="size-6" src="sword.svg" alt="sword" />}
          value={player().damage}
        />
        <PartButton
          class="relative"
          onClick={() => {
            store.ui.setInventoryActive(true);
          }}
        >
          <p>Inventory</p>
          <span class="absolute -top-2 -right-6 flex items-center justify-center size-5 rounded-full bg-page text-black text-sm font-bold">
            {store.inventory.state.list.length}
          </span>
        </PartButton>
      </div>
    </div>
  );
}
