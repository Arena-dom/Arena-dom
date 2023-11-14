import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface NavBarProps {
    title: string;
    onSearch: (text: string) => void;
    onProfilePress: () => void;
    onNotificationsPress: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ title, onSearch, onProfilePress, onNotificationsPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Search"
                    onChangeText={onSearch} 
                />
                <MaterialIcons name="search" size={25} color="grey" />
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={onNotificationsPress}>
                    <MaterialIcons name="notifications" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileIcon} onPress={onProfilePress}>
                    <MaterialIcons name="person" size={25} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        paddingHorizontal: 10,
        flex: 1,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 5,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        marginLeft: 15,
    },
});

export default NavBar;
