// Conversion Between Text, Base64, Caesar Cipher, Binary, Octal, Hexadecimal

function performOperation() {
	const userInput = document.getElementById('userInput').value;
	const operationInput = document.getElementById('operationInput').value;
	const operationOutput = document.getElementById('operationOutput').value;
	let result = '';

	if (operationInput === 'text' && operationOutput === 'text') {
		result = userInput;
	} else if (operationInput === 'text' && operationOutput === 'base64') {
		result = btoa(userInput);
	} else if (operationInput === 'text' && operationOutput === 'caesar') {
		result = caesarCipherEncode(userInput, 3); // You can choose the shift value.
	} else if (operationInput === 'text' && operationOutput === 'binary') {
		result = textToBinary(userInput);
	} else if (operationInput === 'text' && operationOutput === 'octal') {
		result = textToOctal(userInput);
	} else if (operationInput === 'text' && operationOutput === 'hexadecimal') {
		result = textToHexadecimal(userInput);
	} else if (operationInput === 'base64' && operationOutput === 'text') {
		result = atob(userInput);
	} else if (operationInput === 'caesar' && operationOutput === 'text') {
		result = caesarCipherDecode(userInput, 3); // Use the same shift value as encoding.
	} else if (operationInput === 'binary' && operationOutput === 'text') {
		result = binaryToText(userInput);
	} else if (operationInput === 'octal' && operationOutput === 'text') {
		result = octalToText(userInput);
	} else if (operationInput === 'hexadecimal' && operationOutput === 'text') {
		result = hexadecimalToText(userInput);
	} else if (operationInput === 'base64' && operationOutput === 'caesar') {
		const decoded = atob(userInput);
		result = caesarCipherEncode(decoded, 3);
	} else if (operationInput === 'caesar' && operationOutput === 'base64') {
		const decoded = caesarCipherDecode(userInput, 3);
		result = btoa(decoded);
	} else if (operationInput === 'binary' && operationOutput === 'octal') {
		const decoded = binaryToText(userInput);
		result = textToOctal(decoded);
	} else if (operationInput === 'octal' && operationOutput === 'binary') {
		const decoded = octalToText(userInput);
		result = textToBinary(decoded);
	}

	document.getElementById('output').value = result;
}


function clearInput() {
	document.getElementById('userInput').value = '';
}

function clearResult() {
	document.getElementById('output').value = '';
}

function caesarCipherEncode(text, shift) {
	// Implementation of Caesar Cipher encoding
	return text
		.split('')
		.map((char) => {
			if (char.match(/[a-z]/i)) {
				const code = char.charCodeAt(0);
				const shiftAmount = code >= 65 && code <= 90 ? 65 : 97;
				return String.fromCharCode((code - shiftAmount + shift) % 26 + shiftAmount);
			}
			return char;
		})
		.join('');
}

function caesarCipherDecode(text, shift) {
	// Implementation of Caesar Cipher decoding
	return caesarCipherEncode(text, 26 - shift);
}

function textToBinary(text) {
	return text.split('').map((char) => char.charCodeAt(0).toString(2)).join(' ');
}

function binaryToText(binary) {
	return binary.split(' ').map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
}

function textToOctal(text) {
	return text.split('').map((char) => char.charCodeAt(0).toString(8)).join(' ');
}

function octalToText(octal) {
	return octal.split(' ').map((oct) => String.fromCharCode(parseInt(oct, 8))).join('');
}

function textToHexadecimal(text) {
	return text.split('').map((char) => char.charCodeAt(0).toString(16)).join(' ');
}

function hexadecimalToText(hexadecimal) {
	return hexadecimal.split(' ').map((hex) => String.fromCharCode(parseInt(hex, 16))).join('');
}
