import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1); //100% of the time will go backwards
  const [minutes, setMinutes] = useState(0.1); 

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.subjectStyle}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={progress}
          style={styles.progressBar}
          color={colors.progressBar}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton size={50} title="-" onPress={() => clearSubject()}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center', 
    // backgroundColor: 'yellow' //just to see background
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectStyle: {
    flex: 0.1,
    paddingTop: spacing.xxl,
  },
  title: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.blue,
    textAlign: 'center',
  },
  task: {
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  progressBarContainer: {
    paddingTop: spacing.sm,
  },
  progressBar: {
    color: colors.progressBar,
    height: spacing.sm,
  },
  heading2: {
    textAlign: 'center'
  },
  clearSubject: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  }
});
