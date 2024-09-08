import CryptoJS from 'crypto-js'

export const getSecret = () => {
	const secret = window.location.origin.toString()

	return secret
}

export const encodeAES = (text: string, secret: string) => {
	return CryptoJS.AES.encrypt(text, secret).toString()
}

export const decodeAES = (text: string, secret: string) => {
	return CryptoJS.AES.decrypt(text, secret).toString(CryptoJS.enc.Utf8)
}
