import React, {useState} from "react"
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
} from "react-native"
import ResultImc from "./resultimc/index";

import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator(){

        let heightFormat = height.replace(",", ".")

        let weightFormat = weight.replace(",", ".")

        return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2))

    }

    function verificationImc(){

        if(imc == null){

            Vibration.vibrate();
            
            setErrorMessage ("campo obrigatório*")
        }
    }

    function validatonImc(){

        if(weight != null && height != null){

            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o Peso e a Altura")

    }

    return(
        <Pressable 
            onPress={Keyboard.dismiss} 
            style={styles.formContext}
        >

            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>

                <Text style={styles.errorMessage}>{errorMessage}</Text>
                
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.83"
                    keyboardType="numeric"
                    style={styles.input}
                />
                
                <Text style={styles.formLabel}>Peso</Text>

                <Text style={styles.errorMessage}>{errorMessage}</Text>
                
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 99.999"
                    keyboardType="numeric"
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={() => validatonImc()}
                    style={styles.buttonCalculator}
                >

                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                    
                </TouchableOpacity>

                <ResultImc messageResultImc={messageImc} resultImc={imc}/>

            </View>

        </Pressable>
    );
}