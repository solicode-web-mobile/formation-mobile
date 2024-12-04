### **Contexte**  

Solicode, centre de formation partenaire de l’OFPPT, mise sur une pédagogie active basée sur des projets hebdomadaires. Chaque semaine, les apprenants doivent livrer plusieurs productions :  

- **Code source**,  
- **Présentation**,  
- **Rapport détaillé**,  
- **Tutoriel de réalisation**,  
- **Prototype final**,  
- **Mini-projet complémentaire**.  

Les cursus alternent entre **développement mobile (Android avec Kotlin)** et **développement web avec Laravel**.  

Nous projetons de concevoir une formation complète dédiée au **développement Android avec Jetpack Compose**, organisée en tutoriels progressifs et mini-projets pratiques.  

---  

### **Votre rôle**  

Vous êtes un formateur expérimenté, fort de 10 années d'expertise en **développement Android et Kotlin**. Votre mission est de guider les apprenants dans l'acquisition des concepts essentiels et avancés du développement mobile.  

---  

### **Objectifs pédagogiques**  

1. Rédiger des tutoriels structurés et progressifs pour enseigner le développement Android.  
2. Proposer un mini-projet à la fin de chaque module pour renforcer les acquis.  
3. Concevoir un projet final intégrant l’ensemble des compétences abordées.  
4. S’appuyer sur les recommandations officielles d’Android Studio et utiliser **Jetpack Compose** comme outil principal.  
5. Intégrer une explication théorique pour chaque nouveau concept présenté.  

---  

### **Contraintes et exigences**  

1. **Application cible :** Développer une application fonctionnelle de gestion de tâches (TODO list) tout au long des tutoriels.  
2. **Qualité du code :** Fournir un code exécutable dans Android Studio, bien structuré et commenté.  
3. **Approche pédagogique :**  
   - Identifier les fichiers et sections modifiés.  
   - Expliquer chaque concept avant son implémentation.  
   - Éviter les répétitions inutiles des notions déjà couvertes.  
4. **Technologies requises :**  
   - Utilisation obligatoire de **Jetpack Compose** et de **Material 3** (`androidx.compose.material3`).  
5. **Mini-projets :** Reposant uniquement sur les notions déjà enseignées.  
6. **Gestion des dépendances :** Utiliser un catalogue clair dans `build.gradle`, par exemple :  
   ```kotlin  
   implementation(libs.androidx.navigation.compose)  
   ```  

- Définir une architecture claire pour les dossiers et fichiers de chaque tutoriel.  
- le tutoriel ne doit pas contenire le mini-projet , il sera présenter dans dans un chapitre nommé : mini-projet.

---  

### **Format attendu pour un tutoriel**  

---  
# Tutoriel X : [Titre du tutoriel]  

## Objectif pédagogique  
## Concepts abordés  
## Explication théorique  
## Étape 1  
## Étape 2  
## Étape N  
## Exercice  
## Conclusion  

---  

### **Plan des tutoriels**  

```

### **Module 1 : Découverte d'Android avec Kotlin et Jetpack Compose**  
**Objectif pédagogique :** Familiariser les apprenants avec Kotlin, Android Studio, et Jetpack Compose pour créer leur première application simple.

#### **Tutoriel 1 : Introduction à Kotlin**  
- **Concepts abordés :** Syntaxe de base, variables, types de données, fonctions.  
- **Tags :** Kotlin, Programmation de base.  
- **Résumé :** Écrire un premier programme et comprendre les fondamentaux du langage.

#### **Tutoriel 2 : Configuration d'Android Studio**  
- **Concepts abordés :** Installation, configuration, création d'un projet Android, exécution sur émulateur.  
- **Tags :** Android Studio, Environnement de développement.  
- **Résumé :** Installer Android Studio et préparer l'environnement de développement.

#### **Tutoriel 3 : Création de l’interface avec Jetpack Compose**  
- **Concepts abordés :** Composants de base (Text, Image, Button), structuration de la mise en page.
- **Tags :** Jetpack Compose, Interface utilisateur.  
- **Résumé :** Construire une interface simple avec Compose avec bouton click sans état

#### **Tutoriel 3Plus : Boutons Interactifs avec Jetpack Compose**  
- **Concepts abordés :** Création de boutons interactifs, gestion des Intents, actions utilisateur simples.  
- **Tags :** Jetpack Compose, Android, Intents, UI Interactive.  
- **Résumé :** Apprenez à créer des boutons interactifs dans une interface Compose pour ouvrir un site web, envoyer un email ou appeler un numéro de téléphone, tout en personnalisant leur apparence et leur comportement.  

#### **Mini-projet : Carte de visite interactive**  
- **Description :** Créer une application de carte de visite dynamique. L'application affichera des informations personnelles stylisées (nom, profession, coordonnées) et inclura des boutons interactifs permettant des actions simples, comme ouvrir un site web, envoyer un email ou appeler un numéro de téléphone.  
- **Lien avec le projet final :** Introduction aux composants d'interface utilisateur, à la mise en page avec Jetpack Compose, et aux interactions utilisateur.

---

### **Module 2 : Créer l’interface utilisateur et gérer l’état**  
**Objectif pédagogique :** Approfondir les connaissances en Kotlin et maîtriser la gestion de l'état dans une interface utilisateur.

#### **Tutoriel 4 : Principes avancés de Kotlin**  
- **Concepts abordés :** Instructions conditionnelles, nullabilité, classes, objets, lambdas.  
- **Tags :** Kotlin, Programmation orientée objet.  
- **Résumé :** Maîtriser les concepts avancés pour écrire un code robuste.

#### **Tutoriel 5 : Interaction avec l'interface utilisateur**  
- **Concepts abordés :** Gestion des clics, ajout de boutons.
- **Tags :** UI, Gestion de l'état, Jetpack Compose.  
- **Résumé :** Créer des applications interactives et réactives.

#### **Tutoriel 6 : Gestion d'états réactifs et des flux de données**  
- **Concepts abordés :** Observateurs, `State`, `StateFlow`, `Flow`.  
- **Tags :** Gestion de l'état, Réactivité, Jetpack Compose, Coroutines.  
- **Résumé :** Apprendre à gérer efficacement l’état et les flux de données pour construire des applications réactives et modernes avec Jetpack Compose.  
  


---

### **Module 3 : Affichage de listes et Material Design**  
**Objectif pédagogique :** Créer des listes dynamiques et appliquer les principes de Material Design pour une interface moderne.

#### **Tutoriel 7 : Concepts avancés de Kotlin (Collections et génériques)**  
- **Concepts abordés :** Collections, génériques, extensions, fonctions d'ordre supérieur.  
- **Tags :** Collections, Kotlin.  
- **Résumé :** Gérer des collections et manipuler les données efficacement.

#### **Tutoriel 8 : Création de listes avec Jetpack Compose**  
- **Concepts abordés :** Affichage de listes déroulantes, recyclage des vues, gestion des clics.  
- **Tags :** Lists, Jetpack Compose.  
- **Résumé :** Afficher une liste de données et interagir avec les éléments.

#### **Tutoriel 9 : Introduction à Material Design**  
- **Concepts abordés :** Thématisation, couleurs, formes, typographie, accessibilité.  
- **Tags :** Material Design, UI/UX.  
- **Résumé :** Créer une interface utilisateur moderne et attrayante.

#### **Mini-projet : Application de liste d'affirmations**  
- **Description :** Développer une application affichant une liste de citations inspirantes.  
- **Lien avec le projet final :** Comprendre la création de listes et l'application des thèmes.

---

### **Module 4 : Navigation et architecture**  
**Objectif pédagogique :** Maîtriser la navigation entre plusieurs écrans et les bases de l’architecture MVVM.

#### **Tutoriel 10 : Navigation dans Jetpack Compose**  
- **Concepts abordés :** Navigation multi-écrans, transfert de données entre composables.  
- **Tags :** Navigation, Jetpack Compose.  
- **Résumé :** Créer des applications multi-écrans et gérer la navigation.

#### **Tutoriel 10+ : Ajouter un NavigationDrawer avec Jetpack Compose au Turoriel 10**  
- **Concepts abordés :** Apprendre à intégrer un menu de navigation latérale (*NavigationDrawer*) dans une application Android utilisant Jetpack Compose pour permettre une navigation fluide entre plusieurs écrans.
- **Tags :** 
- **Résumé :** 

#### **Tutoriel 11 : Cycle de vie d'une activité Android**  
- **Concepts abordés :** Cycle de vie d'une activité Android, journalisation avec Logcat, gestion de l'état avec `rememberSaveable`, impact des modifications de configuration.  
- **Tags :** Cycle de vie, Android, Logcat, état, rememberSaveable.  
- **Résumé :** Comprendre et implémenter le cycle de vie d'une activité Android, diagnostiquer les transitions entre les états grâce à la journalisation, et gérer les modifications de configuration pour préserver les données utilisateur.


#### **Tutoriel 12 : Utilisation de ViewModel et gestion d'état dans Jetpack Compose**  
- **Concepts abordés :** Introduction à ViewModel, gestion de l'état avec `StateFlow`, séparation des responsabilités entre UI et logique métier, immutabilité de l'état, et persistance de l'état lors des changements de configuration.  
- **Tags :** ViewModel, Jetpack Compose, StateFlow, UDF, gestion d'état.  
- **Résumé :** Découvrir comment utiliser ViewModel pour gérer l'état dans une application Jetpack Compose, tout en suivant un flux de données unidirectionnel. Ce tutoriel explore la persistance de l'état, l'immuabilité, et la gestion des événements utilisateur pour construire des applications réactives et robustes.  



---

### **Module 5 : Connexion à Internet et récupération de données**  
**Objectif pédagogique :** Apprendre à récupérer des données en ligne et les afficher.

#### **Tutoriel 13 : Récupération de données via API REST**  
- **Concepts abordés :** Requêtes HTTP, coroutines, JSON.  
- **Tags :** API, REST, Coroutines.  
- **Résumé :** Connecter l'application à des sources de données en ligne.


---

### **Module 6 : Persistance des données locales**  
**Objectif pédagogique :** Stocker les données localement à l'aide de Room et DataStore.

#### **Tutoriel 14 : Utilisation de Room pour la persistance**  
- **Concepts abordés :** Bases de données SQLite, DAO, Room.  
- **Tags :** Persistance, Room, SQLite.  
- **Résumé :** Sauvegarder et récupérer des données localement.


---

### **Projet final : Application To-Do List complète**  
**Objectif pédagogique :** Combiner les compétences acquises pour développer une application complète de gestion de tâches.

- **Fonctionnalités :**  
  - Gestion des tâches (CRUD)  
  - Interface utilisateur attrayante avec Material Design  
  - Navigation entre écrans  
  - Persistance locale avec Room  
  - Possibilité de connexion à une API pour synchroniser les tâches  


```  


## **Travail à réaliser :**  

proposer et rédiger le **Mini-projet de module 2** 

- Le mini projet doit appliquer les notions aborder dans les Tutoriels 4, 5, et 6.
- Doit être une étape de réalisation de projet finale
- Ne doit pas utiliser une notion qui sera utiliser dans les modules suivant: 
  - Module 3 **Module 3 : Affichage de listes et Material Design**  
  - Module 4 **Module 4 : Navigation et architecture** 
  - Module 5 **Module 5 : Connexion à Internet et récupération de données**  
  - Module 6 **Module 6 : Persistance des données locales**  


- Essayer d'utliser rememberSaveable  au lieux de StateFlow
- Essayer de ne pas utiliser ModelView
- Donner l'architecture des dossiers et fichiers 
- Donner le code finale de MainActivité
- Donner des indication de solution pour chaque fichier à créer  


