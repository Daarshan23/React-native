import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeaturedCard } from '@/components/Cards';
import Filters from '@/components/Filters';
import { useGlobalContext } from '@/lib/globalProvider';
import { avatar, getLatestProperties, getProperties } from '../../../lib/appwrite';
import { router, useLocalSearchParams } from 'expo-router';
// import seed from '@/lib/seed';
// import filter from '@/assets/icons/filter.png';
import { useAppwrite } from '@/lib/useAppwrite';
import { useEffect } from 'react';
import NoResults from '@/components/NoResults';

export default function explore() {
   
    const params = useLocalSearchParams<{ query?: string; filter?: string }>();

   

    const { data: properties, loading, refetch } = useAppwrite({
        fn: getProperties,
        params: {
            filter: params.filter!,
            query: params.query!,
            limit: 20,
        },
        skip: true,
    })


    const handleCardPress = (id: string) => router.push(`/properties/${id}`)

    useEffect(() => {
        refetch({
            filter: params.filter!,
            query: params.query!,
            limit: 20,
        })
    }, [params.filter, params.query])

    return (
        <SafeAreaView className="bg-white h-full">
            {/* <Button title="Seed" onPress={seed} /> */}
            <FlatList
                data={properties}
                renderItem={({ item }) => (<Card item={item} onPress={() => handleCardPress(item.$id)} />)}
                keyExtractor={(item) => item.$id}
                numColumns={2}
                contentContainerClassName="pb-32"
                columnWrapperClassName="flex gap-5 px-5"
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    loading ? (
                        <ActivityIndicator size='large' className='text-primary-300' />
                    ) : <NoResults />
                }
                ListHeaderComponent={
                    <View className='px-5'>
                      <View>
                        
                      </View>
                      <Search/>
                      <View className='mt-5'>
                        <Filters/>
                        <Text className='text-xl font-bold text-black-300 mt-5'>
                          Found {properties?.length} Properties
                        </Text>
                      </View>
                    </View>
                }
            />
        </SafeAreaView>
    );
}
