// Özellikleri dışarıdan gönderilen props ile disabled olarak ayarlanabilsin
// label ile input label bilgisi dışarıdan props ile gönderilebilsin
// value değeri dışarıdan set edilebilsin
// onInput ile değer değiştiğinde son güncel değeri props ile dışarı fırlatsın. farklı sayfalardan input ait son güncel değeri okuyabilelim

import type React from 'react';

// Not: Propslar için type tipini tercih ederiz.

export type InputTextProps = {
	sx: React.CSSProperties; // farklı görüntü oluşturmak için kullanılan props.
	labelText: string;
	value: string | number; // string veya numeric tipte tanımlanır
	disabled: boolean;
	onInputChange: (value: string | number) => void; // son güncel değeri buradan yakalayalım. Function Props
};

function InputTextComponent(props: InputTextProps) {
	const handleInputChange = (e: React.InputEvent<HTMLInputElement>) => {
		console.log('e', e);
		const val = (e.target as HTMLInputElement).value;
		// onInputChnage Props ile component içerisindeki değişen değeri component dışına fırlattık.
		props.onInputChange(val);
	};

	// // eslint-disable-next-line @typescript-eslint/no-explicit-any
	// const handleInputChange2 = (e: any) => {
	// 		console.log('e', e);

	// 		const val = (e.target as HTMLInputElement).value;

	// 		// onInputChnage Props ile component içerisindeki değişen değeri component dışına fırlattık.
	// 		props.onInputChange(val);
	// 	};

	// state ile olan şey props ile olmuyor. props immutable çalışıyor. sadece ilk rendera etki ediyor.
	// const changeValue = () => {
	// 	props.disabled = !props.disabled;
	// 	console.log('props.disabled ', props.disabled);
	// };

	// Soru : Component Doma basıldıktan sonra acaba props değeri değişiyor mu ?
	// Değişen değer ekrana yansıyor mu ?
	// Props değerlerinin virtual dom üzerinde bir etkisi var mı?

	return (
		<div style={{ padding: 10, margin: 5 }}>
			<label style={{ padding: 5 }}>{props.labelText}</label>
			<input
				style={props.sx}
				onInput={handleInputChange}
				disabled={props.disabled}
				type="text"
				defaultValue={props.value}
			/>

			{/* <button onClick={changeValue}>Enable/Disable</button> */}
		</div>
	);
}

export default InputTextComponent;
