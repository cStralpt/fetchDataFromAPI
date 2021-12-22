import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  View,
  Linking,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [dataJava, setDataJava] = useState([]);
  const [dataC, setDataC] = useState([]);
  const [dataJavascript, setDataJavascript] = useState([]);
  const [dataPython, setDataPython] = useState([]);
  const [dataDart, setDataDart] = useState([]);
  const [dataGo, setDataGo] = useState([]);

  const getLanguages = async () => {
    try {
      const response = await fetch(
        'https://ewinsutriandi.github.io/mockapi/bahasa_pemrograman.json',
      );
      const json = await response.json();
      setDataJava(json.Java);
      setDataC(json.C);
      setDataJavascript(json.Javascript);
      setDataPython(json.Python);
      setDataDart(json.Dart);
      setDataGo(json.Go);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const RedMoreBTN = props => {
    return (
      <TouchableHighlight
        style={styles.touchBtn}
        activeOpacity={0.6}
        underlayColor="#f77"
        onPress={() => {
          Linking.openURL(props.url).catch(err => {
            console.error('Failed opening page because: ', err);
            alert('Failed to open page');
          });
        }}>
        <Text style={styles.btn}>Read More</Text>
      </TouchableHighlight>
    );
  };
  const dataList = [
    {
      id: 1,
      languageName: 'Syntax Dasar Java:',
      description: dataJava.description,
      hello_world: dataJava.hello_world,
      logo: dataJava.logo,
      readMore: dataJava.read_more,
    },
    {
      id: 2,
      languageName: 'Syntax Dasar C:',
      description: dataC.description,
      hello_world: dataC.hello_world,
      logo: dataC.logo,
      readMore: dataC.read_more,
    },
    {
      id: 3,
      languageName: 'Syntax Dasar Javascript:',
      description: dataJavascript.description,
      hello_world: dataJavascript.hello_world,
      logo: dataJavascript.logo,
      readMore: dataJavascript.read_more,
    },
    {
      id: 4,
      languageName: 'Syntax Dasar Python:',
      description: dataPython.description,
      hello_world: dataPython.hello_world,
      logo: dataPython.logo,
      readMore: dataPython.read_more,
    },
    {
      id: 5,
      languageName: 'Syntax Dasar Dart:',
      description: dataDart.description,
      hello_world: dataDart.hello_world,
      logo: dataDart.logo,
      readMore: dataDart.read_more,
    },
    {
      id: 6,
      languageName: 'Syntax Dasar Go:',
      description: dataGo.description,
      hello_world: dataGo.hello_world,
      logo: dataGo.logo,
      readMore: dataGo.read_more,
    },
  ];
  useEffect(() => {
    getLanguages();
  }, []);
  const renderLanguageList = ({item}) => {
    return (
      <View style={styles.contaioner}>
        <View style={styles.logo_descContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.logoContainerChild}>
              <Image
                style={styles.logo}
                source={{
                  uri: item.logo,
                }}
              />
            </View>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.nameSyntaxContainer}>
          <Text style={styles.languageName}>{item.languageName}</Text>
          <Text style={styles.syntax}>{item.hello_world}</Text>
          <RedMoreBTN title="Read More" url={item.readMore} />
        </View>
      </View>
    );
  };
  // console.log(testObj);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>List Of Programming Languages</Text>
      <FlatList
        data={dataList}
        keyExtractor={({id}, index) => id}
        renderItem={renderLanguageList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'orangered',
    padding: 20,
    color: 'whitesmoke',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  logo_descContainer: {
    display: 'flex',
    width: 250,
    flexGrow: 1,
    padding: 10,
  },
  contaioner: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    margin: 10,
    borderColor: 'orangered',
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
  },
  nameSyntaxContainer: {
    display: 'flex',
    width: 250,
    flexGrow: 1,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    borderColor: 'orangered',
  },
  logo: {
    resizeMode: 'contain',
    width: 200,
    height: 150,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'justify',
    fontSize: 20,
    color: 'silver',
  },
  logoContainerChild: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'orangered',
    padding: 10,
  },
  touchBtn: {
    display: 'flex',
    padding: 20,
    borderRadius: 100,
    backgroundColor: 'orangered',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    color: 'whitesmoke',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  syntax: {
    display: 'flex',
    flexGrow: 1,
    fontSize: 25,
    backgroundColor: '#000B49',
    color: 'orangered',
    padding: 20,
    borderRadius: 20,
  },
  languageName: {
    padding: 10,
    fontSize: 30,
    color: '#FF1700',
  },
});
