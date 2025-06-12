// APIdeki DTO karışılık ekranda kullancağımız veri için bir model tanımlıyoruz.
// APIDaki DTOları react uygulamasında TS interfaceler ile karşılarız.
export interface User {
	id: number;
	name: string;
	email: string;
}
