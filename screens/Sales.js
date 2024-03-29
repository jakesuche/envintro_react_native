import React, {useState, useEffect, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Contacts from 'react-native-contacts';
import {ToastProvider, useToast} from 'react-native-toast-notifications';
import Ant from 'react-native-vector-icons/AntDesign';
import CustomModal from '../components/CustomeModal';

import faker from 'faker';
faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const BG_IMG = `https://images.pexels.com/photos/8297350/pexels-photo-8297350.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8297350.jpg&fm=jpg`;
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  PermissionsAndroid,
  StatusBar,
  Platform,
  FlatList,
  TextInput,
  Animated,
} from 'react-native';
import Nodata from '../components/Nodata';
import Layout from '../components/layout/Layout';
import Input from '../components/input/input';
import CustomeSwitch from '../components/input/CustomeSwitch';

const AppendComponent = () => (
  <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
    <Feather size={16} color="red" name="x-circle" />
  </TouchableOpacity>
);

const Product = () => {
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [contact, setContacts] = useState([]);
  const [singleContact, setSingleContact] = useState({});
  const [searchQuery, setSearchQuery] = React.useState('');
  const [saveMe, setSave] = useState(false);

  useEffect(() => {}, []);
  const getContacts = async () => {
    try {
      const andoidContactPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'This app would like to view your contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (andoidContactPermission === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Contacts Permission granted');
        const contacts = await Contacts.getAll();

        setContacts(contacts);
        setContactModal(true);
      } else {
        console.log('Contacts permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSingleContact = contact => {
    setSingleContact(contact);
    setContactModal(false);
  };
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Layout title={'Sales Order'}>
        <SafeAreaView
          style={[
            styles.container,
            {backgroundColor: `${contact.length !== 0 ? 'white' : null}`},
          ]}>
          {/* <View>

            <TextInput />
          </View> */}
          {DATA.length == 0 ? (
            <Nodata onPress={() => setModalVisible(true)} />
          ) : (
            <>
              <Image
                source={{uri: BG_IMG}}
                style={StyleSheet.absoluteFillObject}
                blurRadius={100}
              />
              <Animated.FlatList
                data={DATA}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: scrollY}}}],
                  {useNativeDriver: true},
                )}
                contentContainerStyle={{
                  // padding: SPACING / 2,
                  paddingTop: StatusBar.currentHeight || 42,
                }}
                renderItem={({item, index}) => {
                  const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 2),
                  ];
                  const opacityInputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 1),
                  ];
                  const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0],
                  });
                  const opacity = scrollY.interpolate({
                    inputRange: opacityInputRange,
                    outputRange: [1, 1, 1, 0],
                  });

                  return (
                    <Animated.View
                      style={{
                        flexDirection: 'row',
                        padding: SPACING,
                        marginBottom: SPACING,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderRadius: 12,
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 10,
                        },
                        opacity,
                        shadowRadius: 20,
                        shadowOpacity: 0.3,
                        elevation: 17,
                        transform: [{scale}],
                      }}>
                      <Image
                        style={{
                          width: AVATAR_SIZE,
                          height: AVATAR_SIZE,
                          borderRadius: AVATAR_SIZE,
                          marginRight: SPACING / 2,
                        }}
                        source={{uri: item.image}}
                      />
                      <View>
                        <Text style={{fontSize: 22, fontWeight: '700'}}>
                          {item?.name}
                        </Text>
                        <Text style={{fontSize: 18, opacity: 0.7}}>
                          {item?.jobTitle}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            opacity: 0.8,
                            color: '#0099cc',
                          }}>
                          {item?.email}
                        </Text>
                      </View>
                    </Animated.View>
                  );
                }}
                keyExtractor={item => item.key}
              />
            </>
          )}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.floatingButton}>
            <Feather size={30} color="#fff" name="plus" />
          </TouchableOpacity>
        </SafeAreaView>
      </Layout>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#5797F5',
          }}>
          <Feather
            onPress={() => setModalVisible(false)}
            size={23}
            color="#fff"
            name="arrow-left"
          />
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            Create Sale order
          </Text>

          <TouchableOpacity onPress={getContacts}>
            <FontAwesome color="#fff" size={26} name="address-book" />
          </TouchableOpacity>
        </View>

        <ScrollView style={{flexGrow: 1}}>
          <View style={styles.inputWrapper}>
            <Input appendComponent={<AppendComponent />} title="Customer Name" />
            <Input appendComponent={<AppendComponent />} title="Sales Order" />
            <Input
              appendComponent={<AppendComponent />}
              title="Reference"
            />
            <Input appendComponent={<AppendComponent />} title="Sales Order Date" />
            <Input appendComponent={<AppendComponent />} title="Expected Shipment Date" />
            <Input appendComponent={<AppendComponent />} title="Salesperson" />
            <Input appendComponent={<AppendComponent />} title="Delivery Method" />
            <TouchableOpacity onPress={()=>setShowMore(true)} style={styles.viewMore}>
                <Feather size={20} color="#5797f5" name="plus-circle" />
                <Text style={{marginLeft:5}}>
                    Add Line Item
                </Text>

            </TouchableOpacity>
            {
                showMore && (
                    <>
                    <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Input
                containerStyle={{minWidth: '75%'}}
                appendComponent={<AppendComponent />}
                title="Item"
              />
              <TouchableOpacity style={styles.barCode}>
                <Ant name="barcode" size={26} />
              </TouchableOpacity>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Input
                containerStyle={{minWidth: '45%'}}
                appendComponent={<AppendComponent />}
                title="Quantity"
              />
              <Input
                containerStyle={{minWidth: '45%'}}
                appendComponent={<AppendComponent />}
                title="Rate"
              />
            </View>
                    </>
                )
            }
            
           
           
           
           
            <TouchableOpacity style={styles.imageWrapper}>
              <Feather size={35} name="image" />
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.createBtn}>
              <Text style={{color: '#fff'}}>Save & Publish</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
      <CustomModal
        title={`Contact list (${contact.length})`}
        modalVisible={contactModal}
        setModalVisibility={setContactModal}>
        <SafeAreaView>
          <FlatList
            data={contact}
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
                onPress={() => getSingleContact(item)}
                style={styles.contactCard}>
                <View style={styles.contact}>
                  <Text style={{color: '#000', fontSize: 16}}>
                    {item?.displayName}
                  </Text>
                  <Text>{item?.phoneNumbers[0]?.number}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item?.recordID}
          />
        </SafeAreaView>
      </CustomModal>
    </>
  );
};















const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 15,
    position: 'relative',
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  viewMore: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginBottom:20
  },
  createBtn: {
    backgroundColor: '#5797f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 38,
    height: 50,
    borderRadius: 10,
  },
  contactCard: {},
  contact: {
    flexDirection: 'column',
    marginVertical: 6,
    height: 70,
    padding: 16,
    backgroundColor: '#F1FAFA',
  },
  floatingButton: {
    backgroundColor: '#5190FC',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 150,
    right: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 3,
    elevation: 3,
  },

  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    textAlign: 'center',
    marginHorizontal: 145,
    padding: 10,
    borderRadius: 4,
    marginBottom: 14,
  },

  barCode: {
    backgroundColor: '#DAE9F7',
    borderRadius: 10,
    marginRight: 20,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -10,
  },
});

export default Product;
