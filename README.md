# WIK-DPS-TP01
    DevOps TP 1: Initialiser un server avec RUST et/ou TypeScipt

# SOMMAIRE
- [WIK-DPS-TP01](#wik-dps-tp01)
- [SOMMAIRE](#sommaire)
  - [I. Sujet (checkList Rust & TS)](#i-sujet-checklist-rust--ts)
  - [II. Lancement pour RUST](#ii-lancement-pour-rust)
- [III. Toutes les étapes du TS](#iii-toutes-les-étapes-du-ts)
  - [1. Installation et setup](#1-installation-et-setup)
  - [2. Lancement du projet](#2-lancement-du-projet)


## I. Sujet (checkList Rust & TS)

- [X] Rendu sur github avec nom de repository WIK-DPS-TP01
- [X] Mettre en place son environnement de developpement base de projet avec le moins de dépendances possibles
- [ ] Développer une API les headers de la requêtes <b>HTTP GET</b> 
  - [X] sur <b>/ping</b>
  - [ ] format <b>JSON</b>
- [ ] le serveur doit écouter sur un port configurable via la variable d'environnement PING_LISTEN_PORT
- [ ] Réponse vide avec erreur:
  - [X] code 404 si autre que GET /ping
  - [ ] code 500 si erreur inconnue
- [X] Réalisation d'un README avec une doc sur le lancement

## II. Lancement pour RUST

Afin de lancer notre server, il suffit de faire un ```cargo run``` à la racine de notre projet.
Puis il faut se rendre sur http://localhost:8080 ou alors effectuer un ```curl http://localhost:8080 -v```

Normalement avec cette commande, vous obtiendrez une erreur 404 NOT FOUND. C'est <u>normal</u>. EN effet, nous devions retourner quelque chose seulement sur <b>/ping</b>.

Essayez maintenant avec http://localhost:8080/ping


# III. Toutes les étapes du TS

## 1. Installation et setup

Ici, il est seulement question de suivre une liste d'étape précise pour mettre en place un projet en typescript. Afin de ne rien ommetre, il est conseillé de suivre ce [tuto](https://medium.com/swlh/build-a-rest-api-with-express-js-and-typescript-dc2c8da89c52) jusqu'à la fin.

## 2. Lancement du projet

Afin de lancer le projet, il suffit d'exécuter les commandes suivantes
```bash
npm install

npm run start
```