import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultImc from "../resultimc"

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
        <View>
            <Text>Altura</Text>
            
            <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.83"
                keyboardType="numeric"
            />
            
            <Text>Peso</Text>
            
            <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 99.999"
                keyboardType="numeric"
            />

            <Button
                onPress={() => validatonImc()}
                title={textButton}
            />

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}