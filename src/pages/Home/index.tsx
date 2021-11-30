import React, { useEffect, useState } from "react";
import CardItem from "../../components/CardItem";
import CartButton from "../../components/CartButton";
import FilterMenu from "../../components/FilterMenu";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Select from "../../components/Select";
import {
  CartButtonContainer,
  ContainerFilters,
  ContainerItems,
  ContainerPagination,
  FilterButton,
  ContainerItemsMain,
} from "./styles";
import {
  getAllProducts,
  getAmountProducts,
  getProductsByFilter,
} from "../../lib/dato-cms";
import { IProductsDTO } from "../../interfaces/IProductsDTO";
import { useSelector } from "react-redux";
import useLanguage from "./lang";

const Home = () => {
  const langOption: string = useSelector((state: any) => state.langOption);
  const language = useLanguage(langOption)();

  const { innerWidth } = window;

  const minPriceFilter: number = useSelector(
    (state: any) => state.minPriceFilter
  );

  const maxPriceFilter: number = useSelector(
    (state: any) => state.maxPriceFilter
  );

  const ratingFilter: number = useSelector((state: any) => state.ratingFilter);

  const [openFilterMenu, setOpenFilterMenu] = useState<boolean>(
    innerWidth > 600
  );

  const [selectedOptionOfSortBy, setSelectedOptionOfSortBy] =
    useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [products, setProducts] = useState<IProductsDTO[]>(
    [] as IProductsDTO[]
  );

  const [productsAux, setProductsAux] = useState<IProductsDTO[]>(
    [] as IProductsDTO[]
  );
  const [amountProducts, setAmountProducts] = useState<number>(0);

  const postsPerPage: number = innerWidth > 600 ? 6 : 4;

  useEffect(() => {
    const handleProducts = async () => {
      const optionIndex =
        selectedOptionOfSortBy !== ""
          ? language.optionsSortBy.findIndex(
              (option: string) => option === selectedOptionOfSortBy
            )
          : 0;

      const options = [
        "avaliation_DESC",
        "name_ASC",
        "price_DESC",
        "price_ASC",
      ];

      const page = currentPage * postsPerPage;
      const lengthProducts = await getAmountProducts();
      const productsFetch = await getAllProducts(
        postsPerPage,
        page,
        options[optionIndex]
      );

      setAmountProducts(lengthProducts);
      setProducts(productsFetch);
      setProductsAux(productsFetch);
    };

    handleProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, selectedOptionOfSortBy, innerWidth]);

  const paginate = (pageNum: number) => setCurrentPage(pageNum);
  const nextPage = () =>
    setCurrentPage((currentPageAction) => currentPageAction + 1);
  const prevPage = () =>
    setCurrentPage((currentPageAction) => currentPageAction - 1);

  const filterBySearchInput = (value: string) => {
    if (value === "") {
      setProducts(productsAux);

      return;
    }

    const productsFilter = products.filter((product: IProductsDTO) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(productsFilter);
  };

  useEffect(() => {
    if (openFilterMenu) {
      return;
    }

    const handleProductsByFilter = async () => {
      if (minPriceFilter === -1) {
        setProducts(productsAux);

        return;
      }

      const productsFetch = await getProductsByFilter(
        minPriceFilter,
        maxPriceFilter,
        ratingFilter
      );

      setProducts(productsFetch);
      setOpenFilterMenu(true);
    };

    handleProductsByFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openFilterMenu]);

  return (
    <>
      <Header
        onChangeSearchValue={(value: string) => filterBySearchInput(value)}
      />

      <FilterMenu
        isOpen={openFilterMenu}
        onClose={(value: boolean) => setOpenFilterMenu(value)}
      />

      <ContainerFilters>
        <Select
          data={language.optionsSortBy}
          onSelect={(value: string) => setSelectedOptionOfSortBy(value)}
        />

        <FilterButton type="button" onClick={() => setOpenFilterMenu(true)}>
          {language.filter}
        </FilterButton>
      </ContainerFilters>

      <ContainerItemsMain>
        <ContainerItems>
          {products.map((product: IProductsDTO) => (
            <CardItem key={product.id} product={product} />
          ))}
        </ContainerItems>
      </ContainerItemsMain>

      <ContainerPagination>
        <Pagination
          currentPage={currentPage + 1}
          postPerPage={postsPerPage}
          totalPosts={amountProducts}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </ContainerPagination>

      <CartButtonContainer>
        <CartButton />
      </CartButtonContainer>
    </>
  );
};

export default Home;
