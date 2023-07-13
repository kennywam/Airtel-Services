import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularservicecard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PopularServiceCard = () => {
  return (

    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={{ uri: item.employer_logo }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularServiceCard