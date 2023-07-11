import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'


import styles from './popularservices.style'
import { COLORS, SIZES } from '../../../constants';
import PopularServiceCard from '../../common/cards/popular/PopularServiceCard'
import useFetch from '../../../hooks/useFetch'
const Popularservices = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch(
    'search', {
    query: 'React developer',
    num_pages: 1
  }
  )

  console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Services</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <PopularServiceCard
                item={item}
              />
            )}
            keyExtractor={item => item?.service_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularservices