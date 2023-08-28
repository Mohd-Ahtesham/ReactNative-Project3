import React, {useCallback, useState} from 'react';
import ColorsFormat from './colorFormat';
import {
  Profile,
  Email,
  Lock,
  CheckBox,
  Eyelash,
  UncheckedBox,
  EyeFill,
} from './Assest/svgs/index';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = useCallback(() => {
    if (!name || !emailError || !password || !confirmPassword) {
      Alert.alert('Please fill out all fields.');
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailError)
    ) {
      Alert.alert('Email is not valid');
    } else if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(
        password,
      )
    ) {
      Alert.alert(
        'Password must contain at least one special character, one number, one uppercase alphabet, and be at least 8 characters long.',
      );
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.');
    } else if (!tick) {
      Alert.alert('Please agree the terms and condition');
    } else {
      setShowModal(true);
    }
  }, [confirmPassword, emailError, name, password, tick]);
  return (
    <View style={styles.container}>
      <Text style={styles.signUp}>SignUp</Text>
      <Text style={styles.carDetail}>Get Your Car Sparkling Clean</Text>
      <View style={styles.input}>
        <Profile />
        <TextInput
          placeholder="User Name"
          style={styles.textInput}
          onChangeText={value => {
            setName(value);
          }}
        />
      </View>
      <View style={styles.input}>
        <Email />
        <TextInput
          placeholder="E mail"
          style={styles.textInput}
          onChangeText={value => {
            setEmailError(value);
          }}
        />
      </View>
      <View style={styles.input}>
        <View style={{flexDirection: 'row'}}>
          <Lock />
          <TextInput
            secureTextEntry={isVisible1}
            placeholder="Password"
            style={styles.textInput}
            onChangeText={value => {
              setPassword(value);
            }}
          />
        </View>
        <View>
          <View style={{position: 'absolute'}}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible1(!isVisible1);
              }}>
              {isVisible1 ? <Eyelash /> : <EyeFill />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <Lock />

        <TextInput
          secureTextEntry={isVisible2}
          placeholder="Confirm Password"
          style={styles.textInput}
          onChangeText={value => {
            setConfirmPassword(value);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setIsVisible2(!isVisible2);
          }}>
          {isVisible2 ? <Eyelash /> : <EyeFill />}
        </TouchableOpacity>
      </View>
      <View style={styles.checkBox}>
        <TouchableOpacity
          style={{padding: 10}}
          activeOpacity={1}
          onPress={() => {
            setIsChecked(!isChecked);
            setTick(!tick);
          }}>
          {isChecked && <CheckBox />}
          {!isChecked && <UncheckedBox />}
        </TouchableOpacity>
        <Text style={styles.agremment}>
          {`I Agree to the Terms and Conditions, 
 Privacy Policy & Medical Disclaimer`}
        </Text>
      </View>
      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalTxt}>
            {name && emailError && confirmPassword && password && (
              <>
                <Text style={{fontSize: 30}}>success</Text>
                <Text>
                  Name: {name}
                  {'\n'}
                  Email: {emailError}
                </Text>
              </>
            )}

            <TouchableOpacity
              style={styles.modalbtn}
              onPress={() => {
                setShowModal(false);
              }}>
              <Text style={{textAlign: 'center'}}>close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.Signups} onPress={handleSignUp}>
        <Text style={{textAlign: 'center', color: ColorsFormat.pink}}>
          SignUp
        </Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', color: ColorsFormat.white}}>
        ___________________________________
      </Text>
      <Text style={styles.orText}>OR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    backgroundColor: ColorsFormat.pink,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  signUp: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 36,
    fontWeight: 'bold',
    color: ColorsFormat.white,
  },
  carDetail: {
    textAlign: 'center',
    marginTop: 19,
    color: ColorsFormat.white,
  },
  input: {
    marginTop: 27,
    flexDirection: 'row',
    height: 47,
    marginHorizontal: 41,
    backgroundColor: ColorsFormat.white,
    padding: 10,
    paddingRight: 40,
    borderRadius: 20,
  },
  textInput: {
    padding: 5,
    paddingLeft: 20,
    width: '90%',
  },
  checkBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  Signups: {
    padding: 10,
    backgroundColor: ColorsFormat.white,
    marginHorizontal: 97,
    borderRadius: 20,
    margin: 20,
  },
  orText: {
    textAlign: 'center',
    color: ColorsFormat.white,
    fontWeight: '400',
    marginTop: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTxt: {
    backgroundColor: ColorsFormat.white,
    padding: 40,
    borderRadius: 20,
  },
  modalbtn: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: ColorsFormat.pink,
    marginTop: 10,
  },
  agremment: {
    lineHeight: 20,
    fontSize: 13,
    color: ColorsFormat.white,
  },
});
export default SignUp;
