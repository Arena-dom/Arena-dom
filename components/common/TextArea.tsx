import React, { useState, useEffect } from 'react';
import { TextInput, TextInputProps, StyleSheet, ViewStyle } from 'react-native';

interface TextAreaProps extends TextInputProps {
    style?: ViewStyle;
    maxHeight?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ style, maxHeight = 120, ...rest }) => {
    const [height, setHeight] = useState(0);

    const handleContentSizeChange = (event: any) => {
        setHeight(event.nativeEvent.contentSize.height);
    };

    return (
        <TextInput
            style={[styles.textArea, style, { height: Math.min(maxHeight, Math.max(40, height)) }]}
            multiline
            onContentSizeChange={handleContentSizeChange}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    textArea: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
});

export default TextArea;
