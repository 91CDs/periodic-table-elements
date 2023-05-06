export function roundNearest(num: number, index: number) {
  const mul = index === 1 ? 1 : 10**index;
  return Math.round(num * mul) / mul;
}

export const typeList = [
  "alkali metal", 
  "alkaline earth metal", 
  "actinide", 
  "lanthanide", 
  "transition metal", 
  "post-transition metal",
  "metalloid",
  "nonmetal",
  "halogen",
  "noble gas",
  "unknown" 
]

export function getElementColor(category: string) {
  const colorMap = new Map<ElementType, string>()
  colorMap.set("alkali metal", "#eb120a")
  .set("alkaline earth metal", "#d86800")
  .set("actinide", "#ca0ac1")
  .set("lanthanide", "#96007d")
  .set("transition metal", "#252247")
  .set("post-transition metal", "#24436b")
  .set("metalloid", "#07968f")
  .set("nonmetal", "#2360af")
  .set("halogen", "#d8d400")
  .set("noble gas", "#19d458")
  .set("unknown", "#777777")

  const getType = () => {
    let type;

    if (category.includes("nonmetal")) {
      type = "nonmetal"
    } else if (category.includes("unknown")) {
      type = "unknown"
    } else {
      type = category
    }

    return type as ElementType;
  };

  const color = colorMap.get(getType());
  return color 
}