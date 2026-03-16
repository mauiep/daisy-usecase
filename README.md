Ce projet est un test technique fait en [Next.js](https://nextjs.org).

## Pour commencer

Le projet se lance avec le gestionnaire de packet javascript installé :

```bash
npm install
npm rundev
```

Ouvrez l'url [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

Le projet est également hébergé avec vercel a l'adresse suivante : [https://daisy-usecase.vercel.app/](https://daisy-usecase.vercel.app/)

## Problème

J'ai choisi l'étude de cas A : 

```bash
Un artiste arrive le matin, ouvre Daisy Pro, et veut marquer en 30 secondes qui est présent dans son atelier du jour.
Implémente :
→ la liste des ateliers du jour (créneau, studio, remplissage)
→ le détail d'un atelier avec la liste des participants
→ l'action marquer présent / absent.
```

## Stack techniques

- Next.js (Routeur)
- React
- TailwindCSS
- Routes API Next pour le backend "fictif"

## Choix

J'ai choisi d'utiliser une maquette simulant une base de donnée accessible via ces routes API :
```
GET /api/workshops
GET /api/workshops/:id
GET /api/workshops/:id/participants
PATCH /api/workshops/:id/participants/:participantId/attendance
```

Pour les composants React :
- WorkshopCard : affiche un résumé de l'atelier (titre, heure, compteur de participants) et permet de garder la liste des ateliers simple et réutilisable.
- ParticipantRow : représente un seul participant avec son nom et son AttendanceToggle.
- AttendanceToggle : contient les boutons de présence et permet d'isoler la logique d'appel API pour modifier celle-ci.

Au niveau UI j'ai visé le rendu mobile en premier lieu, insistant sur une vue verticale et des boutons larges.

J'ai repris le code couleur de Daisy : 
- Violet #800080 (logo / nombre de participants)
- Corail #F24E3E (jauge de présence)
- Crème #FCF8E8 (fond)
- Noir (texte)

Les données mockées ainsi que les routes API permettent de simuler un backend réaliste et facilitera une potentielle intégration de cette feature.
