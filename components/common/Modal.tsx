import React, { ReactNode } from 'react';
import { Modal as RNModal, StyleSheet, View, TouchableOpacity, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';

interface ModalProps {
    visible: boolean;
    children: ReactNode;
    onRequestClose: (event: GestureResponderEvent) => void;
    backdropStyle?: StyleProp<ViewStyle>;
    modalStyle?: StyleProp<ViewStyle>;
}

const Modal: React.FC<ModalProps> = ({ visible, children, onRequestClose, backdropStyle, modalStyle }) => {
    return (
        <RNModal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onRequestClose}
        >
            <TouchableOpacity
                style={[styles.backdrop, backdropStyle]}
                activeOpacity={1}
                onPress={onRequestClose}
            >
                <View style={[styles.modalContainer, modalStyle]}>
                    {children}
                </View>
            </TouchableOpacity>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default Modal;
