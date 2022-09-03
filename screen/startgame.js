import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button,
     TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";


const Startgame = (props) => {

    const [enteredtext, setEnteredtext] = useState('');
    const [confirmed, setConfirmed] =useState(false)
    const[selected, setSelected] =useState();
    const numberInput = Inputtext => {
        setEnteredtext(Inputtext.replace(/[^0-9]/g, " "))
    }

        const resetInput = () => {
            setEnteredtext("")
            setConfirmed(false)
        }

        const confirmInput = () => {
            const chosenNumber = parseInt(enteredtext)
            if (isNaN(chosenNumber) ||chosenNumber === NaN || chosenNumber<=0 || chosenNumber> 99){
                Alert.alert("Invalid number!", "Number has to be a number between 1 and 99", [{text: "Okay" , style: "destructive", onPress: resetInput}])
                return;
            }
            setConfirmed(true)
            setSelected(chosenNumber)
            setEnteredtext("")
            Keyboard.dismiss()
        }

            let confirmedOutput;
        if (confirmed) {
            confirmedOutput =  <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
               <NumberContainer>
                {selected}
               </NumberContainer>
               <Button title="START GAME" />
                </Card>
        }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text>{props.word}</Text>
            <Card style={styles.inputcontainer}>
                <Text style={styles.select}>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} 
                onChangeText={numberInput} value={enteredtext}/>
                <View style={styles.buttontwo}>
                    <Button title="Reset" color={colors.accent} onPress={resetInput}/>
                    <Button title="Confirm" color={colors.primary} onPress={confirmInput}/>
                </View>
                </Card>
                {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    inputcontainer: {
        padding: 20,
        alignItems: "center",
        marginVertical: 10,
        width:"80%"
    },
    select : {
        fontSize: 15
    },
    inputbar: {
        width: "80%",
        border: "1px solid black"
    },
    buttontwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems:"center"
    },
    input:{
        width: 50,
        textAlign:"center"
    },
    summaryContainer:{
        marginTop: 20
    }
})

export default Startgame;