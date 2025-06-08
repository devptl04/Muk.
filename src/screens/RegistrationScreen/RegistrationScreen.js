import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { auth, db } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import LoadingModal from '../../utils/LoadingModal';  
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onFooterLinkPress = () => {
        navigation.navigate('Login');
    }

    const onRegisterPress = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
    
        setIsLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            const data = {
                id: uid,
                email,
                fullName,
            };
            
            await setDoc(doc(db, 'users', uid), data);
            navigation.navigate('Home', {user: data});
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Muk.</Text>
             <Text style={styles.sub}>Sign up 🌮</Text>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={[styles.contentContainer, { alignItems: 'stretch' }]}
                keyboardShouldPersistTaps="always"
            >
                {/* Full name input field */}

                <LinearGradient
                    colors={['#FFFFFF', '#32CD32']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.inputWrapper}
                >
                    <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                </LinearGradient>
                {/* Email input field */}
                <LinearGradient
                    colors={['#FFFFFF', '#32CD32']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.inputWrapper}
                >
                    <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    />
                </LinearGradient>
                {/* Password input field */}
                <LinearGradient
                    colors={['#FFFFFF', '#32CD32']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.inputWrapper}
                >
                    <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    />
                </LinearGradient>
                {/* Confirm password input field */}
                <LinearGradient
                    colors={['#FFFFFF', '#32CD32']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.inputWrapper}
                >
                    <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    />
                </LinearGradient>
                {/* Register button */}
                <Pressable
                    onPress={onFooterLinkPress}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && { 
                            backgroundColor: 'black',
                            borderWidth: 2,
                            borderColor: '#32CD32', 
                        },
                    ]}
                >
                    <Text style={styles.buttonTitle}>Create account</Text>
                </Pressable>

                {/* Footer link to navigate to the login screen */}
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
            <LoadingModal isVisible={isLoading} />
        </SafeAreaView>
    );
}
