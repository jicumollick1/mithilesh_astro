import React, {useState, useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Images, general} from '../constants';
import WelcomeCard from '../components/WelcomeCard';

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {
        ...styles.page,
        backgroundColor: 'red',
        width: responsiveWidth(4),
      };

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(general.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pagescroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 3 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  const ListFooter = () => {
    return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
  };

  return (
    <LinearGradient colors={['#5FA5F7', '#FFE821']} style={[styles.container]}>
      <SafeAreaView />
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#5FA5F6'}
        translucent
      />

      <View style={styles.welcomeListConatiner}>
        <FlatList
          ref={welcomeList}
          data={general.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode={'never'}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => (
            <WelcomeCard
              {...item}
              list={welcomeList}
              index={welcomeListIndex}
            />
          )}
          ListHeaderComponent={ListFooter}
        />
      </View>

      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          bottom: responsiveWidth(10),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: responsiveWidth(4.5),
          height: responsiveHeight(4),
        }}>
        {welcomeListIndex === 3 ? (
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('WelcomeScreen')}
              style={styles.getBtn}>
              <Text style={styles.getText}>Get Started</Text>

              {/* <Image source={{}} style={styles.longRightArrow} /> */}
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View>
        {/* bottom Image  */}
        <Image source={Images.welcomeBottom} style={styles.welcomeBottom} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: responsiveHeight(1.5),
    width: responsiveHeight(9),
    backgroundColor: 'green',
    borderRadius: responsiveHeight(1),
    marginHorizontal: responsiveWidth(1.3),
  },
  getBtn: {
    
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: responsiveWidth(0.3),
    width: responsiveWidth(85),
    height: responsiveHeight(6.5),
    flexDirection: 'row',
    borderColor: 'yellow',
    backgroundColor: '#2A4FD3',
    borderRadius: 10,
  },
  getText: {
    fontSize: responsiveFontSize(2.5),
    color: '#fff',
  },
  longRightArrow: {
    width: responsiveWidth(7.5),
    height: responsiveWidth(7.5),
    resizeMode: 'contain',
  },
  welcomeBottom: {
    position: 'absolute',
    bottom: 0,
    left: width * -0.44,
    width: width * 0.9,
    height: 100,
  },
});

export default OnboardingScreen;
