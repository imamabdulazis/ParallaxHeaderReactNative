import React, { Component } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {
  Dimensions, StyleSheet,
  View, Text, TouchableOpacity, Image,
  Animated
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDHT = Dimensions.get('screen').width;

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const images = {
  background: require('./asset/bg.png'), // Put your own image here
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: new Animated.Value(0)
    }
  }
  renderNavBar = () => {
    return (
      <View style={styles.navContainer}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconRight} onPress={() => { }}>
            <Ionicons name="ios-notifications-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderCard = () => {
    return (
      <Animated.View style={styles.cardShadowWhiteTinyHome}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={styles.imageCard}>
            <Image
              style={styles.imageCard}
              source={require('./asset/user.png')}
            />
          </View>
          <View>
            <Text style={{ fontFamily: 'SFProDisplay-Bold', fontSize: 16 }}>Imam Abdul A</Text>
            <View style={{ padding: 2 }} />
            <Text style={{ color: 'grey', fontFamily: 'SFProDisplay-Regular', fontSize: 14 }}>Programmer</Text>
          </View>
        </View>
      </Animated.View>
    )
  }

  renderContent = () => {
    return (
      <View>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
        <Text>OKE</Text>
      </View>
    )
  }

  renderTitle = () => {
    return (
      <View style={{ width: '100%' }}>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: '#fff' }}>Hello,</Text>
          <Text style={{ color: '#fff', fontSize: 25 }}>Good Moorning</Text>
        </View>
        {this.renderCard()}
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          scrollEventThrottle={5}
          backgroundImage={this.renderCard}
          alwaysShowTitle={true}
          alwaysShowNavBar
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={200}
          extraScrollHeight={20}
          navbarColor="#21C68A"
          statusBarColor="#21C68A"
          title={this.renderTitle()}
          titleStyle={styles.titleStyle}
          backgroundImage={images.background}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardShadowWhiteTinyHome: {
    borderRadius: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: -100,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2
  },
  imageCard: {
    width: SCREEN_WIDHT / 6,
    height: SCREEN_WIDHT / 6,
    backgroundColor: 'transparent',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

