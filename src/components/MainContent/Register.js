import React, { useState, useEffect } from 'react';
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
  Alert,
  IconButton,
  CloseIcon,
  Stack,
  Text,
} from 'native-base';
function Register({ navigation }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErroremail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorCpassword, setErrorCPassword] = useState('');
  const statusArray = [
    {
      status: 'success',
      title: 'Successfully Saved!',
    },
    {
      status: 'error',
      title: 'Please try again later!',
    },
    {
      status: 'warning',
      title: 'Poor internet connection.',
    },
  ];
  useEffect(() => {
    if (email.length == 0 || password.length == 0 || confirmPassword == 0) {
      setError(true);
    } else {
      setError(false);
    }
  });
  const submitHandler = async () => {
    setErroremail('');
    setErrorPassword('');
    setErrorCPassword('');
    setError(false);
    setSuccess(false);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setError(true);
      setErroremail('Email is Not Correct');
    }
    if (email.length == 0) {
      setError(true);
      setErroremail('This Field is required.');
    }
    if (password.length == 0) {
      setErrorPassword('This field is required');
      setError(true);
    } else if (password != confirmPassword) {
      setErrorPassword('Password Must be same');
      setErrorCPassword('Password Must be same');
      setError(true);
    }

    if (confirmPassword.length == 0) {
      setErrorCPassword('This field is required');
      setError(true);
    } else if (password != confirmPassword) {
      setErrorPassword('Password Must be same');
      setErrorCPassword('Password Must be same');
      setError(true);
    }
    if (!error) {
      await fetch('http://192.168.29.240:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == 'success') {
            setSuccess(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
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
              {success ? (
                <Alert w="100%" status="success">
                  <HStack space={2} flexShrink={1}>
                    <Alert.Icon mt="1" />
                    <Text fontSize="md" color="coolGray.800">
                      Success
                    </Text>
                  </HStack>
                </Alert>
              ) : (
                ''
              )}

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
