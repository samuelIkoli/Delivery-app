import { View, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import React from 'react'

export default function FeaturedRow({ id, title, description }) {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <AntDesign name="arrowright" size={24} color="black" />
            </View>
            <Text className='text-gray-500 text-xs px-4'>{description}</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                }}
            >
                {/* RestaurantCards     */}
                <RestaurantCard
                    id={123}
                    imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/chicken.png'
                    title='wings'
                    rating={4.5}
                    genre='Negro'
                    address='123 Main Street'
                    short_description='This is a test description'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/chicken.png'
                    title='wings'
                    rating={4.5}
                    genre='Negro'
                    address='123 Main Street'
                    short_description='This is a test description'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl='https://cache.dominos.com/olo/6_92_4/assets/build/market/NG/_en/images/img/entree-page/chicken.png'
                    title='wings'
                    rating={4.5}
                    genre='Negro'
                    address='123 Main Street'
                    short_description='This is a test description'
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>
        </View>
    )
}