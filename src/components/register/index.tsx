import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Register() {
    const router = useRouter();
    //Infos de login pré-preenchidas (por enquanto!)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registerError, setRegisterErrorr] = useState("");

    //Verifica se email e senha estão preenchidos
    const canSubmit = email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "" && !loading;

    const handleSignIn = async () => {
        try {
            setLoading(true);
            setRegisterErrorr("");
            //Simulação (sem back-end) só pra validar com os dados pré-preenchidos
            /*Simula uma latência de rede (espera) de 600 milissegundos
            new Promise((r) => setTimeout(r, 600)) cria uma promessa que resolve depois
            de 600 ms; await pausa a função até passar esse tempo*/
            await new Promise((r) => setTimeout(r, 600));

            if (password !== "") {
                Alert.alert("Cadastrado com sucesso!");
            }
            else {
                setRegisterErrorr("E-mail ou senha inválidos!");
            }
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <SafeAreaView>
            {/*Formulario*/}
            <View>
                {/*Email*/}
                <Text>E-mail</Text>
                <TextInput
                    placeholder="exemplo@gmail.com"
                    value={email}
                    onChangeText={setEmail}
                />

                {/*Senha*/}
                <Text>Senha</Text>
                <TextInput
                    placeholder="********"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />

                {/*Confirmar Senha*/}
                <Text>Confirmar Senha</Text>
                <TextInput
                    placeholder="********"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity
                    onPress={handleSignIn}
                    disabled={!canSubmit}
                    style={""}
                    accessibilityLabel="Entrar no aplicativo"
                    >
                    {loading ? (
                        ""
                    ) : (
                        <Text style={""}>Entrar</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}