import React, { Component } from "react";
import { Text, ScrollView, View, ActivityIndicator, Appearance } from "react-native";
import "react-native-gesture-handler";

import { Styles } from "../assets/Styles"

let colorScheme = Appearance.getColorScheme();
let themeTextStyle = colorScheme === 'light' ? Styles.lightThemeText : Styles.darkThemeText;
let themeContainerStyle = colorScheme === 'light' ? Styles.lightContainer : Styles.darkContainer;
let themeTitleHeadingStyle = colorScheme === 'light' ? Styles.lightTitleHeading : Styles.darkTitleHeading;

class Readings extends Component {


    _isMounted = false;
    _date = "";
    _isGood = true;


    constructor(props) {
        super();
        this.state = { data: [] };
        this._date = props.date;
        console.log("recieved props: ", props.date);
    }

    getReadings() {
        let fetchString = "https://lectionary-readings-api.herokuapp.com/";
        console.log("Readings mounting");
        console.log("had props: ", this.props.date);
        if (this.props.date) {
            fetchString = fetchString.concat("?date=");
            fetchString = fetchString.concat(this.props.date);
            console.log(fetchString);
        }
        fetch(fetchString)
            .then((res) => res.json())
            .catch((error) => {
                console.log(error);
                this._isGood = false;
            })
            .then((json) => this.setState({ data: json }), (this._isGood = true));
    }

    componentDidMount() {
        this._isMounted = true;
        this.getReadings();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    // componentDidUpdate(){
    //     console.log("Readings.js -- Component did update");
    //     this.getReadings();
    // }

    render() {
        if (this._isMounted == false) {
            return (
                <View style={Styles.splash}>
                    <ActivityIndicator size="large" />
                </View>
            );
        } else if (this._isGood == false) {
            return <Text>Something went wrong :(</Text>;
        } else {
            // console.log(typeof(this.state.data.readings));

            const list = () => {
                return this.state.data.readings.map((data, key) => {
                    // console.log(key);
                    // console.log(this.state.data.readings.length);
                    // XXX handle key being 0-4
                    return (
                        <View>
                            <View style={Styles.headerBar}>
                                <Text style={Styles.heading}>{data.title}</Text>
                                <Text style={Styles.verse}>{data.verse}</Text>
                            </View>
                            <View style={themeContainerStyle}>
                                <Text style={themeTextStyle} key={key}>
                                    {data.text}
                                </Text>
                            </View>
                        </View>
                    );

                });
            };

            return (
                <ScrollView style={themeContainerStyle}>
                    {/* <View style={{ padding: 20, paddingTop: 30, paddingBottom: 30, color: "6519ba" }}> */}
                    {/* <View style={{ padding: 20, paddingTop: 30, paddingBottom: 30 }}> */}
                    <View style={{ paddingTop:30, padding: 20, paddingBottom: 30 }}>
                        <Text style={themeTitleHeadingStyle}>{this.state.data.title}</Text>
                        <Text style={themeTitleHeadingStyle}>{this.state.data.lectionary}</Text>
                    </View>
                    <View></View>
                    <View>{list()}</View>
                </ScrollView>
            );
        }
    }
}


export { Readings };

