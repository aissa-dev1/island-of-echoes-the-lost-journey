import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";

export default function DiscoveringTheTreasurePart() {
  useScreenScroll();
  const title = useAnimatedText("Discovering the Treasure");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>DiscoveringTheTreasurePart.</PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton>Hi</PartButton>
      </PartActions>
    </PartContainer>
  );
}
