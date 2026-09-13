import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import { createCrewCards, getDisplayName, hasSkill, isAvailable } from "./crew";
import { addPartner, removePartner, updateTeamPartnership } from "./partnerships";
import { describeMissionState } from "./mission";
import { findById, replaceById } from "./collections";
import type { CrewCard } from "./types/CrewCard";
import type { CrewMember } from "./types/CrewMember";
import type { MissionState } from "./types/MissionState";
import type { Team } from "./types/Team";

const team = teams[0];

if (!team) 
{
    console.log("Équipe non trouvée");
} 

else
{
    const {name, title} = team;
    console.log(`${name} : « ${title} »`);
}

console.table(teams);


const trouverAlonzo = crewMembers.find((member) => member.name === "Alonzo Church")
if (!trouverAlonzo) 
{
    console.log("Membre non trouvé");
}
else
{
    console.log(getDisplayName(trouverAlonzo))
}

const membresDispo = crewMembers.filter(isAvailable)
console.table(membresDispo)


const communicationMembers = crewMembers.filter((member) => hasSkill(member, "communication"))
console.log("les membres avec Communication skills : ")
console.table(communicationMembers)


const nomAffichageMembre = crewMembers.map(getDisplayName)
console.log(nomAffichageMembre)


const crewCards: Array<CrewCard> = createCrewCards(crewMembers);
console.table(crewCards);


const auroreTeam = teams[0];
if (!auroreTeam)
{
    console.log("Équipe non trouvée");
}
else
{
    const updatedAurore = addPartner(auroreTeam, 2);
    console.log("Aurore d'origine : ", auroreTeam)
    console.log("Aurore après addPartner : ", updatedAurore)
    console.log("les références sont différentes : ", auroreTeam !== updatedAurore)
    console.log("l'original n'a aucun partenaire : ", auroreTeam.partners)
    console.log("la nouvelle contient le partenaire 2 : ", updatedAurore.partners)
}


const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2);
const partnerTeams: Array<Team> = updateTeamPartnership(withAurorePartnership, 2, 1);
console.log("le partenariat réciproque entre Aurore et Horizon : ")
console.table(partnerTeams)

console.log("le tableau initial est inchangé : ", teams.every((team) => team.partners.length === 0))
console.log("Aurore possède le partenaire 2 : ", partnerTeams[0]?.partners)
console.log("Horizon possède le partenaire 1 : ", partnerTeams[1]?.partners)
console.log("Kepler garde sa référence d'origine : ", partnerTeams[2] === teams[2])


const aurorePartenaire = partnerTeams[0];
if (!aurorePartenaire)
{
    console.log("Équipe non trouvée");
}
else
{
    const auroreSansPartenaire = removePartner(aurorePartenaire, 2);
    console.log("Aurore avant removePartner : ", aurorePartenaire.partners)
    console.log("Aurore après removePartner : ", auroreSansPartenaire.partners)
    console.log("les références sont différentes : ", aurorePartenaire !== auroreSansPartenaire)
}


const loadingState: MissionState = { status: "loading" };
const successState: MissionState = { status: "success", data: crewCards };
const errorState: MissionState = { status: "error", message: "Communication avec la base interrompue" };

console.log(describeMissionState(loadingState))
console.log(describeMissionState(successState))
console.log(describeMissionState(errorState))


const equipe3 = findById(teams, 3);
const membre5 = findById(crewMembers, 5);
const fiche2 = findById(crewCards, 2);

console.log("l'équipe 3 et son slogan : ", equipe3?.title)
console.log("le membre 5 et ses compétences : ", membre5?.skills)
console.log("la fiche 2 et son équipe : ", fiche2?.teamName)


const milnerEnMission: CrewMember = { id: 5, name: "Robin Milner", teamId: 6, status: "en mission", role: "Pilote", skills: ["navigation", "pilotage"] };
const crewMembersRemplaces = replaceById(crewMembers, milnerEnMission);
console.log("le membre 5 est remplacé : ", crewMembersRemplaces[4]?.status)
console.log("le tableau d'origine est inchangé : ", crewMembers[4]?.status)
console.log("les autres membres gardent leur référence : ", crewMembersRemplaces[0] === crewMembers[0])

const keplerAgrandie: Team = { id: 3, name: "Kepler", base: "Asie", title: "Observer, calculer, découvrir", memberCount: 85, partners: [] };
const teamsRemplacees = replaceById(teams, keplerAgrandie);
console.log("l'équipe 3 est remplacée : ", teamsRemplacees[2]?.memberCount)
console.log("le tableau d'origine est inchangé : ", teams[2]?.memberCount)