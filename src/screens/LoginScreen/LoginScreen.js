import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { auth, db } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import LoadingModal from '../../utils/LoadingModal';  
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    }

    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPassword');  // your forgot screen
      };

    const onLoginPress = async () => {
        setIsLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            
            const userDoc = await getDoc(doc(db, 'users', uid));
            
            if (!userDoc.exists()) {
                alert("User does not exist anymore.");
                return;
            }
            const userData = userDoc.data();
            await AsyncStorage.setItem('user', JSON.stringify(userData));  // Save user data
            navigation.navigate('Home', {user: userData});
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Muk.</Text>
            <Text style={styles.sub}>welcome 🍕</Text>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={[styles.contentContainer, { alignItems: 'stretch' }]}
                keyboardShouldPersistTaps="always"
            >
                {/* Email input field */}
                <LinearGradient
                    colors={['#FFFFFF', '#32CD32']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.inputWrapper}
                    >
                    <TextInput
                        style={[styles.input]}
                        placeholder="E-mail"
                        placeholderTextColor="#cccccc"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />
                </LinearGradient>
                {/* Password input field */}
                <LinearGradient
                    colors={['#FFFFF1', '#32CD32']}
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
                {/* Login button */}
                <Pressable
                    onPress={onLoginPress}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && { 
                            backgroundColor: 'black',
                            borderWidth: 2,
                            borderColor: '#32CD32', 
                        }  
                    ]}
                >
                    <Text style={styles.buttonTitle}>Log in</Text>
                </Pressable>
                
                <TouchableOpacity onPress={onForgotPasswordPress} style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>

            {/* add onpress styling */}
            <Pressable
                onPress={onFooterLinkPress}
                style={({ pressed }) => [
                    styles.createAccountButton,
                    pressed && styles.createAccountButtonPressed
                ]}
                >
                {({ pressed }) => (
                    <Text
                    style={[
                        styles.createAccountText,
                        pressed && styles.createAccountTextPressed
                    ]}
                    >
                    Create New Account
                    </Text>
                )}
            </Pressable>
            <LoadingModal isVisible={isLoading} />
        </SafeAreaView>
    );
}

// Namespace SDK
// const onLoginPress = () => {
//     firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then((response) => {
//             const uid = response.user.uid
//             const usersRef = firebase.firestore().collection('users')
//             usersRef
//                 .doc(uid)
//                 .get()
//                 .then(firestoreDocument => {
//                     if (!firestoreDocument.exists) {
//                         alert("User does not exist anymore.")
//                         return;
//                     }
//                     const user = firestoreDocument.data()
//                     navigation.navigate('Home', {user})
//                 })
//                 .catch(error => {
//                     alert(error)
//                 });
//         })
//         .catch(error => {
//             alert(error)
//         })
// }