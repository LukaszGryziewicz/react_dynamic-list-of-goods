// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  try {
    const response = await fetch(API_URL);

    return await response.json();
  } catch (error: any) {
    throw new Error(`${error.status} - ${error.statusText}`);
  }
};

export const get5First = async () => {
  const goods = await getAll();

  return goods.sort((good1, good2) => good1.name
    .localeCompare(good2.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
