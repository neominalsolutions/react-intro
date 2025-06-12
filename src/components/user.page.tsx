// veri çekme işlemlerinin useEffect ile page componentlerde yaparız

import { useEffect, useState } from 'react';
import type { User } from '../models/user.model';

function UserPage() {
	const [usersState, setUsersState] = useState<User[]>([]);

	const loadData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				// resolved olmuş oluyor
				console.log('response', response);
				return response.json();
			})
			.then((data) => {
				console.log('data', data);
				setUsersState(data);
			})
			.catch((err) => {
				// rejected olmuş oluyor
				console.log('err', err);
			});
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<> {usersState.length > 0 && <UserListComponent users={usersState} />} </>
	);
}

type UserListProps = {
	users: User[];
};

export function UserListComponent({ users }: UserListProps) {
	return (
		<>
			<h1>Kullanıcılar</h1>

			{users.map((item: User) => {
				return (
					<UserItemComponent
						key={item.id}
						name={item.name}
						email={item.email}
					/>
				);
			})}

			{/* {viewComponent} */}

			<p>Toplam Kullanıcı Sayısı: {users.length}</p>
		</>
	);
}

type UserItemProps = {
	name: string;
	email: string;
};

function UserItemComponent({ name, email }: UserItemProps) {
	return (
		<>
			<p>
				Adı: {name} , E-Posta: {email}
			</p>
		</>
	);
}

export default UserPage;

// Map Kullanmaz isek aşağıdaki gibi statik olarak bind etmemiz lazım.

/* Itemları Component olarak dinamik oluşturualım Map kullanarak yaparız*/

/* <UserItemComponent name={users[0].name} email={users[0].email} />
			<UserItemComponent name={users[1].name} email={users[1].email} />
			<UserItemComponent name={users[2].name} email={users[2].email} />
			<UserItemComponent name={users[3].name} email={users[3].email} />
			<UserItemComponent name={users[4].name} email={users[4].email} />
			<UserItemComponent name={users[5].name} email={users[5].email} />
			<UserItemComponent name={users[6].name} email={users[6].email} />
			<UserItemComponent name={users[7].name} email={users[7].email} /> */

// Konu Anlatımı Map, Foreach

// console.log('users', users);

// const users2 = users.map((item) => {
// 	return {
// 		id: item.id,
// 		name: item.name.trim().toLowerCase(),
// 		age: 26,
// 		email: item.email.toUpperCase(),
// 	};
// });

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const users3: any = [];

// users.forEach((item) => {
// 	users3.push(item);
// });

// console.log('users', users);
// console.log('users2', users2);
// console.log('users3', users3);

// const viewComponent = () => {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const templates: any = [];

// 	users.forEach((item) => {
// 		templates.push(
// 			<UserItemComponent key={item.id} name={item.name} email={item.email} />
// 		);
// 	});

// 	return <>{templates}</>;
// };

// {/* {viewComponent()} */} ekrana bind ederken böyle olmalı
