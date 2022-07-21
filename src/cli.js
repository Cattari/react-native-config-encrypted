const CryptoJS = require('crypto-js')

const fs = require('fs')

const { seed, encryptedVars } = require('../../../env-encrypt.json')

const ENV_PATH = '../../../.env'

const encryptEnvVariables = () => {
  const rawEnvData = fs.readFileSync(ENV_PATH, 'utf8')

  const rows = rawEnvData.split(/\r?\n/).filter((row) => Boolean(row))
  const rowKeyValuePairs = rows.map((row) => row.split('='))
  const rowsWithEncryptedValues = rowKeyValuePairs.map(([key, value]) => {
    if (encryptedVars.includes(key)) {
      const encryptedValue = CryptoJS.AES.encrypt(value, seed).toString()
      return [key, encryptedValue]
    }

    return [key, value]
  })

  // const rowsWithDecryptedValues = rowsWithEncryptedValues.map(([key, value]) => {
  //   if (encryptedVars.includes(key)) {
  //     const decryptedValue = CryptoJS.AES.decrypt(value, seed).toString(CryptoJS.enc.Utf8)
  //     return [key, decryptedValue]
  //   }

  //   return [key, value]
  // })

  const encryptedEnvString = [...rowsWithEncryptedValues.map((row) => row.join('=')), ''].join(
    '\r\n'
  )

  fs.writeFileSync(ENV_PATH, encryptedEnvString)
}

encryptEnvVariables()
