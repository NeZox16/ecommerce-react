import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
function Layout(props) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
}

export default Layout;
