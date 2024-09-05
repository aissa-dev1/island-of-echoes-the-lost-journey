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

export default function CircumventTheTemplePart() {
  useScreenScroll();
  const title = useAnimatedText("Circumvent the Temple");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          You discover a hidden cave containing medicinal plants.
        </PartContent>
        <PartContent>You encounter a group of venomous snakes. 🐍</PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton
          onClick={() => {
            store.parts.setVenomousSnakesActive(true);
          }}
        >
          Continue
        </PartButton>
      </PartActions>
    </PartContainer>
  );
}
