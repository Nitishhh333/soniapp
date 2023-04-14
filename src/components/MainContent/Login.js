import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { Forgetpassword } from "./ForgetPassword";
function Login({ navigation }){
    return(
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
              }}> Welcome
              </Heading>
              <Heading mt="1" _dark={{
                color: "warmGray.200"
              }} color="coolGray.600" fontWeight="medium" size="xs">
                  Sign in to continue!
              </Heading>
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Email ID</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" />
                  <Button
                      color= "indigo.500"
                      fontWeight= "medium"
                      fontSize= "xs"
                      variant="ghost"
                      alignSelf="flex-end"
                      p="0"
                      onPress = {() => navigation.navigate('Forget Password')}
                      >
                          Forget Password?
                  </Button>
                </FormControl>
                <Button mt="2" backgroundColor= "#0079ad">
                  Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>
                    I'm a new user.{" "}
                  </Text>
                  
                  <Button
                      color= "indigo.500"
                      fontWeight= "medium"
                      fontSize= "sm"
                      variant="ghost"
                      p="0"
                      onPress = {() => navigation.navigate('Register')}
                      >
                          Register
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Center>
        </Center>
      </NativeBaseProvider>
    );
}
export default Login;