import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMoviesDetails } from '@/services/api';

const MoviesDetails = () => {
    const { id } = useLocalSearchParams();

    const { data: movie, loading } = useFetch(() =>
        fetchMoviesDetails(id as string),
    );

    return (
        <View className="bg-primary flex-1">
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 80,
                }}
            >
                <View>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
                        }}
                        className="w-full h-[550px]"
                        resizeMode='stretch'
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default MoviesDetails;
