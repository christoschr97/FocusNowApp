import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState();

  console.log('subject: ' + subject);

  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={styles.text, styles.paddingTop}> Wanna Focus Dude? </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to Focus On?"
          onChangeText={(text) => setSubject(text)}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: colors.green,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    justifyContent: 'top',
    padding: spacing.lg,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    color: colors.blue,
  },
  paddingTop: {
    paddingTop: spacing.lg,
    textAlign: 'center',
    color: colors.blue,
    fontSize: fontSizes.lg
  }
});
