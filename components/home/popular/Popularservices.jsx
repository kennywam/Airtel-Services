import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'


import styles from './popularservices.style'
import { COLORS, SIZES } from '../../../constants';
import PopularServiceCard from '../../common/cards/popular/PopularServiceCard'
const Popularservices = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Popular Services</Text>
    </View>
  )
}

export default Popularservices