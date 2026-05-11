export const rankingColor = (rank: number) => {
  if (rank <= 10) {
    return "text-orange-500"
  } else if (rank <= 100) {
    return "text-purple-500"
  }
  return "text-blue-500"
};