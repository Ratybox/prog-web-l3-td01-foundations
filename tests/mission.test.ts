import { describe, expect, test } from "bun:test";
import { describeMissionState } from "../src/mission";
import type { CrewCard } from "../src/types/CrewCard";
import type { MissionState } from "../src/types/MissionState";

describe("describeMissionState", () => {
    test("décrit le chargement", () => {
        const loadingState: MissionState = { status: "loading" };

        expect(describeMissionState(loadingState)).toBe("Chargement de l'équipage…");
    });

    test("décrit le succès avec le nombre de fiches", () => {
        const cards: Array<CrewCard> = [
            { id: 1, label: "Alonzo Church : Sans rôle", teamName: "Aurore", isAvailable: true },
            { id: 2, label: "Haskell Curry : Commandant de mission", teamName: "Aurore", isAvailable: true }
        ];
        const successState: MissionState = { status: "success", data: cards };

        expect(describeMissionState(successState)).toBe("2 membre(s) dans l'équipage");
    });

    test("décrit l'erreur avec son message", () => {
        const errorState: MissionState = { status: "error", message: "Communication avec la base interrompue" };

        expect(describeMissionState(errorState)).toBe("Erreur : Communication avec la base interrompue");
    });
});
