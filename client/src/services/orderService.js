import { mockOrders } from "../data/mockData";

export const fetchOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockOrders);
    }, 500);
  });
};
