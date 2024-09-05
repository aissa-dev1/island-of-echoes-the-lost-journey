import { ComponentProps, splitProps } from "solid-js";
import InventoryButton from "./inventoryButton";
import { cn } from "../../../utils/cn";
import { DOMElement } from "solid-js/jsx-runtime";

interface Props extends ComponentProps<"div"> {
  title: string;
  description: string;
  onBackBtnClick?: (
    e?: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: DOMElement;
    }
  ) => void;
}

export default function InventoryItemHeader(props: Props) {
  const [, rest] = splitProps(props, [
    "class",
    "children",
    "title",
    "description",
    "onBackBtnClick",
  ]);

  return (
    <div {...rest} class={cn("space-y-2", props.class)}>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium">{props.title}</h3>
        <InventoryButton onClick={props.onBackBtnClick}>Back</InventoryButton>
      </div>
      <p class="text-sm">{props.description}</p>
    </div>
  );
}
