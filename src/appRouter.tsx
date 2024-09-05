import { Route, Router } from "@solidjs/router";
import App from "./App";
import Play from "./pages/play";
import { onMount } from "solid-js";
import { soundController } from "./utils/sound";

export default function AppRouter() {
  onMount(() => {
    document.addEventListener("click", () => {
      // soundController.playIslandMusic();
    });
  });

  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/play" component={Play} />
    </Router>
  );
}
