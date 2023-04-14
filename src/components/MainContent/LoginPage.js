import {
    TouchableOpacity
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Center, NativeBaseProvider, Button, extendTheme, VStack } from "native-base";

export default function LoginPage({ navigation }) {
    const theme = extendTheme({
        colors: {
            
            "purple": {
                "50": "#f7b6da",
                "100": "#ef96c7",
                "200": "#e578b4",
                "300": "#d95da1",
                "400": "#d23d8e",
                "500": "#c03682",
                "600": "#a73875",
                "700": "#903868",
                "800": "#7a375b",
                "900": "#65344f"
            },
            "lightblue":    {
                50: '#d9f9ff',
                100: '#ade7ff',
                200: '#7fd6fd',
                300: '#4fc6fa',
                400: '#21b5f7',
                500: '#089cde',
                600: '#0079ad',
                700: '#00577d',
                800: '#00354e',
                900: '#001320',
            },
              
              
          // Redefining only one shade, rest of the color will remain same.
          amber: {
            400: '#d97706',
          },
        },
        config: {
          // Changing initialColorMode to 'dark'
          initialColorMode: 'dark',
        },
    });
    return (
        <NativeBaseProvider theme={theme}>
            <StatusBar style="auto" />
            <Center flex={1} px="3">
            <VStack space={3} mt="5">
                <TouchableOpacity
                    title="Logins">
                    <Button
                        bg="purple.500"
                        p="4"
                        size="lg"
                        width="full"
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login
                    </Button>
                </TouchableOpacity>
            </VStack>
            <VStack space={3} mt="5">
                <TouchableOpacity 
                    title="Register"
                >
                <Button
                    bg="lightblue.600"
                    p="4"
                    size="lg"
                    width="full"
                    onPress = {() => navigation.navigate('Register')}
                    >
                        Register
                </Button>
                </TouchableOpacity>
            </VStack>
            </Center>
          </NativeBaseProvider>
    );
}