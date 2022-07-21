import Crypto from 'crypto-js';
import encryptConfig from '../../../env-encrypt.json';

const { seed, encryptedVars } = encryptConfig

class SecureConfig {
  static key = seed

  static configure ({ provider }) {
    SecureConfig.configProvider = provider;
  }

  static decrypt (value) {
    if (!value) {
      return;
    }
    let decryptedString;
    try {
      decryptedString = Crypto.AES.decrypt(String(value), SecureConfig.key).toString(Crypto.enc.Utf8);
    } catch (error) {
      return decryptedString;
    }
    return decryptedString;
  }

  static get (key) {
    const decrypt = encryptedVars.includes(key)
    return decrypt ? SecureConfig.decrypt(SecureConfig.configProvider[key]) : SecureConfig.configProvider[key];
  }
} 

export default SecureConfig;