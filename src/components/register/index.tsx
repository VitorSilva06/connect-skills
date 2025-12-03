import { Feather } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from '../../lib/supabase';
import { styles } from "./styles";

export function Register() {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [showSenha, setShowSenha] = useState(false);
    const [showConfirmar, setShowConfirmar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [erroGlobal, setErroGlobal] = useState("");

    const canSubmit =
        nome.trim() &&
        email.trim() &&
        senha.length >= 6 &&
        confirmarSenha === senha &&
        !loading;

    const handleSignUp = async () => {
        try {
            setLoading(true);
            setErroGlobal("");
            const { data, error } = await supabase.auth.signUp({
                email: email.trim().toLowerCase(),
                password: senha,
                options: {
                    data: { name: nome.trim() }
                },
            });
            if (error) {
                setErroGlobal(error.message || "Falha ao cadastrar. Tente novamente!");
            }
            router.replace("./(auth)/index");
        } catch {
            setErroGlobal("Falha ao tentar cadastrar. Tente novamente.");
        } finally {
            setLoading(false);
        }
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
                            value={senha}
                            secureTextEntry={!setShowSenha}
                            onChangeText={setSenha}
                        />
                        {/* criando um campo de click para colocar a opção de ocultar senha */}
                        <TouchableOpacity
                            style={styles.showPasswordIcon}
                            onPress={() => setShowSenha(!showConfirmar)}
                        >
                            <Text>{showConfirmar ?

                                <Feather name="eye-off" size={20} color="#000000ff" />
                                :

                                <Feather name="eye" size={20} color="#000000ff" />



                            }
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar senha"
                            value={confirmarSenha}
                            secureTextEntry={!showConfirmar}
                            onChangeText={setConfirmarSenha}
                        />
                        <TouchableOpacity
                            style={styles.showPasswordIcon}
                            onPress={() => setShowConfirmar(!showConfirmar)}
                        >
                            <Text>{showConfirmar ?

                                <Feather name="eye-off" size={20} color="#000000ff" />
                                :

                                <Feather name="eye" size={20} color="#000000ff" />


                            }</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={[styles.button, !canSubmit && styles.buttonDisabled]}
                        onPress={handleSignUp}
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
''