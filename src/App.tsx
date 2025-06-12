import { useState } from 'react';
import InputTextComponent from './components/input.text';

export function App() {
	const [disable, setDisable] = useState(false);

	// Not: Props değerlerinin dinamik olarak değişmesini istersek Component props değerlerini state bağlayabiliriz. State değişince mantıken component yeni değer ile render edileceği için aslında component props'a son güncel state değeri gönderilir.

	const handleInputChange = (value: string | number) => {
		console.log('value', value);
	};

	return (
		<>
			<InputTextComponent
				sx={{ color: 'red', border: '1px solid gray', padding: 5 }}
				labelText="Adınız"
				value={''}
				disabled={false}
				onInputChange={handleInputChange}
			/>
			<hr></hr>
			<InputTextComponent
				sx={{
					color: 'blue',
					border: '1px solid blue',
					padding: 5,
					borderRadius: 5,
				}}
				labelText="Soyadınız"
				value={'Tekin'}
				disabled={disable}
				onInputChange={() => (value: string) => {
					console.log('value-2', value);
				}}
			/>
			<button onClick={() => setDisable(!disable)}>Enable/Disable</button>
		</>
	);

	//const [disable, setDisable] = useState(false);
}

export default App;
