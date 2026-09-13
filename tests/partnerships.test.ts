import { describe, expect, test } from "bun:test";
import { addPartner, removePartner, updateTeamPartnership } from "../src/partnerships";
import type { Team } from "../src/types/Team";

const buildAurore = (partners: Array<number>): Team => {
    return {
        id: 1,
        name: "Aurore",
        base: "Europe",
        title: "Explorer pour comprendre",
        memberCount: 120,
        partners
    };
}

const buildHorizon = (partners: Array<number>): Team => {
    return {
        id: 2,
        name: "Horizon",
        base: "Amérique du Nord",
        title: "Toujours plus loin",
        memberCount: 95,
        partners
    };
}

describe("addPartner", () => {
    test("ajoute un partenaire sans modifier l'équipe d'origine", () => {
        const auroreTeam: Team = buildAurore([]);

        const updatedAurore: Team = addPartner(auroreTeam, 2);

        expect(updatedAurore).not.toBe(auroreTeam);
        expect(auroreTeam.partners).toEqual([]);
        expect(updatedAurore.partners).toEqual([2]);
    });

    test("ne duplique pas un partenaire existant", () => {
        const auroreTeam: Team = buildAurore([2]);

        expect(addPartner(auroreTeam, 2).partners).toEqual([2]);
    });
});

describe("removePartner", () => {
    test("retire le partenaire sans modifier l'équipe d'origine", () => {
        const auroreTeam: Team = buildAurore([2, 3]);

        const auroreSansPartenaire: Team = removePartner(auroreTeam, 2);

        expect(auroreSansPartenaire).not.toBe(auroreTeam);
        expect(auroreTeam.partners).toEqual([2, 3]);
        expect(auroreSansPartenaire.partners).toEqual([3]);
    });
});

describe("updateTeamPartnership", () => {
    test("ne remplace que l'objet concerné", () => {
        const allTeams: Array<Team> = [buildAurore([]), buildHorizon([])];

        const updatedTeams: Array<Team> = updateTeamPartnership(allTeams, 1, 2);

        expect(updatedTeams).not.toBe(allTeams);
        expect(updatedTeams[0]).not.toBe(allTeams[0]);
        expect(updatedTeams[1]).toBe(allTeams[1]);
        expect(updatedTeams[0]?.partners).toEqual([2]);
        expect(allTeams[0]?.partners).toEqual([]);
    });

    test("laisse le tableau inchangé lorsque aucune équipe ne correspond", () => {
        const allTeams: Array<Team> = [buildAurore([]), buildHorizon([])];

        const updatedTeams: Array<Team> = updateTeamPartnership(allTeams, 999, 2);

        expect(updatedTeams[0]).toBe(allTeams[0]);
        expect(updatedTeams[1]).toBe(allTeams[1]);
    });
});
