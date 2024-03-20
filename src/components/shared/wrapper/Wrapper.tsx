import { Header } from "@components/index";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: IProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Wrapper;
