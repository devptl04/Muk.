import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },

    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#32CD32',
        marginBottom: 10,
        marginTop: 100,
        textAlign: 'center',
        width: '100%',    
    },

    sub: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',  
        width: '100%',
    },

    contentContainer: {
        flexGrow: 1, 
        alignItems: 'center',       // center horizontally
        paddingHorizontal: 30,
        width: '100%',  
    },

    inputWrapper: {
        width: '100%',
        borderRadius: 8,
        padding: 2,            // thickness of the gradient border
        marginVertical: 8,
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

    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'white'
    },
    footerLink: {
        color: "#32CD32",
        fontWeight: "bold",
        fontSize: 16
    }
})
