import React from 'react';
import {
  View,
  Image,
  Linking,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
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
      <TopNav middleContent='Covid-19 Center' />
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
            marginTop: 30,
            padding: 0,
            backgroundColor: '#f9f9f9',
          }}>
          <Pressable
            style={{
              backgroundColor: '#b8b8ff',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              marginBottom: 30,
            }}>
            <Text style={{ fontWeight: 'bold' }}>Covid-19 Symptoms</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#b8b8ff',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              marginBottom: 30,
            }}>
            <Text style={{ fontWeight: 'bold' }}>RT-PCR Test</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#b8b8ff',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              marginBottom: 30,
            }}>
            <Text style={{ fontWeight: 'bold' }}>
              Book a Vaccine Slot (CoWin)
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#b8b8ff',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              marginBottom: 30,
            }}>
            <Text style={{ fontWeight: 'bold' }}>Consult a Doctor</Text>
          </Pressable>
        </View>
        <Image
          style={{ width: 350, height: 280 }}
          // resizeMode={cover}
          source={require('../../assets/hero.jpg')}
        />
      </View>
    </Layout>
  );
}
