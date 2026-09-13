# TD individuel - Fondations

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : **Radhi**
- Nom : **Badache**
- Adresse mail universitaire : **radhi.badache6@univ-lorraine.etu**
- Groupe de TD : **G1**
- Dépôt GitHub : [prog-web-l3-td01-foundations](https://github.com/Ratybox/prog-web-l3-td01-foundations)

## Exercices réalisés

1. Recenser les équipes d'exploration (1.1, 1.2, 1.3 et les vérifications)
2. Constituer l'équipage (2.1, 2.2, 2.3 et le point de contrôle)
3. Préparer les fiches de l'équipage (3.1, 3.2, 3.3 et le point de contrôle)
4. Mettre à jour les collaborations sans mutation (4.1, 4.2, 4.3, 4.4)
5. Décrire l'état d'une future interface (5.1, 5.2, 5.3)
6. Lire et utiliser un générique simple (6.1, 6.2, 6.3)

## Bonus réalisés

1. Tests unitaires avec `bun:test` : 19 tests répartis dans `tests/crew.test.ts`, `tests/partnerships.test.ts`, `tests/mission.test.ts` et `tests/collections.test.ts`
2. Aucun

## Exercices non réalisés

1. Aucun, les six exercices du socle obligatoire sont réalisés
2. Bonus chargement asynchrone avec Zod : non réalisé, faute de temps avant l'échéance

## Déclaration d'usage de l'IA générative

Usages réalisés avec Claude.

- installation de Bun, `bun init` et arborescence du projet réalisés avec assistance. Les premiers commits portent une co-signature Claude. Vérification : `bun run src/index.ts` et `bunx tsc --noEmit` exécutés sans erreur.
- Explications de notions, syntaxe, rôle d'une fonction, opérateurs.. Aucun code métier fourni : uniquement des pistes et des renvois à la documentation officielle TypeScript.
- Relecture de l'énoncé et état d'avancement : repérage des points manquants et de l'erreur de typage sur `role`, qui était déclaré obligatoire au lieu d'optionnel.
- Exercices et bonus : écrits par moi.
- Réponses aux questions d'observation : rédigées par moi, puis relues et reformulées avec Claude.

## Réponses aux questions d'observation

### Exercice 2

```md
1. Avec `filter`, décrivez-vous les étapes de parcours du tableau ou la propriété du résultat attendu ?
2. Dans `crewMembers.filter(isAvailable)`, quel rôle joue la fonction `isAvailable` ?
3. Les fonctions `getDisplayName`, `hasSkill` et `isAvailable` modifient-elles leurs arguments ou produisent-elles une nouvelle valeur ?
```

1. Je décris la propriété du résultat attendu, pas les étapes du parcours. Je n'écris aucune boucle : c'est `filter` qui parcourt le tableau à ma place, je me contente d'indiquer à quelle condition un élément doit être gardé.
2. `isAvailable` est le callback passé à `filter` : elle sert de condition et vérifie si un membre est disponible. Je la passe sans parenthèses, je ne l'appelle pas moi-même. C'est `filter` qui l'appelle une fois par membre et qui garde ceux pour lesquels elle renvoie `true`.
3. Elles produisent une nouvelle valeur. Elles se contentent de lire le `CrewMember` reçu pour en tirer une chaîne ou un booléen, elles ne le modifient jamais.

### Exercice 3

```md
1. Quelles fonctions de cette partie calculent une valeur ?
2. Quelle instruction produit un effet observable à l'extérieur du calcul ?
3. Pour les mêmes tableaux `teams` et `crewMembers`, les fonctions écrites produisent-elles toujours les mêmes résultats ?
```

1. Les trois : `findTeamById`, `getTeamName` et `createCrewCards`. Chacune calcule un résultat et le renvoie, sans rien afficher ni modifier.
2. C'est le `console.table(crewCards)` dans `index.ts`. Les fonctions de `crew.ts` se contentent de renvoyer une valeur, c'est `index.ts` qui décide de l'afficher.
3. Oui. Il n'y a ni hasard, ni date, ni compteur gardé entre deux appels. Tant que les deux tableaux ne changent pas, les mêmes entrées donnent les mêmes résultats.

### Exercice 4

```md
1. Pourquoi `auroreTeam !== updatedAurore` alors que les deux objets représentent l'équipe Aurore ?
2. Quels éléments du tableau retourné par `updateTeamPartnership` conservent leur référence ? Lesquels obtiennent une nouvelle référence ?
3. En quoi l'absence de mutation facilite-t-elle la comparaison entre l'ancien état et le nouvel état ?
4. Que pourrait-il arriver si deux parties d'un programme partageaient le même objet et que l'une d'elles le modifiait directement ?
```

1. Parce que `addPartner` ne modifie pas l'équipe reçue, elle en construit une nouvelle avec le spread. `!==` compare les références, pas le contenu.
2. Seule l'équipe dont l'`id` correspond obtient une nouvelle référence. Les cinq autres sont renvoyées telles quelles par le `map` et gardent la leur. Le tableau, lui, est toujours neuf.
3. Il suffit de comparer avec `!==` pour savoir ce qui a changé, sans regarder le contenu. Avec une mutation, l'ancien et le nouveau seraient le même objet et la comparaison ne dirait plus rien.
4. L'autre partie verrait ses données changer sans être prévenue. Le bug serait difficile à trouver, parce que la cause se trouve ailleurs que là où il apparaît.

### Exercice 5

```md
1. La fonction `describeMissionState` réalise-t-elle elle-même un chargement ou décrit-elle le résultat à produire pour un état donné ?
2. Pourquoi séparer les trois états plutôt que d'utiliser simultanément un booléen `isLoading`, des données optionnelles et un message d'erreur optionnel ?
3. Quels états incohérents l'union discriminée rend-elle impossibles à représenter ?
```

1. Elle ne charge rien. Elle reçoit un état déjà constitué et renvoie la phrase qui lui correspond.
2. Parce que rien n'empêcherait d'avoir `isLoading: true` et un message d'erreur en même temps. L'union discriminée n'autorise qu'une forme à la fois, et `status` dit laquelle.
3. Un succès sans `data`, une erreur sans `message`, ou un chargement qui porterait des données. C'est aussi pour ça que TypeScript refuse `state.data` avant la vérification du `status`.

### Exercice 6

```md
1. Que représente `T` ?
2. Que garantit `extends { id: number }` ?
3. Pourquoi le retour peut-il être `undefined` ?
```

1. `T` est un paramètre de type : il représente le type des éléments du tableau qu'on passe. TypeScript le déduit à l'appel, `Team` pour `teams`, `CrewMember` pour `crewMembers`.
2. Que le type utilisé possède bien un `id` de type `number`. Sans cette contrainte, `item.id` serait refusé.
3. Parce que `find` peut ne rien trouver. C'est ce qui m'oblige à vérifier le résultat avant de l'utiliser, comme avec `trouverAlonzo`.

### Bilan

```md
Choisissez deux fonctions écrites pendant le TD et indiquez pour chacune :
- ses entrées et sa sortie ;
- si elle modifie ou non ses arguments ;
- si elle produit un effet observable ;
- si elle renvoie toujours le même résultat pour les mêmes entrées.
```

1. `getDisplayName` (dans `src/crew.ts`)
   - Entrées et sortie : un `CrewMember` en entrée, une `string` en sortie.
   - Modifie ses arguments : non, elle se contente de lire le membre.
   - Effet observable : aucun, c'est `index.ts` qui affiche.
   - Même résultat pour les mêmes entrées : oui.

2. `addPartner` (dans `src/partnerships.ts`)
   - Entrées et sortie : un `Team` et un `number` en entrée, un `Team` en sortie.
   - Modifie ses arguments : non, elle construit une nouvelle équipe avec le spread.
   - Effet observable : aucun.
   - Même résultat pour les mêmes entrées : oui.

### Bonus : tests unitaires

```md
1. Pourquoi un test unitaire évite-t-il généralement les appels réseau et les données partagées modifiables ?
2. En quoi une fonction pure est-elle plus simple à tester ?
3. Pourquoi faut-il vérifier à la fois le résultat retourné et l'absence de mutation de l'entrée ?
```

1. Parce qu'un test doit donner le même résultat à chaque exécution. Un appel réseau peut échouer, et une donnée partagée peut avoir été changée par un test précédent. C'est pour ça que je construis mes équipes et mes membres dans chaque test.
2. Parce qu'elle ne dépend que de ce qu'on lui passe. Il suffit de l'appeler et de comparer la sortie, sans rien préparer avant ni nettoyer après.
3. Parce qu'une fonction peut renvoyer le bon résultat tout en ayant modifié son entrée au passage. Le test passerait quand même, et le bug n'apparaîtrait que plus loin.

### Bonus : chargement asynchrone

```md
1. Pourquoi un test unitaire évite-t-il généralement les appels réseau et les données partagées modifiables ?
2. En quoi une fonction pure est-elle plus simple à tester ?
3. Pourquoi faut-il vérifier à la fois le résultat retourné et l'absence de mutation de l'entrée ?
```

- Bonus non réalisé.
