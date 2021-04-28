import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultImc from "./resultimc/index";

import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){

        return setImc((weight/(height*height)).toFixed(2))

    }

    function validatonImc(){

        if(weight != null && height != null){

            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o Peso e a Altura")

    }



    return(
        <View style={styles.formContext}>

            <View style={styles.formContext}>
                <Text style={styles.formLabel}>Altura</Text>
                
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.83"
                    keyboardType="numeric"
                    style={styles.input}
                />
                
                <Text style={styles.formLabel}>Peso</Text>
                
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

        </View>
    );
}