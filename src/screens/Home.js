import React from 'react';
import { View, Linking, Pressable, ScrollView, TextInput } from 'react-native';
import * as firebase from 'firebase';
// import { TextInput } from 'react-native-paper';
import {
  Layout,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
} from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon='account-tie'
    backgroundColor='#feeafa'
    color='black'
  />
);

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Layout>
      <TopNav
        middleContent='Welcome Patient'
        rightContent={<Ionicons name='notifications' size={20} />}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          // justifyContent: 'center',
          marginHorizontal: 20,
        }}>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            padding: 0,
          }}>
          <TextInput
            placeholder='🔍  Search'
            placeholderTextColor='#1b263b'
            onChangeText={onChangeSearch}
            value={searchQuery}
            caretHidden={true}
            inlineImageLeft='search_icon'
            style={{
              opacity: 0.8,
              color: '#000',
              paddingVertical: 10,
              borderRadius: 18,
              backgroundColor: '#e4e4e4',
              fontSize: 18,
              paddingHorizontal: 20,
            }}
          />
        </View>

        <View
          style={{
            width: '100%',
            marginTop: 30,
            padding: 0,
            backgroundColor: '#f9f9f9',
          }}>
          <Text
            fontWeight='bold'
            style={{ textAlign: 'left', marginBottom: 30, fontSize: 18 }}>
            Upcoming Consultation
          </Text>

          <Pressable
            style={{
              backgroundColor: '#e4e4e4',
              borderRadius: 10,
              paddingBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('SecondScreen');
            }}>
            <Card.Title
              title='Dr. Sree Laxmi'
              subtitle='Department of Emergency Medicine'
              style={{ color: 'white' }}
              left={LeftContent}
            />
            <Card.Content>
              <Button
                icon='clock'
                mode='contained'
                color='#feeafa'
                style={{ borderRadius: 10 }}>
                Mon, July 19, 09:00 to 10:00
              </Button>
            </Card.Content>
          </Pressable>
        </View>

        <View
          style={{
            width: '100%',
            marginTop: 30,
            padding: 0,
            backgroundColor: '#f9f9f9',
          }}>
          <Text
            fontWeight='bold'
            style={{ textAlign: 'left', marginBottom: 30, fontSize: 18 }}>
            Find your Doctor
          </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                backgroundColor: '#e4e4e4',
                borderRadius: 30,
                padding: 20,
                elevation: 5,
                marginLeft: 5,
                marginVertical: 5,
              }}
              onPress={() => {
                navigation.navigate('SecondScreen');
              }}>
              <Text>❤ Cardiology</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#e4e4e4',
                borderRadius: 30,
                padding: 20,
                marginLeft: 15,
                elevation: 5,
                marginVertical: 5,
              }}
              onPress={() => {
                navigation.navigate('SecondScreen');
              }}>
              <Text>💪🏻 Orthopedics</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#e4e4e4',
                borderRadius: 30,
                padding: 20,
                marginLeft: 15,
                elevation: 5,
                marginVertical: 5,
              }}
              onPress={() => {
                navigation.navigate('SecondScreen');
              }}>
              <Text>☢ Radiology</Text>
            </Pressable>
          </ScrollView>
        </View>

        <View
          style={{
            width: '100%',
            marginTop: 30,
            padding: 0,
            backgroundColor: '#f9f9f9',
          }}>
          <Text
            fontWeight='bold'
            style={{ textAlign: 'left', marginBottom: 30, fontSize: 18 }}>
            Quick Access
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Button
              icon='ambulance'
              mode='contained'
              color='#a4133c'
              style={{ borderRadius: 10, width: '50%', elevation: 5 }}>
              Ambulance
            </Button>
            <Button
              icon='pill'
              color='#80ffdb'
              mode='contained'
              style={{
                marginTop: 20,
                borderRadius: 10,
                width: '50%',
                elevation: 5,
              }}>
              Pharmacy
            </Button>
            <Button
              icon='needle'
              color='#b6ccfe'
              mode='contained'
              style={{
                marginTop: 20,
                borderRadius: 10,
                width: '50%',
                elevation: 5,
              }}>
              Vaccine
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
}
