import React from "react";
import styles from "../../components/layers/Main/Main.module.sass";
import { Layout, Section, Shop } from "../../components";

function Category() {
  return (
    <>
      <Layout>
        <Section>
          <Shop />
        </Section>
      </Layout>
    </>
  );
}

export default Category;
