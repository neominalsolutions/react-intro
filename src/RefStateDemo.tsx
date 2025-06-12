/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

function RefStateDemo() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [user, setUser] = useState<any>({ name: 'ali', id: 1 }); // ilk değer boş tanımlanabilir.
	//const [users, setUsers] = useState<any[]>([]);

	useEffect(() => {
		console.log('mounting'); // component ilk doma basıldı.
	}, []); // [] empty dependecy sadece component doma girdiği anda tetiklenir. component domdan çıkana kadar 1 kereye mahsus tetiklenir.

	useEffect(() => {
		console.log('...rendering referance type'); // updated işlemi
	}, [user]); // bu hook state değişikliklerinin takibini yaparız, State değiştikçe tetiklenir.

	// Not: Her useEffect birbirinden bağımsız bir şekilde ilk renderda tetiklenir. Bundan sonraki renderda tetiklenmesi state değişliğine bağlıdır. [] deps değilse state değişiminde tekrar tetiklenir.

	useEffect(() => {
		console.log('..rendering value type');
	}, [randomNumber]);

	const onButtonClick = () => {
		// user.name = 'Can';
		// user.id = 2;

		// const newUser = { name: 'Can', id: 2 };
		// Not: Referance typelar ile çalışırken.  Virtual Dom nesnenin referansının değişmesini bekler.

		setUser({ ...user, name: 'Can', id: 2 }); // referance type nesnelerin güncellenmesi spread operatör ile sağlanır.
		// setUsers([...users, user]); // object array spread operator kullanalım.
	};

	// ilk renderda hiç birşey görmemiz lazım
	// 2. render sonrası can olmalı
	// const [randomNumber, setRandomNumber] = useState(0);

	/*
	  useEffect(() => {
		console.log('..rendering value type');
	  }, [randomNumber]);
    */

	useEffect(() => {
		console.log('user veya random number değiştiğinde tetiklenir.');
	}, [user, randomNumber]); // ikisinden birisi tetiklenirsede ben burada işlem yapabilirim.

	const onGenerateRandomNumber = () => {
		setRandomNumber(Math.round(Math.random() * 3)); // 0-3 arası değer üret.
	};

	return (
		<>
			<p>User: {user?.name}</p>
			<button onClick={onButtonClick}>Set User Name</button>
			<hr></hr>
			<p>Random Number: {randomNumber}</p>
			<button onClick={onGenerateRandomNumber}>Generate Random Number</button>
		</>
	);
}

export default RefStateDemo;
