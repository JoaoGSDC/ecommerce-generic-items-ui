import axios from "axios";

const fetchCmsApi = async (query: any, { variables }: any = {}) => {
  const response = await axios.post(
    String(process.env.REACT_APP_API_URL),
    JSON.stringify({ query, variables }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    }
  );

  const { errors, data } = await response.data;

  if (errors) {
    throw new Error("Failed to fetch API");
  }

  return data;
};

export const getAllProducts = async (
  limit: number = 4,
  page: number = 0,
  orderBy: string = "avaliation_DESC"
) => {
  const { allEcommerces } = await fetchCmsApi(`
    {
      allEcommerces(first: ${limit} skip: ${page} orderBy: ${orderBy}) {
        id
        name
        avaliation
        price
        image {
          url(imgixParams: {fm: png, fit: crop, w: 120, h: 120})
        }
      }
    }
  `);

  return allEcommerces;
};

export const getAmountProducts = async () => {
  const { allEcommerces } = await fetchCmsApi(`
    {
      allEcommerces {
        id
        name
        avaliation
        price
        image {
          url(imgixParams: {fm: png, fit: crop, w: 120, h: 120})
        }
      }
    }
  `);

  return allEcommerces.length;
};

export const getProductsByFilter = async (
  minValue: number,
  maxValue: number,
  ratingValue: number
) => {
  const { allEcommerces } = await fetchCmsApi(`
    {
      allEcommerces(filter: { price: { gte: ${minValue} lte: ${maxValue} } avaliation: { gte: ${ratingValue} } }) {
        id
        name
        avaliation
        price
        image {
          url(imgixParams: {fm: png, fit: crop, w: 120, h: 120})
        }
      }
    }
  `);

  return allEcommerces;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllProducts, getAmountProducts, getProductsByFilter };
