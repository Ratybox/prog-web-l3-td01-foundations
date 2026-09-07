# TD 01 - Foundations

Programmation Web - L3 MIASHS - 2026/2027
IDMC - Université de Lorraine

## Identité

| Champ | Valeur |
| --- | --- |
| Prénom | *à compléter* |
| Nom | *à compléter* |
| Adresse mail universitaire | *à compléter* |
| Groupe de TD | *à compléter* |

## Lancer le projet

```bash
bun run src/index.ts   # exécuter le programme
bunx tsc --noEmit      # contrôler le typage sans exécuter
bun test               # exécuter les tests unitaires (bonus)
bun test --watch       # relancer les tests à chaque modification
```

## Périmètre réalisé

Socle obligatoire (exercices 1 à 6) :

- [ ] 1. Recenser les équipes d'exploration
- [ ] 2. Constituer l'équipage
- [ ] 3. Préparer les fiches de l'équipage
- [ ] 4. Mettre à jour les collaborations sans mutation
- [ ] 5. Décrire l'état d'une future interface
- [ ] 6. Lire et utiliser un générique simple

Bonus (facultatif) :

- [ ] Tests unitaires (`bun:test`)
- [ ] Chargement asynchrone validé avec Zod

## Réponses aux questions d'observation

### Exercice 2

**1. Avec `filter`, décrivez-vous les étapes de parcours du tableau ou la propriété du résultat attendu ?**

*à compléter*

**2. Dans `crewMembers.filter(isAvailable)`, quel rôle joue la fonction `isAvailable` ?**

*à compléter*

**3. Les fonctions `getDisplayName`, `hasSkill` et `isAvailable` modifient-elles leurs arguments ou produisent-elles une nouvelle valeur ?**

*à compléter*

### Exercice 3

**1. Quelles fonctions de cette partie calculent une valeur ?**

*à compléter*

**2. Quelle instruction produit un effet observable à l'extérieur du calcul ?**

*à compléter*

**3. Pour les mêmes tableaux `teams` et `crewMembers`, les fonctions écrites produisent-elles toujours les mêmes résultats ?**

*à compléter*

### Exercice 4

**1. Pourquoi `auroreTeam !== updatedAurore` alors que les deux objets représentent l'équipe Aurore ?**

*à compléter*

**2. Quels éléments du tableau retourné par `updateTeamPartnership` conservent leur référence ? Lesquels obtiennent une nouvelle référence ?**

*à compléter*

**3. En quoi l'absence de mutation facilite-t-elle la comparaison entre l'ancien état et le nouvel état ?**

*à compléter*

**4. Que pourrait-il arriver si deux parties d'un programme partageaient le même objet et que l'une d'elles le modifiait directement ?**

*à compléter*

### Exercice 5

**1. La fonction `describeMissionState` réalise-t-elle elle-même un chargement ou décrit-elle le résultat à produire pour un état donné ?**

*à compléter*

**2. Pourquoi séparer les trois états plutôt que d'utiliser simultanément un booléen `isLoading`, des données optionnelles et un message d'erreur optionnel ?**

*à compléter*

**3. Quels états incohérents l'union discriminée rend-elle impossibles à représenter ?**

*à compléter*

### Exercice 6

**1. Que représente `T` ?**

*à compléter*

**2. Que garantit `extends { id: number }` ?**

*à compléter*

**3. Pourquoi le retour peut-il être `undefined` ?**

*à compléter*

### Bilan : deux fonctions écrites pendant le TD

#### Fonction 1 : *nom à compléter*

- Entrées et sortie : *à compléter*
- Modifie ses arguments : *à compléter*
- Produit un effet observable : *à compléter*
- Renvoie toujours le même résultat pour les mêmes entrées : *à compléter*

#### Fonction 2 : *nom à compléter*

- Entrées et sortie : *à compléter*
- Modifie ses arguments : *à compléter*
- Produit un effet observable : *à compléter*
- Renvoie toujours le même résultat pour les mêmes entrées : *à compléter*

### Bonus - Tests unitaires

**1. Pourquoi un test unitaire évite-t-il généralement les appels réseau et les données partagées modifiables ?**

*à compléter*

**2. En quoi une fonction pure est-elle plus simple à tester ?**

*à compléter*

**3. Pourquoi faut-il vérifier à la fois le résultat retourné et l'absence de mutation de l'entrée ?**

*à compléter*

### Bonus - Chargement asynchrone (questions de recul)

**1. Pourquoi la valeur renvoyée par `response.json()` est-elle placée dans une variable de type `unknown` avant sa validation ?**

*à compléter*

**2. Une assertion `as Array<CrewMember>` effectuerait-elle une validation pendant l'exécution ?**

*à compléter*

**3. Quel lien peut-on faire entre le résultat de `safeParse` et l'union discriminée `MissionState` étudiée précédemment ?**

*à compléter*

## Déclaration des usages de l'IA générative

Rappel des règles du TD :

- Autorisé : demander une explication, rechercher la cause d'une erreur après une première tentative, comparer des solutions, faire relire un extrait écrit par soi-même.
- Interdit : faire générer ou modifier une fonctionnalité demandée, intégrer du code non compris ou non vérifié, transmettre une information sensible.

| Usage | Outil | Proposition retenue | Vérification effectuée |
| --- | --- | --- | --- |
| Mise en place de l'environnement (installation de Bun, `bun init`, arborescence, squelette de ce README) | Claude | Structure de projet conforme au sujet | Exécution de `bun run src/index.ts` et `bunx tsc --noEmit` sans erreur |
| *à compléter* | | | |
