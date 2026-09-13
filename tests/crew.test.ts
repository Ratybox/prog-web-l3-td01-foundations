import { describe, expect, test } from "bun:test";
import { getDisplayName, getTeamName, hasSkill, isAvailable } from "../src/crew";
import type { CrewMember } from "../src/types/CrewMember";

describe("getDisplayName", () => {
    test("affiche le rôle lorsqu'il est défini", () => {
        const member: CrewMember = {
            id: 2,
            name: "Haskell Curry",
            teamId: 1,
            status: "disponible",
            role: "Commandant de mission",
            skills: ["communication"]
        };

        expect(getDisplayName(member)).toBe("Haskell Curry : Commandant de mission");
    });

    test("utilise une valeur par défaut lorsque le rôle est absent", () => {
        const member: CrewMember = {
            id: 1,
            name: "Alonzo Church",
            teamId: 1,
            status: "disponible",
            skills: ["navigation", "ingénierie"]
        };

        expect(getDisplayName(member)).toBe("Alonzo Church : Sans rôle");
    });
});

describe("hasSkill", () => {
    const member: CrewMember = {
        id: 3,
        name: "John McCarthy",
        teamId: 3,
        status: "disponible",
        role: "Directeur de vol",
        skills: ["stratégie", "communication"]
    };

    test("renvoie true lorsque la compétence existe", () => {
        expect(hasSkill(member, "communication")).toBe(true);
    });

    test("renvoie false lorsque la compétence n'existe pas", () => {
        expect(hasSkill(member, "pilotage")).toBe(false);
    });
});

describe("isAvailable", () => {
    const buildMember = (status: CrewMember["status"]): CrewMember => {
        return { id: 1, name: "Test", teamId: 1, status, skills: [] };
    }

    test("reconnaît le statut disponible", () => {
        expect(isAvailable(buildMember("disponible"))).toBe(true);
    });

    test("refuse les autres statuts", () => {
        expect(isAvailable(buildMember("en mission"))).toBe(false);
        expect(isAvailable(buildMember("indisponible"))).toBe(false);
    });
});

describe("getTeamName", () => {
    test("renvoie le nom de l'équipe lorsqu'elle existe", () => {
        const member: CrewMember = {
            id: 1,
            name: "Alonzo Church",
            teamId: 1,
            status: "disponible",
            skills: ["navigation", "ingénierie"]
        };

        expect(getTeamName(member)).toBe("Aurore");
    });

    test("renvoie Équipe inconnue pour un identifiant absent", () => {
        const member: CrewMember = {
            id: 7,
            name: "Signal inconnu",
            teamId: 999,
            status: "en mission",
            skills: []
        };

        expect(getTeamName(member)).toBe("Équipe inconnue");
    });
});
