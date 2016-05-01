/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Text,
  View,
  ScrollView,
} from 'react-native';
import StyleSheet from 'react-native-stylesheet-xg';
import JsonBeautify from 'json-beautify';

let testStyle = {
  test1: {
    width: 0,
    height: 1,
    borderWidth: 100,
    $borderRadius: 100,
  },
  test: {
    width: 100,
    color: 'red',
    android: {
      width: 0,
      height: 1,
      width: 200,
      color: 'blue'
    },
    ios: {
      width: 300,
      color: 'green'
    }
  }
}

class example extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>react-native-stylesheet-xg</Text>
        <View style={style.body}>
          <View style={style.textCon}>
            <ScrollView>
              <Text style={{color: '#333'}}>{JsonBeautify(testStyle, null, 3, 10)}</Text>
            </ScrollView>
          </View>

          <View style={style.textCon}>
            <ScrollView>
              <Text style={{color: '#333'}}>{JsonBeautify(StyleSheet.revise(testStyle), null, 3, 10)}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    ios: {
      marginTop: 20
    }
  },
  title: {
    $fontSize: 20,
    color: '#333',
    textAlign: 'center'
  },
  body: {
    flex: 1,
    flexDirection: 'row'
  },
  textCon: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: '#eee'
  }
});

AppRegistry.registerComponent('example', () => example);
