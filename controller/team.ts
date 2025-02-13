import { FightMonster, FlatFightMonster, Team } from "../model/interfaces/monster";
import { Passive } from "../model/interfaces/passive";
import { Skill } from "../model/interfaces/skill";
import { User } from "../model/interfaces/user";
import { getStockById } from "../model/stock.js";
import { getUserByID, updateTeam } from "../model/user.js";
import { getPassive, getSkill } from "./preload.js";


const controlUpdate = async (userId: string, stockId: string, team: Team) => {
    const teamArray: FightMonster[] = Object.values(team);

    //if no duplicates
    if (!teamArray.some((value, index) => teamArray.indexOf(teamArray.find((monster) => monster._id === value._id)) !== index)) {
        console.log("no duplicates");

        const stock = await getStockById(stockId)
        if (teamArray.every(val => stock.pc.find((monster) => monster._id === val._id)))
        {
            const tempUser = { team: team }
            return await updateTeam(userId, tempUser);
        }
    }
}

const fillUserTeam = async (userId: string) => {
    const user: User = await getUserByID(userId);
    const tempTeam: Team = {
        first: user.team.first ? fillMonster(user.team.first as FlatFightMonster): undefined,
        second: user.team.second ? fillMonster(user.team.second as FlatFightMonster): undefined,
        third: user.team.third ? fillMonster(user.team.third as FlatFightMonster): undefined,
        fourth: user.team.fourth ? fillMonster(user.team.fourth as FlatFightMonster) : undefined
    }
    user.team = tempTeam;
    return user;
} 

const fillMonster = (monster: FlatFightMonster): FightMonster => {
    const tempPassive: Passive = getPassive(monster.passive);
    const tempSkill: Skill[] = monster.skills.map((skill) => getSkill(skill));
    const tempMonster: FightMonster = {...monster, passive : tempPassive, skills: tempSkill};
    return tempMonster;
}

export { controlUpdate, fillUserTeam }