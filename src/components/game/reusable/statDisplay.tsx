import { JSX } from "solid-js";

interface Props {
  icon: JSX.Element;
  value: string | number;
}

export default function StatDisplay(props: Props) {
  return (
    <div class="flex items-center gap-2">
      {props.icon}
      <p>{props.value}</p>
    </div>
  );
}
