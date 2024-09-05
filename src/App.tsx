import GameTitle from "./components/home/gameTitle";
import GameDescription from "./components/home/gameDescription";
import Button from "./components/reusable/button";
import { A } from "@solidjs/router";
import { soundController } from "./utils/sound";

function App() {
  return (
    <div
      class="flex flex-col items-center justify-center gap-4 bg-cover text-white p-8 rounded-lg lg:h-[calc(100vh-2rem)]"
      style={{ "background-image": "url('/island.jpg')" }}
    >
      <GameTitle />
      <GameDescription />
      <A
        href="/play"
        class="w-full md:w-52"
        onClick={() => {
          soundController.play(soundController.clickSound);
        }}
      >
        <Button variant="page" class="w-full">
          Play
        </Button>
      </A>
    </div>
  );
}

export default App;
