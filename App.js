import React from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import {NativeModules} from 'react-native';

import GliaBridge from '@trabian/glia-bridge';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  React.useEffect(() => {
    const queueID = 'REPLACE_ME';
    const appToken = 'REPLACE_ME';
    const siteID = 'REPLACE_ME';
    const contextUrl = 'REPLACE_ME';
    GliaBridge.configure(appToken, siteID, queueID, contextUrl);
  });

  const onChatPress = () => {
    const name = 'Test User';
    const email = 'test@trabian.com';
    const phone = '(123)555-5555';
    const note = 'New User';
    const customAttributes = {
      account: '123456789',
      sign: 'Aries',
    };
    GliaBridge.updateVisitorInfo(name, email, note, phone, customAttributes);

    const contextURL = 'REPLACE_ME';
    const companyName = 'REPLACE_ME';
    const queueID = 'REPLACE_ME';
    GliaBridge.launchChat(companyName, contextURL, queueID);
  };

  return (
    <SafeAreaView
      style={isDarkMode ? styles.backgroundStyleDark : styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Image
        source={require('./img/twinstar_background.png')}
        style={styles.backgroundImageStyle}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onChatPress}
        style={styles.touchableOpacityStyle}>
        <Image
          source={require('./img/chat_button.png')}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyleDark: {
    backgroundColor: Colors.darker,
  },
  backgroundStyle: {
    backgroundColor: Colors.lighter,
  },

  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },

  touchableOpacityStyle: {
    position: 'absolute',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: -30,
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
});

export default App;
