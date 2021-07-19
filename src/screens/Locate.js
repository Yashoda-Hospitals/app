import React from 'react';
import {
  View,
  Image,
  Linking,
  Pressable,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import * as firebase from 'firebase';
import {
  Layout,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
} from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';

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
      <TopNav middleContent='Locate' />
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
            <Text style={{ fontWeight: 'bold', fontSize: 18, right: 5 }}>
              🚑{'   '} Ambulance
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
            <Text style={{ fontWeight: 'bold', fontSize: 18, right: 5 }}>
              💊{'   '} Pharmacy
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#b8b8ff',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              // marginBottom: 30,
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, right: 5 }}>
              🏥 {'   '}Hospital
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <MapView
          style={{
            // width: Dimensions.get('window').width,
            // height: Dimensions.get('window').height,
            width: '100%',
            height: 400,
          }}
          initialRegion={{
            latitude: 17.4418,
            longitude: 78.3971,
            // latitudeDelta: 0.04,
            // longitudeDelta: 0.05,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </Layout>
  );
}
