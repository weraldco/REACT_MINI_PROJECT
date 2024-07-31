import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
	const [qrCode, setQRCode] = useState('');
	const [inputValue, setInputValue] = useState('');

	function handleGenerateQR() {
		setQRCode(inputValue);
	}
	return (
		<>
			<div className="grid gap-2 p-5 place-content-center">
				<h1 className="text-center text-xl">QR Code Generator</h1>
				<input
					name="qr-id"
					onChange={(e) => setInputValue(e.target.value)}
					type="text"
					placeholder="Enter your value.."
					className="p-2 border-2"
				/>
				<button
					onClick={handleGenerateQR}
					className="p-2 bg-blue-500 text-white rounded-md"
				>
					Generate
				</button>
				<QRCode
					id="qr-code-value"
					value={qrCode}
					size={400}
					bgColor="#FFFFFF"
				/>
			</div>
		</>
	);
}
