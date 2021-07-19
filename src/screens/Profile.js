import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import * as firebase from 'firebase';

import { Layout, Text } from 'react-native-rapi-ui';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/77846223/profile_400x400.jpg',
          }}
        />
        <Text style={styles.userName}>Mark Zuckerberg</Text>
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>Registration ID : 20740</Text>
        <View style={styles.userBtnWrapper}>
          <Button
            style={styles.userBtn}
            onPress={() => {
              navigation.navigate('EditProfile');
            }}>
            <Text style={styles.userBtnTxt}>Edit</Text>
          </Button>
          <Button
            style={styles.userBtn}
            onPress={() => {
              firebase.auth().signOut();
            }}>
            <Text style={styles.userBtnTxt}>Logout</Text>
          </Button>
        </View>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>37</Text>
            <Text style={styles.userInfoSubTitle}>Age</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>5' 7</Text>
            <Text style={styles.userInfoSubTitle}>Height</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>70 Kg</Text>
            <Text style={styles.userInfoSubTitle}>Weight</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 30,
            padding: 0,
            // backgroundColor: '#f9f9f9',
          }}>
          <Pressable
            style={{
              backgroundColor: '#ffd000',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              marginBottom: 30,
              // elevation: 5,
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              My Appointments
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#ffd000',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              marginBottom: 30,
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>My Reports</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  userBtn: {
    borderColor: '#023e8a',
    borderWidth: 2,
    borderRadius: 12,
    // paddingVertical: 8,
    // paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#023e8a',
    fontSize: 14,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
