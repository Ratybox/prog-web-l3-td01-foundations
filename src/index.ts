import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import { createCrewCards, getDisplayName, hasSkill, isAvailable } from "./crew";
import type { CrewCard } from "./types/CrewCard";

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