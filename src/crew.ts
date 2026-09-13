import type { CrewMember } from "./types/CrewMember";

export const getDisplayName = (crewMember: CrewMember): string => {
    return `${crewMember.name} : ${crewMember.role ?? "Sans rôle"}`;
}

export const hasSkill = (crewMember: CrewMember, skill: string): boolean => {
    return crewMember.skills.includes(skill);
}

export const isAvailable = (crewMember: CrewMember): boolean => {
    return crewMember.status === "disponible";
}
