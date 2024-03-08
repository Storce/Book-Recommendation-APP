import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

//make splash screen visible until hideAsync is called
SplashScreen.preventAutoHideAsync();
//Load fonts (with useFonts)
//function defined for: param#1 async() excecuted when param#2 [fontsloaded] changes (feature of useCallBack)
//On Layout (Stack onLayout=), call the function above
const Layout = () => {
    const [fontsloaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async() => {
        if (fontsloaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsloaded])

    if(!fontsloaded) return null;

    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout;