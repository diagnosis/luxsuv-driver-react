import axios from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/api";
import { Alert, Button, Text, TextInput, View, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginMutation = useMutation({
        mutationFn: (credentials) => login(credentials),
        onSuccess: async (data) => {
            Alert.alert("Login Successful!");
        },
        onError: (error) => {
            Alert.alert("Error", error.response?.data?.message || "Login failed");
        },
    });

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert("Error", "Please enter both username and password");
            return;
        }
        loginMutation.mutate({ username, password });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Driver Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title="Login"
                onPress={handleLogin}
                disabled={loginMutation.isPending}
            />
            {loginMutation.isPending && <Text style={styles.loading}>Loading...</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
        color: "#333",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    loading: {
        marginTop: 10,
        textAlign: "center",
        color: "#666",
    },
});