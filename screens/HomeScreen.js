import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
// import { SparklesIcon } from "react-native-heroicons/outline";
// , UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className='pt-5'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
                    <Text className='font-bold text-xl'>Current Location <Ionicons name="md-chevron-down-outline" size={20} color="black" /> </Text>
                </View>
                <Feather name="user" size={35} color="#black" />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb--2 mx-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-2'>
                    <Ionicons name="search" size={20} color="black" />
                    <TextInput placeholder='Restarants and Cuisines' keyboardType='default' />
                </View>
                <Entypo name="sound-mix" size={24} color="00CCBB" />
            </View>

            {/* Body */}

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                className='bg-gray-100'
            >
                {/* Categories */}
                <Categories />

                {/* featured */}
                <FeaturedRow
                    title='Featured'
                    description='Paid placements from our partners'
                    id={1}
                />
                <FeaturedRow
                    title='Discounts'
                    description='Paid placements from our partners'
                    id={2}
                />
                <FeaturedRow
                    title='Deals'
                    description='Paid placements from our partners'
                    id={3}
                />
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen