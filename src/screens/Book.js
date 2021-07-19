import React from 'react';
import {
  View,
  Image,
  Linking,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';

import { FAB, Portal, Provider } from 'react-native-paper';
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
    backgroundColor='#e01e37'
    color='white'
  />
);

export default function ({ navigation }) {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const { isDarkmode, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Layout>
      <TopNav middleContent='Book an Appointment' />
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
          <Pressable
            style={{
              backgroundColor: '#e4e4e4',
              borderRadius: 10,
              paddingBottom: 30,
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
                color='#e01e37'
                style={{ borderRadius: 10 }}>
                Mon - Fri, 08:00 to 14:00
              </Button>
            </Card.Content>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#e4e4e4',
              borderRadius: 10,
              paddingBottom: 20,
              marginTop: 30,
            }}
            onPress={() => {
              navigation.navigate('SecondScreen');
            }}>
            <Card.Title
              title='Dr. Vishnu Reddy'
              subtitle='Department of Anesthesiology'
              style={{ color: 'white' }}
              left={LeftContent}
            />
            <Card.Content>
              <Button
                icon='clock'
                mode='contained'
                color='#e01e37'
                style={{ borderRadius: 10 }}>
                Wed - Fri, 09:00 to 16:00
              </Button>
            </Card.Content>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#e4e4e4',
              borderRadius: 10,
              paddingBottom: 20,
              marginTop: 30,
            }}
            onPress={() => {
              navigation.navigate('SecondScreen');
            }}>
            <Card.Title
              title='Dr. Milap Shah'
              subtitle='Department of Pathology'
              style={{ color: 'white' }}
              left={LeftContent}
            />
            <Card.Content>
              <Button
                icon='clock'
                mode='contained'
                color='#e01e37'
                style={{ borderRadius: 10 }}>
                Tue - Sat, 11:00 to 19:00
              </Button>
            </Card.Content>
          </Pressable>
        </View>
      </View>
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'phone'}
            actions={[
              { icon: 'plus', onPress: () => console.log('Pressed add') },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'star',
                label: 'Practo',
                onPress: () => console.log('Pressed star'),
              },

              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </Layout>
  );
}
