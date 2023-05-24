import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { Colors } from '../../constants';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const CallModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure that you want to call us</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: responsiveWidth(4)}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[styles.textStyle, {color: Colors.darkBlue2}]}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}>
                    <Text style={[styles.textStyle, {color: Colors.white}]}>Call Now</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={[styles.textStyle, {color: Colors.white}]}>Call Us</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: responsiveWidth(5),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(1),
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveWidth(5),
    gap: responsiveWidth(5),
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveWidth(3),
  },
  buttonOpen: {
    backgroundColor: Colors.darkBlue2,
    borderRadius: responsiveWidth(1),
  },
  buttonClose: {
    borderColor: Colors.darkBlue2,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(1),
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.5),
    color: Colors.black,
  },
});

export default CallModal;