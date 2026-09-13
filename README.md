# TD individuel - Fondations

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : **Radhi**
- Nom : **Badache**
- Adresse mail universitaire : **radhi.badache6@univ-lorraine.etu**
- Groupe de TD : **G1**

## Exercices réalisés

1. Recenser les équipes d'exploration (1.1, 1.2, 1.3 — `console.table(teams)` restant à ajouter)
2. **à compléter**
3. **à compléter**
4. **à compléter**
5. **à compléter**
6. **à compléter**

## Bonus réalisés

1. **à compléter**
2. **à compléter**

## Exercices non réalisés

1. *(exercice 1 réalisé)*
2. Constituer l'équipage — types et données en place, fonctions `getDisplayName`, `hasSkill`, `isAvailable` et utilisations en callbacks restantes
3. Préparer les fiches de l'équipage
4. Mettre à jour les collaborations sans mutation
5. Décrire l'état d'une future interface
6. Lire et utiliser un générique simple

## Déclaration d'usage de l'IA générative

- Mise en place de l'environnement (installation de Bun, `bun init`, arborescence du projet, squelette de ce README) — outil : Claude. Vérification : `bun run src/index.ts` et `bunx tsc --noEmit` exécutés sans erreur.
- Lecture de l'énoncé et état d'avancement du travail déjà écrit (relecture, repérage des points manquants et du typage de `role`) — outil : Claude. Vérification : relecture de l'énoncé page par page et contrôle dans le code.
- Mise en forme de ce README au format imposé — outil : Claude. Aucune réponse aux questions d'observation n'a été générée.
- **à compléter**

## Réponses aux questions d'observation

### Exercice 2

```md
1. Avec `filter`, décrivez-vous les étapes de parcours du tableau ou la propriété du résultat attendu ?
2. Dans `crewMembers.filter(isAvailable)`, quel rôle joue la fonction `isAvailable` ?
3. Les fonctions `getDisplayName`, `hasSkill` et `isAvailable` modifient-elles leurs arguments ou produisent-elles une nouvelle valeur ?
```

1. **à compléter**
2. **à compléter**
3. **à compléter**

### Exercice 3

```md
1. Quelles fonctions de cette partie calculent une valeur ?
2. Quelle instruction produit un effet observable à l'extérieur du calcul ?
3. Pour les mêmes tableaux `teams` et `crewMembers`, les fonctions écrites produisent-elles toujours les mêmes résultats ?
```

1. **à compléter**
2. **à compléter**
3. **à compléter**

### Exercice 4

```md
1. Pourquoi `auroreTeam !== updatedAurore` alors que les deux objets représentent l'équipe Aurore ?
2. Quels éléments du tableau retourné par `updateTeamPartnership` conservent leur référence ? Lesquels obtiennent une nouvelle référence ?
3. En quoi l'absence de mutation facilite-t-elle la comparaison entre l'ancien état et le nouvel état ?
4. Que pourrait-il arriver si deux parties d'un programme partageaient le même objet et que l'une d'elles le modifiait directement ?
```

1. **à compléter**
2. **à compléter**
3. **à compléter**
4. **à compléter**

### Exercice 5

```md
1. La fonction `describeMissionState` réalise-t-elle elle-même un chargement ou décrit-elle le résultat à produire pour un état donné ?
2. Pourquoi séparer les trois états plutôt que d'utiliser simultanément un booléen `isLoading`, des données optionnelles et un message d'erreur optionnel ?
3. Quels états incohérents l'union discriminée rend-elle impossibles à représenter ?
```

1. **à compléter**
2. **à compléter**
3. **à compléter**

### Exercice 6

```md
1. Que représente `T` ?
2. Que garantit `extends { id: number }` ?
3. Pourquoi le retour peut-il être `undefined` ?
```

1. **à compléter**
2. **à compléter**
3. **à compléter**

### Bilan

```md
Choisissez deux fonctions écrites pendant le TD et indiquez pour chacune :
- ses entrées et sa sortie ;
- si elle modifie ou non ses arguments ;
- si elle produit un effet observable ;
- si elle renvoie toujours le même résultat pour les mêmes entrées.
```

1. **à compléter**
2. **à compléter**

### Bonus : tests unitaires

- **à compléter**

### Bonus : chargement asynchrone

```md
1. Pourquoi un test unitaire évite-t-il généralement les appels réseau et les données partagées modifiables ?
2. En quoi une fonction pure est-elle plus simple à tester ?
3. Pourquoi faut-il vérifier à la fois le résultat retourné et l'absence de mutation de l'entrée ?
```

- **à compléter**
