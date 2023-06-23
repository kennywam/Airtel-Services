import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";

import React from 'react'
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants'

const services = ['Airtel-Money', 'Airtel-Data', 'Custormer care']
const Welcome = () => {
  const router = useRouter()
  const [activeService, setActiveService] = useState('Airtel-Money')
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Kennedy</Text>
        <Text style={styles.welcomeMessage}>Welcome to Airtel Services</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={services}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeService, item)}
              onPress={() => {
                setActiveService(item)
                router.push('/search/${item}')
              }}
            >
              <Text style = {styles.tabText(activeService)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </>

  )
}

export default Welcome