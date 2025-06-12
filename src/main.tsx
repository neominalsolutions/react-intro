// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import UserPage from './components/user.page';
// import App from './App';
// import UseEffectDemo from './UseEffectDemo';
// import { App, Demo } from './App';
// Bir paket üzerinden birden fazla nesne export edilmiş
// import App from './App.tsx'; // default ile tek bir export var. Componentleri genel olarak bu şekilde export edelim.
// import Demo1 from './Demo.tsx';
// import RefStateDemo from './RefStateDemo.tsx';
// import Demo2 from './Demo.tsx';

createRoot(document.getElementById('root')!).render(
	<>
		{/* <App /> */}
		{/* <Demo1 /> */}
		{/* <RefStateDemo /> */}
		{/* <Demo2 /> */}
		{/* <App></App> */}
		{/* <UseEffectDemo /> */}

		<UserPage />

		{/* <UserListComponent users={[{ name: 'ali', id: 1, email: 'test' }]} /> */}
	</>
);

{
	/* <a></a>
<input /> */
}
