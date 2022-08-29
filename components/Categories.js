import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import React from 'react'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    >
        <CategoryCard imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/build.png' title='Order' />
        <CategoryCard imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/build.png' title='Order'   />
        <CategoryCard imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/build.png' title='Order' />
        <CategoryCard imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/build.png' title='Order' />
        <CategoryCard imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/build.png' title='Order' />
        <CategoryCard imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/build.png' title='Order' />
    </ScrollView>
  )
}

export default Categories