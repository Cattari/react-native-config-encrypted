// import { ReactNative } from 'react-native'
import Crypto from 'crypto-js';
// import encryptConfig from '../../../env-encrypt.json';

// const { ReactNativeConfigModule } = ReactNative.NativeModules;
// const { encryptedVars } = encryptConfig

class SecureConfig {
  static seed = seed;

  static configure ({ provider, seed }) {
    SecureConfig.configProvider = provider;
    SecureConfig.seed = seed;
  }

  static decrypt (value) {
    if (!value) {
      return;
    }
    let decryptedString;
    try {
      decryptedString = Crypto.AES.decrypt(String(value), SecureConfig.seed).toString(Crypto.enc.Utf8);
    } catch (error) {
      return decryptedString;
    }
    return decryptedString;
  }

  static get (key, decrypt = true) {
    return decrypt ? SecureConfig.decrypt(SecureConfig.configProvider[key]) : SecureConfig.configProvider[key];
  }
} 

export default SecureConfig;