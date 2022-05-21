const whiteList = ["/login", "/404", "/401"];

export const isTags = (path: string) => {
  return !whiteList.includes(path);
};
