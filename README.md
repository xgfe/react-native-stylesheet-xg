# react-native-stylesheet-xg
extension stylesheet for cross platforms and responsive

## Example
Check [index.js](https://github.com/xgfe/react-native-stylesheet-xg/blob/master/example/index.android.js) in the Example folder.

### origin
```javascript
{
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
```

### android (width: 360, base: 320)
```javascript
{
  test1: {
    width: 0,
    height: 1,
    borderWidth: 113,
    $borderRadius: 100,
  },
  test: {
    width: 225,
    color: 'blue',
    height: 1
  }
}
```

### ios (width: 320, base: 320)
```javascript
{
  test1: {
    width: 0,
    height: 1,
    borderWidth: 100,
    $borderRadius: 100,
  },
  test: {
    width: 300,
    color: 'green'
  }
}
```

## Usage

```bash
npm install react-native-stylesheet-xg --save
```

```javascript
import StyleSheet from 'react-native-stylesheet-xg';

// before use, you may need set the base width with StyleSheet.setBase(width:number), which default to 320
StyleSheet.setBase(360); // this is optional, if your target screen is 320

// use react-native-stylesheet-xg replace react-native StyleSheet Module
StyleSheet.create({
  test: {
    width: 100
  }
});

// or you can use StyleSheet.r(num:number) to get the target responsive num
StyleSheet.r(100); // 113 (width: 360, base: 320)

```

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| setBase | width:number | set the target width according to the UI |
| setMinWidth | width:number | set the responsive minWidth. If the device width is less than minWidth, will use minWidth as the device width! |
| setMaxWidth | width:number | set the responsive maxWidth. If the device width is greater than minWidth, will use maxWidth as the device width! |
| create | style:object | replace native StyleSheet creating stylesheet  |
| r | num:number | the inner function to get the responsive size according to the device with and base |
| switchR | isRon:boolean | set the flag to switch the responsive size function, which return the prev value |
