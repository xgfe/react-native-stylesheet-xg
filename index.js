'use strict';
import React, {
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';

const {width} = Dimensions.get('window');
const DEFAULT_WIDTH = 320;

const CStyleSheet = {
  baseWidth: DEFAULT_WIDTH,
  ratio: width / DEFAULT_WIDTH,
  setBase: function (baseWidth = DEFAULT_WIDTH) {
    this.baseWidth = baseWidth;
    this.ratio = width / baseWidth;
  },
  create: function (styleObj) {
    return StyleSheet.create(this.revise(styleObj));
  },

  revise: function(styleObj) {
    // revise, expect: flex, opacity
    for (var styleKey in styleObj) {
      // Freeze keys
      var _keys = Object.keys(styleObj[styleKey]);
      for (var i in _keys) {
        var key = _keys[i];
        // cross platform
        if (key === 'ios' || key === 'android') {
          if (key === Platform.OS) {
            for (var platformKey in styleObj[styleKey][key]) {

              if (typeof styleObj[styleKey][key][platformKey] === 'number' && platformKey !== 'flex' && platformKey !== 'opacity') {
                // ignore rules with '$' start
                if (platformKey.charAt(0) === '$') {
                  styleObj[styleKey][platformKey.substr(1)] = styleObj[styleKey][key][platformKey];
                  continue;
                }
                styleObj[styleKey][platformKey] = this.r(styleObj[styleKey][key][platformKey]);
              } else {
                // directly assign to the parent
                styleObj[styleKey][platformKey] = styleObj[styleKey][key][platformKey];
              }
            }

          }

          // delete hack style key
          delete styleObj[styleKey][key];
          continue;
        }

        if (typeof styleObj[styleKey][key] === 'number' && key !== 'flex' && key !== 'opacity') {
          // ignore rules with '$' start
          if (key.charAt(0) === '$') {
            styleObj[styleKey][key.substr(1)] = styleObj[styleKey][key];
            delete styleObj[styleKey][key];
            continue;
          } else {
            styleObj[styleKey][key] = this.r(styleObj[styleKey][key]);
          }
        }
      }
    }

    return styleObj;
  },

  r: function(num) {
    if (Math.abs(num) <= 1) {
      return num;
    }

    return Math.round(num * this.ratio);
  }
};

export default CStyleSheet;
