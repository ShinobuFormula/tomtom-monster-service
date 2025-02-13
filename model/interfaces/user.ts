import { FlatTeam, Stock, Team } from "./monster";

interface User {
	_id: string;
    pseudo: string;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    birthdate: Date;
    stock: Stock;
    team: Team | FlatTeam;
}

export { User }