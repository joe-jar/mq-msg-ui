# MQ Message UI - Frontend

Une application Angular 17 permettant de visualiser les messages techniques issus d’IBM MQ et de gérer les partenaires de manière simple et efficace. Elle s’appuie sur Angular Material pour une interface moderne et réactive.

## Technologies utilisées

- Angular 17
- Angular Material
- TypeScript
- RxJS
- Docker

## Prérequis

  Deux modes d’utilisation sont possibles selon vos besoins :
  
  ###  Avec Docker (recommandé)
  
  - **Docker** : Permet de construire et exécuter l’application sans installer Angular localement. Idéal pour un déploiement rapide dans un environnement isolé.
  
  ###  Sans Docker (pour le développement local)
  
  - **Node.js** & **npm** && **Angular CLI**" : Requis pour installer les dépendances et exécuter l’application via Angular CLI en mode développement.


## Structure de l'application

- Utilise **standalone components** et **lazy loading** pour une architecture moderne et modulaire.
- Contient deux fonctionnalités principales :
  - **Messages** : Lecture des messages paginés provenant d’IBM MQ, avec accès aux détails.
  - **Partenaires** : Gestion (list,ajout,suppression) des partenaires via un modale pour une meilleure expérience utilisateur.
- Une **navigation centrale** permet de passer facilement d’une vue à l’autre.

## Installation et Démarrage

### 1. Cloner le dépôt

```bash
git clone <URL_DU_REPOT>
cd mq-msg-ui
```

### 2. Exécution via Docker

#### Construction de l’image :

```bash
docker build -t angular-docker .
```

#### Lancement de l’application :

```bash
docker run -p 4200:4200 angular-docker
```

Cela lance l’application sur [http://localhost:4200](http://localhost:4200), utilisable immédiatement et connectée par défaut à l’API backend. Le port **4200** est celui autorisé par la configuration **CORS** de l'application backend pour permettre la communication entre les deux services.

### 3. Exécution en local (optionnel)

```bash
npm install
ng serve
```

Accédez ensuite à l’application sur [http://localhost:4200](http://localhost:4200)


## Dépendances principales

- `@angular/material`
- `@angular/router`
- `@angular/forms`
- `rxjs`

