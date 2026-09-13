import { describe, expect, test } from "bun:test";
import { findById, replaceById } from "../src/collections";
import type { Team } from "../src/types/Team";

const buildTeam = (id: number, name: string, memberCount: number): Team => {
    return { id, name, base: "Europe", title: "Slogan", memberCount, partners: [] };
}

describe("findById", () => {
    const allTeams: Array<Team> = [buildTeam(1, "Aurore", 120), buildTeam(2, "Horizon", 95)];

    test("trouve l'élément correspondant à l'identifiant", () => {
        expect(findById(allTeams, 2)?.name).toBe("Horizon");
    });

    test("renvoie undefined lorsque l'identifiant n'existe pas", () => {
        expect(findById(allTeams, 999)).toBeUndefined();
    });
});

describe("replaceById", () => {
    test("remplace l'élément et conserve la référence des autres", () => {
        const allTeams: Array<Team> = [buildTeam(1, "Aurore", 120), buildTeam(2, "Horizon", 95)];
        const horizonAgrandie: Team = buildTeam(2, "Horizon", 130);

        const updatedTeams: Array<Team> = replaceById(allTeams, horizonAgrandie);

        expect(updatedTeams).not.toBe(allTeams);
        expect(updatedTeams[0]).toBe(allTeams[0]);
        expect(updatedTeams[1]).toBe(horizonAgrandie);
        expect(allTeams[1]?.memberCount).toBe(95);
    });
});
