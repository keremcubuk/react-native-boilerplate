/*
 * HelpScreen
 *
 * This is the second thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Image } from 'react-native';

import Animated, { LightSpeedInLeft, LightSpeedInRight, FadeInDown } from 'react-native-reanimated';
import { LearnMoreLinks, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';
import images from 'images';

export default function HelpScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Image source={images.banner} />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Animated.View entering={LightSpeedInLeft.duration(1000).delay(100)} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this screen and then come back to see your
                edits.
              </Text>
            </Animated.View>
            <Animated.View entering={LightSpeedInRight.duration(1000).delay(100)} View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.duration(1000).delay(100)} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </Animated.View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
