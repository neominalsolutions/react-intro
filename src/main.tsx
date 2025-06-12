// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import UseEffectDemo from './UseEffectDemo';
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

		<UseEffectDemo />
	</>
);

{
	/* <a></a>
<input /> */
}
