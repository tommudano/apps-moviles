import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

const Screen3 = () => {

  const [characters, setcharacters] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {
        setcharacters(response.results);
        setLoading(false);
      });
  }, []);

  const formatForImages = (data) => {
    const fotosAll = []
    data.map((personaje) => {
        fotos  = {}
        fotos.name = personaje.name;
        fotos.image = 'require(personaje.image)';
        personaje.image = "require('"+(personaje.image)+"')";
        fotosAll.push(fotos);
    });
    console.log(data);
  };

  const FlatListItemSeparator = () => {
    return (
      <View style={{
        height:50,
        width: '100%',
        backgroundColor: '#c2c2c2',
      }}>

      </View>
    )
  }

  const GetItem = (item) => {
    Alert.alert("Se abre el modal del item: "+ item);
  };

  const setColor = (livingStatus) => {
    if(livingStatus === 'Alive'){
        return'green';
    }
    else if(livingStatus === 'Dead'){
        return 'red';
    }
    else if(livingStatus === 'unknown'){
        return 'yellow';
    }
  };

  
  return (
    <SafeAreaView style={styles.areaview}>
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between', backgroundColor: '#c2c2c2'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>Rick and Morty</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Characters:</Text>
          <FlatList ItemSeparatorComponent={FlatListItemSeparator}
            data={characters}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={GetItem.bind(item, item.image)}><View style={{backgroundColor: setColor(item.status), borderTopLeftRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius:10, borderTopRightRadius:10, width: 290}}><Image style={{borderTopLeftRadius: 10, borderTopRightRadius:10, alignSelf: 'flex-end', width: 270, height: 260}} source = {{uri: item.image}} ></Image><View style={styles.descripcion}>
                    <Text style={styles.textoTouchable}>{item.name}</Text>
                    <Text style={{flex:1, fontSize: 20,alignSelf: 'flex-end', marginRight: 20, justifyContent: 'center', alignItems: 'center', marginBottom:15}}>{item.species}<Image style={{height: 30, width:30, alignSelf: 'flex-end'}} source={require('../assets/human2.png')}></Image></Text>
                    </View></View>
                </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
    </SafeAreaView>
  );
};

export default Screen3;

const styles = StyleSheet.create({
    areaview: {
    backgroundColor: '#c2c2c2',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  Texto: {
    fontSize: 30,       
  },
  FlatItem: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'green',
  },
  textoTouchable: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  descripcion: {
    backgroundColor: 'white',
    flex:1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 64.44,
    width: 270,
    alignSelf: 'flex-end'
  },
});