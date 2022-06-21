import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({history}) => {

  if(!history || !history.length) return <Text style={styles.notFocused}>{`We haven't focus on anything yet`}</Text>;

  const renderItem = ({item}) => {
    return <Text style={styles.item}> - {item}</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Things we have focused on.
      </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.blue,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.blue,
    fontSize: fontSizes.md,
    textAlign: 'center',
    padding: spacing.md,
    fontWeight: 'bold',
  },
  notFocused: {
    textAlign: 'center',
    fontSize: spacing.lg
  }
})