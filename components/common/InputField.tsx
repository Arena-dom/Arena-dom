import React from 'react';
import { TextInput, TextInputProps, StyleSheet, ViewStyle } from 'react-native';

interface InputFieldProps extends TextInputProps {
    style?: ViewStyle;
}

const InputField: React.FC<InputFieldProps> = ({ style, ...rest }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
});

export default InputField;
