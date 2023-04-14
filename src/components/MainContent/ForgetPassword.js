import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";

function Forgetpassword({ navigation }){
    return(
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
              }}> Forgot your Password
              </Heading>
              <Heading mt="1" _dark={{
                color: "warmGray.200"
              }} color="coolGray.600" fontWeight="medium" size="xs">
                  Don't Worry! Enter Your email to reset your password
              </Heading>
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Email ID</FormControl.Label>
                  <Input />
                </FormControl>
                
                <Button mt="2" backgroundColor= "#0079ad">
                  Reset Your Password
                </Button>
                <HStack mt="6" justifyContent="center">
                 
                  
                  <Button
                      color= "indigo.500"
                      fontWeight= "medium"
                      fontSize= "sm"
                      variant="ghost"
                      p="0"
                      onPress = {() => navigation.goBack()}
                      >
                        Go Back 
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Center>
        </Center>
      </NativeBaseProvider>
    );
}
export default Forgetpassword;