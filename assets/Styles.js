import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    lightSettingsListContainer: {
        backgroundColor: "#fff",
    },
    darkSettingsListContainer: {
        backgroundColor: "#222",
        color: "#dddddd",
    },
    lightSettingsListText: {
        color: "#555555",
    },
    darkSettingsListText: {
        color: "#dddddd",
    },
    lightContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        paddingBottom: 20,
    },
    darkContainer: {
        flex: 1,
        backgroundColor: "#222",
        paddingTop: 20,
        paddingBottom: 20,
    },
    splash: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 20,
    },
    lightThemeText: {
        fontSize: 14,
        // fontStyle:'italic',
        color: "#555555",
        padding: 15,
        paddingTop: 5,
    },
    darkThemeText: {
        fontSize: 14,
        // fontStyle:'italic',
        color: "#dddddd",
        padding: 15,
        paddingTop: 5,
    },
    verse: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
        marginLeft: "auto",
        textTransform: "uppercase",
    },
    heading: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
    },
    lightTitleHeading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "#555555",
        textTransform: "uppercase",
    },
    darkTitleHeading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
    },
    headerBar: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#555555",
        padding: 16,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: "center",
        justifyContent: "space-around",
    },
    separator: {
        marginTop: 15,
    },
});

export { Styles };
