export const isChooseButton = (currentId, favoritList) => {
  return favoritList.includes(+currentId);
}