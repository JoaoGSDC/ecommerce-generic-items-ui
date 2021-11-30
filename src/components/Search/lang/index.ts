import en from "./en";
import ptBr from "./pt-br";

const useLanguage = (type: string) => {
  const language = {
    en() {
      return en;
    },
    ptBr() {
      return ptBr;
    },
  };

  // @ts-ignore: Unreachable code error
  return language[type];
};

export default useLanguage;
