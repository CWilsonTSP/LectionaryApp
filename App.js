import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, useColorScheme } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Readings } from "./Screens/Readings";
import { Settings } from "./Screens/Settings";
import { Styles } from "./assets/Styles"
// import { Pronunciation } from "./Screens/pronunciation";

const navigationRef = React.createRef();

function ReadingsScreen({ navigation }) {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    showDatePicker();
                }}
            >
                <Text style={{ fontSize: 14, color: "white", margin: 12 }}>DATE</Text>
            </TouchableOpacity>
        ),
    });

    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? Styles.lightThemeText : Styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? Styles.lightContainer : Styles.darkContainer;


    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [initDate, setInitDate] = useState(new Date());
    const [myKey, setMyKey] = useState(1);
    const [lectDate, setLectDate] = useState("");

    const refreshKey = () => setMyKey(myKey + 1);
    const refreshLectDate = (newDate) => {
        setLectDate(newDate);
    };
    const refreshInitDate = (date) => {
        setInitDate(date);
    };
    const showDatePicker = () => {
        setDatePickerVisible(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        let dateString = date.toISOString();
        let year = dateString.substring(2, 4);
        let month = dateString.substring(5, 7);
        let day = dateString.substring(8, 10);
        let newDate = month.concat(day).concat(year);
        refreshInitDate(date);
        refreshLectDate(newDate);
        refreshKey();
        console.log(lectDate);
        hideDatePicker();
    };

    return (
        <ScrollView style={themeContainerStyle}>
            <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" display="inline" date={initDate} onConfirm={handleConfirm} onCancel={hideDatePicker} minimumDate={new Date(2013, 11, 31)} maximumDate={new Date(2022, 12, 31)} />
            <Readings key={myKey} date={lectDate} />
        </ScrollView>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <ScrollView>
            <Settings />
        </ScrollView>
    );
}

const ReadingStack = createStackNavigator();
function ReadingsStackNavigator({ navigation }) {
    return (
        <ReadingStack.Navigator
            screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    // backgroundColor: "#6519ba",
                    backgroundColor: "#ff0018",
                },
            }}
        >
            <ReadingStack.Screen name="Readings" component={ReadingsScreen} options={{ title: "READINGS" }} />
        </ReadingStack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator 
                screenOptions = {{
                    tabBarActiveBackgroundColor: "#111111",
                    tabBarInactiveBackgroundColor: "#333333",
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "white",
                    headerShown: false,
            }}
            >
                <Tab.Screen
                    name="ReadingsScreenNavigator"
                    component={ReadingsStackNavigator}
                    options={{
                        title: "READINGS",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />,
                    }}
                />
                <Tab.Screen
                    name="SettingsScreenNavigator"
                    component={SettingsScreen}
                    options={{
                        title: "SETTINGS",
                        headerShown: true,
                        headerTintColor: "white",
                        headerStyle: {
                            backgroundColor: "#ff0018",
                        },
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cog-outline" color={color} size={size} />,
                    }}
                />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}


export default App;

