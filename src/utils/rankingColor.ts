export const rankingColor = (rank: number) => {
  if (rank <= 1) {
    return "text-artifact"
  } else if (rank <= 10) {
    return "text-legendary"
  } else if (rank <= 75) {
    return "text-epic"
  } else if (rank <= 150) {
    return "text-rare"
  }
  return "text-uncommon"
};