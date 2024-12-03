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
- **Résumé :** Construire une interface simple avec Compose.

#### **Mini-projet : Carte de visite interactive**  
- **Description :** Créer une application de carte de visite dynamique.  
- **Lien avec le projet final :** Introduction aux composants d'interface et à la mise en page.

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

#### **Tutoriel 6 : Gestion de l’état dans Jetpack Compose**  
- **Concepts abordés :** États, immutabilité
- **Tags :** État, Jetpack Compose.  
- **Résumé :** Contrôler l'état et la réactivité de l'application.

#### **Mini-projet : Application de calcul de pourboire**  
- **Description :** Développer une application pour calculer les pourboires avec gestion d'état.  
- **Lien avec le projet final :** Comprendre les bases de la gestion de l'état pour une To-Do List.

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


#### **Mini-projet : Application multi-écrans My City**  
- **Description :** Concevoir une application avec plusieurs écrans de navigation.  
- **Lien avec le projet final :** Structurer la To-Do List en plusieurs vues.

---

### **Module 5 : Connexion à Internet et récupération de données**  
**Objectif pédagogique :** Apprendre à récupérer des données en ligne et les afficher.

#### **Tutoriel 13 : Récupération de données via API REST**  
- **Concepts abordés :** Requêtes HTTP, coroutines, JSON.  
- **Tags :** API, REST, Coroutines.  
- **Résumé :** Connecter l'application à des sources de données en ligne.

#### **Mini-projet : Application Bookshelf**  
- **Description :** Développer une bibliothèque virtuelle avec des données issues d’une API.  
- **Lien avec le projet final :** Intégrer des tâches récupérées depuis un serveur.

---

### **Module 6 : Persistance des données locales**  
**Objectif pédagogique :** Stocker les données localement à l'aide de Room et DataStore.

#### **Tutoriel 14 : Utilisation de Room pour la persistance**  
- **Concepts abordés :** Bases de données SQLite, DAO, Room.  
- **Tags :** Persistance, Room, SQLite.  
- **Résumé :** Sauvegarder et récupérer des données localement.

#### **Mini-projet : Application de gestion d’horaires de bus**  
- **Description :** Utiliser Room pour gérer une base de données locale.  
- **Lien avec le projet final :** Sauvegarder les tâches dans une base de données locale.

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

**Refonte et amélioration du Tutoriel 5 : Interaction avec l'interface utilisateur**

- **Mise à jour de l'objectif du tutoriel** : Réviser et clarifier l'objectif principal pour mettre davantage l'accent sur la gestion de l'état dans Jetpack Compose. 

- **Ajout du concept d'état** : Intégrer une section dédiée à l'introduction et à l'explication du concept d'état, essentiel pour la construction d'interfaces interactives.

- **Explication détaillée de l'état (State) dans Jetpack Compose** : Définir clairement ce qu'est l'état (State), son rôle, et son importance dans la gestion des données dynamiques des interfaces utilisateur.

- **Présentation approfondie de `remember`** : Expliquer le fonctionnement de `remember`, son utilité pour conserver les données en mémoire à travers les recompositions, et son importance dans l'optimisation des performances.

- **Analyse des risques de ne pas utiliser `remember`** : Illustrer les problèmes potentiels liés à l'absence de `remember`, tels que la perte de données ou les comportements imprévus lors des recompositions de l'interface utilisateur. Utiliser des exemples concrets pour rendre cette notion plus accessible. 

### Version actuel : 

```md
---
reference: m2-créer-interface-utilisateur-tuto5
slug: tuto5
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: Tutoriel 5 - Interaction avec UI v1.1
description: ''
order: 94
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto5
layout: chapters
---


# Tutoriel 5 : Interaction avec l'interface utilisateur  

## Objectif pédagogique  
Apprendre à interagir avec les éléments de l'interface utilisateur dans Jetpack Compose, tout en maîtrisant la gestion des événements comme les clics.  

---

## Concepts abordés  
1. **Gestion des événements utilisateur :**  
   - Capturer les clics sur un bouton ou d'autres composants.  
   - Modifier l'état de l'interface utilisateur en réponse aux interactions.  

2. **Composants interactifs dans Jetpack Compose :**  
   - Boutons, TextFields, Checkboxes, etc.  

---

## Explication théorique  

### **1. Gestion des événements dans Compose**  
Dans Jetpack Compose, les événements utilisateur sont gérés via des lambda expressions. Un état mutable est utilisé pour refléter les changements d'interface.  

Exemple basique :  
```kotlin  
@Composable  
fun Greeting() {  
    var text by remember { mutableStateOf("Bonjour !") }  
  
    Button(onClick = { text = "Clique détecté !" }) {  
        Text(text)  
    }  
}  
```  
Ici, `remember` permet de maintenir la valeur d'état entre les recompositions.  

---

### **2. Introduction à quelques composants interactifs**  

#### **Boutons :**  
Permettent d'exécuter une action lorsqu'ils sont cliqués.  
```kotlin  
Button(onClick = { /* Action */ }) {  
    Text("Cliquez ici")  
}  
```  

#### **TextFields :**  
Utilisés pour la saisie de texte par l'utilisateur.  
```kotlin  
var text by remember { mutableStateOf("") }  
TextField(value = text, onValueChange = { text = it })  
```  

#### **Checkboxes :**  
Représentent des options activables/désactivables.  
```kotlin  
var checked by remember { mutableStateOf(false) }  
Checkbox(checked = checked, onCheckedChange = { checked = it })  
```  

---

## Étapes pratiques  

### **Étape 1 : Ajouter un bouton interactif**  
1. Créez un fichier `InteractiveScreen.kt` dans le dossier `ui/screens`.  
2. Ajoutez un composable qui affiche un bouton et un texte mis à jour en fonction des clics.  

Code :  
```kotlin  
@Composable  
fun InteractiveButton() {  
    var count by remember { mutableStateOf(0) }  
    Column(horizontalAlignment = Alignment.CenterHorizontally) {  
        Text("Clics : $count")  
        Button(onClick = { count++ }) {  
            Text("Cliquez-moi")  
        }  
    }  
}  
```  

---

### **Étape 2 : Utiliser un TextField pour capturer du texte**  
Ajoutez un composable pour capturer et afficher une chaîne de caractères saisie par l'utilisateur.  

Code :  
```kotlin  
@Composable  
fun TextInputExample() {  
    var text by remember { mutableStateOf("") }  
    Column {  
        TextField(value = text, onValueChange = { text = it }, label = { Text("Entrez votre nom") })  
        Text("Bonjour, $text !")  
    }  
}  
```  

---

### **Étape 3 : Combiner plusieurs composants**  
Créez une interface interactive qui combine un TextField, un Button, et un Checkbox.  

Code :  
```kotlin  
@Composable  
fun InteractiveForm() {  
    var name by remember { mutableStateOf("") }  
    var isSubscribed by remember { mutableStateOf(false) }  
  
    Column {  
        TextField(value = name, onValueChange = { name = it }, label = { Text("Nom") })  
        Row(verticalAlignment = Alignment.CenterVertically) {  
            Checkbox(checked = isSubscribed, onCheckedChange = { isSubscribed = it })  
            Text("Je veux recevoir des notifications.")  
        }  
        Button(onClick = {  
            // Action après le clic  
        }) {  
            Text("Soumettre")  
        }  
    }  
}  
```  

---

## Exercice pratique  

### **Création d’une mini-formulaire utilisateur**  
**Objectif :** Développez une interface permettant à l'utilisateur d'entrer son nom et d'indiquer s'il accepte les conditions générales.  

- **Éléments requis :**  
  1. TextField pour capturer le nom.  
  2. Checkbox pour l'acceptation des conditions.  
  3. Bouton pour valider l'enregistrement.  
  4. Affichage d’un message de confirmation après validation.  

#### **Solution attendue :**  
```kotlin  
@Composable  
fun UserForm() {  
    var name by remember { mutableStateOf("") }  
    var accepted by remember { mutableStateOf(false) }  
    var message by remember { mutableStateOf("") }  
  
    Column {  
        TextField(value = name, onValueChange = { name = it }, label = { Text("Votre nom") })  
        Row(verticalAlignment = Alignment.CenterVertically) {  
            Checkbox(checked = accepted, onCheckedChange = { accepted = it })  
            Text("J'accepte les conditions générales")  
        }  
        Button(onClick = {  
            message = if (accepted) "Merci, $name, vous êtes inscrit !" else "Veuillez accepter les conditions."  
        }) {  
            Text("S'inscrire")  
        }  
        if (message.isNotEmpty()) {  
            Text(message)  
        }  
    }  
}  
```  

---

## Conclusion  
Ce tutoriel vous a introduit aux interactions de base avec l’interface utilisateur dans Jetpack Compose. Vous êtes maintenant capable de gérer les clics et d'intégrer plusieurs composants interactifs dans une application.  

---  

### **Mini-projet : Application de calcul de pourboire**  
**Description :** Créez une application permettant à l'utilisateur de :  
1. Saisir le montant de la facture.  
2. Sélectionner un pourcentage de pourboire.  
3. Calculer le montant total et afficher les résultats.  

---  

Ce tutoriel et son exercice pratique fourniront une base solide pour aborder la gestion d’état et d’interactions dans une application Android moderne.
```


