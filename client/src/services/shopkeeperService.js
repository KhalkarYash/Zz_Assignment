import { mockShopkeepers } from "../data/mockData";

export const fetchShopkeepers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockShopkeepers);
    }, 500);
  });
};
