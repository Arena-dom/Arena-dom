import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';

// Define types for button props
interface CustomButtonProps {
    title: string;
    onPress: () => void;
    color?: 'primary' | 'secondary' | 'outlined' | 'textButton';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactNode; // Use ReactNode for components
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const ClassicButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    color = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    icon = null,
    style = {},
    textStyle = {},
}) => {
    const buttonStyles = [
        styles.button,
        sizeStyles[size],
        colorStyles[color],
        disabled || loading ? styles.disabled : {},
        style,
    ];
    const textStyles = [styles.text, textStyle];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress} disabled={disabled || loading}>
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <View style={styles.content}>
                    {icon}
                    <Text style={textStyles}>{title}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

// Define styles
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 4,
    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabled: {
        opacity: 0.5,
    },
});

const sizeStyles = StyleSheet.create({
    small: { paddingVertical: 8 },
    medium: { paddingVertical: 10 },
    large: { paddingVertical: 12 },
});

const colorStyles = StyleSheet.create({
    primary: { backgroundColor: '#004aad' },
    secondary: { backgroundColor: '#ff5733' },
    outlined: { backgroundColor: 'transparent', borderColor: '#004aad', borderWidth: 1 },
    textButton: { backgroundColor: 'transparent' },
});

export default ClassicButton;
