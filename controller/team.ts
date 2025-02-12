import { FightMonster, Team } from "../model/interfaces/monster";
import { getStockById } from "../model/stock.js";
import { updateTeam } from "../model/user.js";


const controlUpdate = async (userId: string, stockId: string, team: Team) => {
    const teamArray: FightMonster[] = Object.values(team);

    //if no duplicates
    if (!teamArray.some((value, index) => teamArray.indexOf(teamArray.find((monster) => monster._id === value._id)) !== index)) {
        console.log("no duplicates");

        const stock = await getStockById(stockId)

        if (teamArray.every(val => stock.pc.find((monster) => monster._id === val._id))) return await updateTeam(userId, team);
    }
}

export { controlUpdate }