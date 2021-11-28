import axios from "axios";

const fetchCmsApi = async (query: any, { variables }: any = {}) => {
  console.log(query, variables, process.env.API_URL, process.env.API_TOKEN);

  const response = await axios.post(
    "https://graphql.datocms.com/",
    JSON.stringify({ query, variables }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${`9b4118dc580ebd5201449e7de2cd6c`}`,
      },
    }
  );

  const { errors, data } = await response.data;

  if (errors) {
    throw new Error("Failed to fetch API");
  }

  return data;
};

export const getAllProducts = async (limit: number = 4, page: number = 0) => {
  const { allEcommerces } = await fetchCmsApi(`
    {
        allEcommerces(first: ${limit} skip: ${page}) {
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
  maxValue: number
) => {
  const { allEcommerces } = await fetchCmsApi(`
        {
            allEcommerces(filter: { price: { gte: ${minValue} lte: ${maxValue} } }) {
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
