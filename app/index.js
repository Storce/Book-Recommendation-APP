import { useState } from "react";
import { View, ScrollView, SafeAreaView, TurboModuleRegistry, Dimensions, } from "react-native";
import { Stack, useRouter } from "expo-router";
import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {
    const router = useRouter(); // For routing
    //Safe Area = size adjustment, Stack.Screen = navigation    
    //Scroll view vs view

    return (
        <SafeAreaView style={{flex: 1, bakcgroundColor: COLORS.lightWhite}}>   
            <Stack.Screen 
                options={{headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: true,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension = '60%' />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension = '100%' />
                ),
                headerTitle: 'Stack.Screen Header!'
            }}
            />

            <ScrollView showsVerticalScrollIndicator={true}>
                <View
                    style= {{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome/>

                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;