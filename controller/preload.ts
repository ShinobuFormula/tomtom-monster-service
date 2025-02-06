import { Passive } from "../model/interfaces/passive.js";
import { Skill } from "../model/interfaces/skill.js";
import { getAllPassives } from "../model/passive.js";
import { getAllSkills } from "../model/skill.js";

const passives: Passive[] | any[] = [];
const skills: Skill[] = [];

const initPreload = async () => {
    loadPassives();
    loadSkills();
}

const loadPassives = async () => {
    passives.push(...await getAllPassives());
}

const loadSkills = async () => {
    skills.push(...await getAllSkills());
}

const getPassive = (name: string) => {
    return passives.find((passive) => passive.name === name);
}

const getSkill = (name: string) => {
    return skills.find((skill) => skill.name === name);
}

export { initPreload, getPassive, getSkill, loadPassives, loadSkills };