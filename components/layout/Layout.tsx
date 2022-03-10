import { PropsWithChildren } from "react";
import Header from "./Header";
import Main from "./Main";

type LayoutProps = PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
