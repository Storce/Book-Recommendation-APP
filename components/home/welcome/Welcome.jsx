import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

//For flatlist
const jobTypes = ['Full-time', 'Part-time', 'Freelance', 'Internship', 'Temporary',
'Contract', 'Commission', 'Volunteer'] 

const Welcome = () => {
  const router = useRouter()
  //Keeps record of the current job type selected
  const [activeJobtype, setactiveJobtype] = useState('Full-time')
  return (
    //Welcome View Block -> Search Block -> Flatlist
    //Search block icon on right as "flexDirection" of styles.searchContainter is 'row'
    //Flatlist renders list of items, styles.tab: conditional styling based
    //OnPress: change useState => change item tab styling
    //router.push: navigation
    //Flatlist:: keyExtractor: add unique key to each item, horizontal: ., content gap
    <View>
      <View style = {styles.container}>
          <Text style={styles.userName}>Hi Joseph</Text>
          <Text style={styles.welcomeMessage}>Welcome!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='Type something in the search bar!'
            
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain' 
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

    <View style={styles.tabsContainer}>
      <FlatList
        data={jobTypes}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.tab(activeJobtype, item)}
            onPress={() => {
              setactiveJobtype(item);
              router.push(`/search/${item}`)
            }}
          >
            <Text style={styles.tabText(activeJobtype, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
      />
    </View>


    </View>
  )
}

export default Welcome