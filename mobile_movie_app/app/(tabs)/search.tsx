import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

const search = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg}/>
      <Text></Text>
    </View>
  )
}

export default search