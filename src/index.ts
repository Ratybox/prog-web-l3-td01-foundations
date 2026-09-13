import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import { getDisplayName } from "./crew";
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