/**
 * 登录
 */
import {ajax} from '../' // 基础ajax
// import './mock'
import CryptoJS from 'crypto-js' // 加解密

// aes加密
const encode = (str) => {
  const key = CryptoJS.enc.Utf8.parse('1d4d8c77108a4fd2a3c23feba0cfdccc'.substring(0, 16))
  let val = CryptoJS.enc.Utf8.parse(str)
  const iv = CryptoJS.enc.Utf8.parse('user-service-api')
  const opt = {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }
  // Encrypt
  let ciphertext = CryptoJS.AES.encrypt(val, key, opt).toString()
  // Decrypt
  // const bytes = CryptoJS.AES.decrypt(ciphertext.toString(), key, opt)
  // const plaintext = bytes.toString(CryptoJS.enc.Utf8)
  // console.log(ciphertext.toString())
  // console.log(plaintext)
  return ciphertext.toString()
}

export default {
  login (usr, pwd) {
    return ajax.post('/Login', {
      params: {
        usr: usr,
        pwd: encode(pwd)
      }
    })
  }
}
