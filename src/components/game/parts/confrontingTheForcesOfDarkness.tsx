import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";

export default function ConfrontingTheForcesOfDarknessPart() {
  useScreenScroll();
  const title = useAnimatedText("Confronting the Forces of Darkness");

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <PartContent>
          A final confrontation with the forces of darkness trying to keep the
          island's secrets buried. ⚰️
        </PartContent>
      </PartContentContainer>
      <PartActions>
        <PartButton>Hi</PartButton>
      </PartActions>
    </PartContainer>
  );
}
