import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container:{
        borderRadius: 10,
        padding: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    avatar:{
        width: 70,
        height: 70,
        borderRadius: "50%",
    },

    header: {
        flexDirection: "row",
    },
    social: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
    texts: {
        flexDirection: "row",
        paddingLeft: 15,
    },
})