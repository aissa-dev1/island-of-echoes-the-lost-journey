import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";

export default function ReachingTheProphecyChamberPart() {
  useScreenScroll();
  const title = useAnimatedText("Reaching the Prophecy Chamber");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          You find a chamber containing ancient inscriptions hinting that the
          island hides a great power. 💪
        </PartContent>
        <PartContent>
          An ancient guardian appears, trying to prevent you from uncovering the
          secret. 🤐
        </PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton>Continue</PartButton>
      </PartActions>
    </PartContainer>
  );
}
