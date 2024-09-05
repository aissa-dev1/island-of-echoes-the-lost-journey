export function rangeStyle(current: number, max: number) {
  return {
    "background-size": `${Math.round((current / max) * 100)}% 100%`,
    "background-repeat": "no-repeat",
  };
}
