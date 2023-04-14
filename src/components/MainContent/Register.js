import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from 'native-base';

function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErroremail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorCpassword, setErrorCPassword] = useState('');
  // const password = useRef(null);
  const submitHandler = () => {
    let error = false;

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setErroremail('Email is Not Correct');
      error = true;
    }
    if (errorEmail.length == 0) {
      setErroremail('This field is required');
      error = true;
    }

    if (password.length == 0) {
      setErrorPassword('This field is required');
      error = true;
    } else if (password != confirmPassword) {
      setErrorPassword('Password Must be same');
      setErrorCPassword('Password Must be same');
      error = true;
    }

    if (confirmPassword.length == 0) {
      setErrorCPassword('This field is required');
      error = true;
    } else if (password != confirmPassword) {
      setErrorPassword('Password Must be same');
      setErrorCPassword('Password Must be same');
      error = true;
    }

    if (error == false) {
      setErrorPassword('');
      setErrorCPassword('');
      setErroremail('');
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
              size="lg"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
              fontWeight="semibold">
              Welcome
            </Heading>
            <Heading
              mt="1"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="medium"
              size="xs">
              Sign up to continue!
            </Heading>
            <VStack space={3} mt="5">
              <FormControl isRequired isInvalid={errorEmail.length}>
                <FormControl.Label>Email</FormControl.Label>
                <Input value={email} type="email" onChangeText={setEmail} />
                <FormControl.ErrorMessage>{errorEmail}</FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errorPassword.length}>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" onChangeText={setPassword} />
                <FormControl.ErrorMessage>{errorPassword}</FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errorCpassword.length}>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" onChangeText={setConfirmPassword} />
                <FormControl.ErrorMessage>{errorCpassword}</FormControl.ErrorMessage>
              </FormControl>
              <Button mt="2" color="#0079ad" onPress={submitHandler}>
                Sign up
              </Button>
              <HStack mt="6" justifyContent="center">
                <Button
                  color="indigo.500"
                  fontWeight="medium"
                  fontSize="sm"
                  variant="ghost"
                  p="0"
                  onPress={() => navigation.goBack()}>
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
export default Register;
