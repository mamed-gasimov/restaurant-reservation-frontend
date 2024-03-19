import { Header } from "@components/index";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
