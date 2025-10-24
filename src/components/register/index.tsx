import { Feather } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function Register() {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const canSubmit =
        nome.trim() !== "" &&
        email.trim() !== "" &&
        password.trim() !== "" &&
        confirmPassword.trim() !== "" &&
        !loading;

    const handleRegister = async () => {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 600));

        if (password === confirmPassword) {
            Alert.alert("Sucesso", "Cadastrado com sucesso!");
            router.push("../login");
        } else {
            Alert.alert("Erro", "As senhas não coincidem!");
        }

        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container2}>
                <Text style={styles.title}>Cadastro</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            value={password}
                            secureTextEntry={!showPassword}
                            onChangeText={setPassword}
                        />
                        {/* criando um campo de click para colocar a opção de ocultar senha */}
                        <TouchableOpacity
                            style={styles.showPasswordIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Text>{showPassword ?

                                <Feather name="eye-off" size={20} color="#000000ff" />
                                :

                                <Feather name="eye" size={20} color="#000000ff" />


                            }</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar senha"
                            value={confirmPassword}
                            secureTextEntry={!showConfirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity
                            style={styles.showPasswordIcon}
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            <Text>{showPassword ?

                                <Feather name="eye-off" size={20} color="#000000ff" />
                                :

                                <Feather name="eye" size={20} color="#000000ff" />


                            }</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={[styles.button, !canSubmit && styles.buttonDisabled]}
                        onPress={handleRegister}
                        disabled={!canSubmit}
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
