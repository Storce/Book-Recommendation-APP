import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import gpt_call from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = gpt_call('book')
  //State for isLoading and error in loading
  //Title with flexDirection = 'row'
  //Loading cards: Loading or Error or display Flatlist
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Jobs
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.cardsContainer}>
        {isLoading? (
            <ActivityIndicator size='large' colors={COLORS.primary}/>
        ) : error? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={[1, 2, 3, 4]}
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs