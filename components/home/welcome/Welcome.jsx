import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";

import React from 'react'
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter()
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.userName}>Hello Kennedy</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style = {styles.searchBtn} onPress={() => {}}> 
          <Image
            source={icons.search}
            resizeMode='contain'
            style ={styles.searchBtnImage}
          />
        </TouchableOpacity>

      </View>
    </>

  )
}

export default Welcome