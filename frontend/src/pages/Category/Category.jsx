import React from 'react'
import Main from '../../components/layers/Main/Main';
import styles from '../../components/layers/Main/Main.module.sass'
import Section from '../../components/ui/section/Section';
import Shop from '../../components/Shop'
import Layout from '../../components/layers/Layout/Layout';

function Category() {
  return (
    <>
      <Layout>
            <Section>
                <Shop/>
            </Section>
      </Layout>
    </>
  )
}

export default Category;