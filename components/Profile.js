import React from 'react';
import {View, StyleSheet,SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import EditProfile from './EditProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const ProfileScreen = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
               <View style={{flexDirection:'row', marginTop: 15}}>
                 <Avatar.Image
                  source={{
                    uri:'https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg',
                  }}
                  size={80}
                  />
                  <View style={{marginLeft:20}}>
                    <Title style={[styles.title,{
                      marginTop: 10,
                      marginBotton:5,
                    }]}>User Name</Title>
                    <Caption style={styles.caption}>Profile</Caption>
                  </View>
               </View>
            </View>
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
              <Ionicons name='location-outline' size={20} color='#777777' />
              <Text style={{color:'#777777', marginLeft:15}}>Delhi, India</Text>
              </View>
              <View style={styles.row}>
              <Ionicons name='ios-call' size={20} color='#777777' />
              <Text style={{color:'#777777', marginLeft:15}}>9158402###</Text>
              </View>
              <View style={styles.row}>
              <Ionicons name='md-mail' size={20} color='emailId.com' />
              <Text style={{color:'#777777', marginLeft:15}}>Delhi, India</Text>
              </View>
            </View>
            <View style={styles.infoBoxWrapper}>
              <View style={styles.infoBox}>
                <Title>$140</Title>
                <Caption>Wallet</Caption>
              </View>
              <View style={[styles.infoBox, {
                borderLeftColor: '#dddddd',
                borderLeftWidth: 1
              } 
              ]}>
                <Title>12</Title>
                <Caption>Orders</Caption>
              </View>
            </View>
            <View style={styles.menuWraper}>

              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='ios-heart-outline' color="red" size={20}/>
                  <Text style={styles.menuItemText}>Your Favourates</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='ios-card-outline' color="red" size={20}/>
                  <Text style={styles.menuItemText}>Payments</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='share-social-outline' color="red" size={20}/>
                  <Text style={styles.menuItemText}>Share Your Friends</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='settings-outline' color="red" size={20}/>
                  <Text style={styles.menuItemText}>Setting</Text>
                </View>
              </TouchableRipple>
            </View>
           
        </SafeAreaView>
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});