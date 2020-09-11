# Trip-Manager

### `npm install`

Va permettre d'installer toutes les dependances présente dans le Json.

### `npm start`

Va permettre d'exécuter le mode de développement.<br />

l'application s'ouvrira automatiquement sur le port [http://localhost:3000](http://localhost:3000)

la page s'actualisera à chaque sauvegarde du document.<br />
La moindre erreur qui pourrait arriver sera explicitement indiquée dans la console.


---

## Ce Projet été ma partie Front-end de mon stage d’application suite à une année de formation en développement web et web mobile. 

---

Dans l’entreprise ce sont les personnes chargées des opérations qui saisissent manuellement les trajets quotidiens de chaque plombier.

Ces personnes organisaient la journée selon les horaires et les codes postaux où ils devaient se déplacer, tout ça dans le but d’effectuer des trajets optimisés. Ce travail étant laborieux et minutieux mais surtout chronophage, le chef de projet souhaitait donc transformer ce planning en une carte visuelle sur laquelle serait représentés les trajets quotidiens de chaque plombier via des codes couleur, mais également avoir une visibilité sur les interventions à venir. 

Le projet repose sur trois fonctionnalités principales :

-  je dois utiliser l’agenda de l’entreprise qui est sur Google Calendar, où l’agenda de tous les plombiers est réuni, avec leurs interventions journalières, les adresses correspondantes, la description de l’intervention et les coordonnées des clients.

- Je dois utiliser l’api de geocoding Google ; une fois que j’ai récupéré le Google agenda, je dois utiliser les adresses postales récupérées pour les transformer en latitude et longitude, ce qui va me permettre de placer ensuite des marqueurs sur ma map

- Je dois utiliser Google map pour afficher une map centrée sur Toulouse qui est le lieu d’intervention de Selfcity et donc placer les marqueurs correspondant aux itinéraires des plombiers.