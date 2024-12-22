import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Herosection from './components/herosection/Herosection'
import Support from './components/support/Support'
import Collection from './components/collection/Collection'
import Productsec from './components/productsec/ProductSection'

const Home = () => {
  return (
    <Layout>
        <Herosection/>
        <Support/>
        <Collection/>
        <Productsec/>
    </Layout>
  )
}

export default Home