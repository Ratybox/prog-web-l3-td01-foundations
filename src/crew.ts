import type { CrewMember } from "./types/CrewMember";
import { teams } from "./data/teams";
import type { Team } from "./types/Team";
import type { CrewCard } from "./types/CrewCard";

export const getDisplayName = (crewMember: CrewMember): string => {
    return `${crewMember.name} : ${crewMember.role ?? "Sans rôle"}`;
}

export const hasSkill = (crewMember: CrewMember, skill: string): boolean => {
    return crewMember.skills.includes(skill);
}

export const isAvailable = (crewMember: CrewMember): boolean => {
    return crewMember.status === "disponible";
}

export const findTeamById = (teamId: number): Team | undefined => {
    return teams.find((team) => team.id === teamId);
}

export const getTeamName = (crewMember: CrewMember): string => {
    return findTeamById(crewMember.teamId)?.name ?? "Équipe inconnue";
}

export const createCrewCards = (members: Array<CrewMember>): Array<CrewCard> => {
    return members.map((member) => ({
        id: member.id,
        label: getDisplayName(member),
        teamName: getTeamName(member),
        isAvailable: isAvailable(member),
    }));
}