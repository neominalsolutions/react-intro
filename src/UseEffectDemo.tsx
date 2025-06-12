// useEffect Hook içerisinde cleanup function ile component domdan ayrılken yapılacak olan işlemleri yazarız.

import { useEffect, useState } from 'react';

function ShowHideComponent() {
	// Not: UseEffect Componentlerin State değişimlerini takip eder, doma giriş çıkışlarını takip eder. Yani Component Lifecycle sağlar.

	const onUnwillMount = () => {
		console.log('Component unwillmount -> domdan çıkış');
	};

	useEffect(() => {
		console.log('componentdid mount -> doma ilk giriş');

		// clean up functions -> component domdan ayrılırken yapılacak bir işlem varsa kullandığımız bir function. socket bağlantısı terminate etme.
		return onUnwillMount;
	}, []);

	return (
		<div style={{ border: '1px solid red', padding: '5px' }}>
			<p>Show Hide Component</p>
			<br></br>
		</div>
	);
}

// useEffect Demo içerisinde bir button ShowHideComponent componentin doma girip çıkmasını sağlasın.
function UseEffectDemo() {
	const [show, setShow] = useState(false); // gizli

	// Koşullu bir şekilde component ekranda göster gizle için && operatöründen yararlandık.
	// Koşullu JSX oluşturma
	if (show)
		return (
			<>
				<ShowHideComponent />
				<button onClick={() => setShow(!show)}>Göster/Gizle</button>
			</>
		);
	else {
		return (
			<>
				<p>Gösterilecek birşey yok</p>
				<button onClick={() => setShow(!show)}>Göster/Gizle</button>
			</>
		);
	}

	// return <>{show && <ShowHideComponent />}</>;
}

export default UseEffectDemo;
