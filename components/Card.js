import React from "react";
import { StyleSheet, View } from "react-native";

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}


const styles = StyleSheet.create({
    card:{
        padding: 20,
        alignItems: "center",
        marginVertical: 10,
        width:"80%",
        borderRadius: 5,
        shadowColor: "black",
        backgroundColor: "white",
        shadowOpacity : 0.26
    }
})
export default Card;