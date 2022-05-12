import React from "react";
import { StyleSheet, Text, ScrollView, View, Appearance} from "react-native";
import "react-native-gesture-handler";
import { ListItem } from "@rneui/themed";
import {Styles } from "../assets/Styles";

let colorScheme = Appearance.getColorScheme();
let themeTextStyle = colorScheme === 'light' ? Styles.lightThemeText : Styles.darkThemeText;
let themeContainerStyle = colorScheme === 'light' ? Styles.lightContainer : Styles.darkContainer;
let themeTitleHeadingStyle = colorScheme === 'light' ? Styles.lightTitleHeading : Styles.darkTitleHeading;
let themeListContainerStyle = colorScheme === 'light' ? Styles.lightSettingsListContainer : Styles.darkSettingsListContainer
let themeListTextStyle = colorScheme === 'light' ? Styles.lightSettingsListText : Styles.darkSettingsListText

function Settings() {
    return (
        <ScrollView style={themeContainerStyle}>
            <View>
                <ListItem containerStyle={themeListContainerStyle} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title style={themeListTextStyle}>Colorscheme</ListItem.Title>
                        <ListItem.Subtitle style={themeListTextStyle}>Change the colors of the app</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem containerStyle={themeListContainerStyle} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title style={themeListTextStyle}>Language</ListItem.Title>
                        <ListItem.Subtitle style={themeListTextStyle}>The default language</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem containerStyle={themeListContainerStyle} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title style={themeListTextStyle}>Font Size</ListItem.Title>
                        <ListItem.Subtitle style={themeListTextStyle}>The size of the text</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <Text></Text>
                <Text style={themeTextStyle}>Readings</Text>
                <ListItem containerStyle={themeListContainerStyle} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title style={themeListTextStyle}>Remove Extra Spacing</ListItem.Title>
                        <ListItem.Subtitle style={themeListTextStyle}>Adjusts the whitespace in the daily reading</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <Text></Text>
                <Text style={themeTextStyle}>Catholic App v1.0.0</Text>
                <Text style={themeTextStyle}>Changelog ></Text>
                <Text style={themeTextStyle}>Development Page ></Text>
                <Text style={themeTextStyle}>Copyright Chad Wilson 2021</Text>
            </View>
        </ScrollView>
    );
}

function ColorScheme()
{
    return (
        <ScrollView style={themeContainerStyle}>
            <View>
                <ListItem.Title>Colorscheme</ListItem.Title>
                <ListItem.Subtitle>Change the colors of the app</ListItem.Subtitle>
            </View>
        </ScrollView>

    )
}


export { Settings };

