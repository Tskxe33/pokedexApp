import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fonts} from '../../constants/Fonts';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../redux/actions/UsersAction';
import {SET_MODAL_VISIBLE} from '../../redux/actions/actionTypes/usersActionTypes';
import {RootState} from '../../redux/reducers';

interface NAPopupProps {
  title: string;
}

const NAPopup: React.FC<NAPopupProps> = ({title}) => {
  const dispatch = useDispatch<any>();
  const modalVisible = useSelector(
    (state: RootState) => state.users.setModalVisible,
  );
  const handleLogout = () => {
    dispatch(signOut());
    handleCloseModal();
  };

  const handleCloseModal = () => {
    dispatch({
      type: SET_MODAL_VISIBLE,
      payload: false,
    });
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={handleCloseModal}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.cotentContainer}>
          <Text style={styles.modalHeading}>{title}</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCloseModal}>
              <Text style={{...styles.buttonText, color: Colors.COLOR_PRIMARY}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}>
              <Text style={{...styles.buttonText, color: Colors.COLOR_WHITE}}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default NAPopup;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_MODAL,
    paddingHorizontal: 30,
  },

  cotentContainer: {
    backgroundColor: Colors.COLOR_WHITE,
    width: '100%',
    height: '40%',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  modalHeading: {
    fontFamily: Fonts.ROBOTO_BOLD,
    fontSize: 18,
    textAlign: 'center',
    width: '60%',
    color: Colors.COLOR_BLACK,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },

  cancelButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.COLOR_PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  logoutButton: {
    backgroundColor: Colors.COLOR_PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 4,
  },

  buttonText: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 16,
  },
});
