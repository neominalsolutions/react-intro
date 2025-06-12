// Örnek-1: Buton Basınca ekrana Merhaba yazdıran basit bir örnek. Render süresini anlayalım

import { useEffect, useState } from 'react';

function Demo() {
	const [message, setMessage] = useState(''); // model -> kullanıcı etkileşimi sonrası arayüzleri güncellemezi sağlayan componentin yeni modele göre yeniden render edilmesini sağlayan yapıya state diyoruz. state tanımı function componentlerde useState hook ile yapılıyor. -> virtual dom state takip eder. message değeri '' iken 'Butona tıklandı' olunca virtual model change algılar ve sayfayı yeniden re-render eder.
	const [number, setNumber] = useState(0);
	// let number1 = 0;
	// Not: Function componentler ile ihtiyacımız olduğu kadar state tanımı component içine yapabiliriz.

	useEffect(() => {
		console.log('...rendering');
	}, [message]);

	const onButtonClick = () => {
		alert('Butona tıklandı');
		setMessage('Butona Tıklandı');
		setNumber(number + 1);
		// number1++;
		// message = "Butona tıklandı"; Not: React state değerlerini sadece okuma izin verir. Direk state güncelleyemeyiz. bunun için setMessage gibi state güncelleme function oluşturmamız gerekir.
		// Not: State değişmediği sürece component render almaz. Yani butona defalarca tıklasak dahi state değişmediği için yeniden render alınmaz.
	};
	// bir html elemente ait onClick React Eventi bir function bağlama olayını event binding ismini veriyoruz.
	// Bir jsx elementinin içerisinde state bind etme işleminde ise model binding denir. 	<p>Mesajımız: {message}</p>

	// rendering sağlar.
	return (
		<>
			<p>Mesajımız: {message}</p>
			<p>Sayı: {number}</p>
			{/* <p>Sayı1: {number1}</p> */}
			<button onClick={onButtonClick}>Click Me</button>
		</>
	);
}

export default Demo;
