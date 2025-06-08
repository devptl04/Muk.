import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },

    contentContainer: {
        flexGrow: 1, 
        alignItems: 'center',       // center horizontally
        paddingHorizontal: 30,
        width: '100%',  
    },

    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#32CD32',
        marginBottom: 10,
        marginTop: 120,
    },

    sub: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30
    },

    inputWrapper: {
        width: '100%',
        borderRadius: 8,
        padding: 2,            // thickness of the gradient border
        marginVertical: 10,
      },
    
    input: {
        backgroundColor: 'black',
        height: 48,
        borderRadius: 6,       // slightly smaller than wrapper so the gradient shows
        paddingHorizontal: 16,
        color: 'white',
    },
    
    button: {
        backgroundColor: '#32CD32',
        marginTop: 20,
        height: 48,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },

    forgotContainer: {
        marginTop: 20,
        alignItems: 'center',
      },

    forgotText: {
        color: '#32CD32',
        fontSize: 15,
    },

    createAccountButton: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#32CD32',
        borderRadius: 6,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },

    createAccountButtonPressed: {
        backgroundColor: '#32CD32',
    },

    createAccountText: {
        color: '#32CD32',
        fontSize: 16,
        fontWeight: 'bold',
    },

    createAccountTextPressed: {
        color: 'white',
    },
})
