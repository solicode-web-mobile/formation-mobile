### **Contexte**  

Solicode, un centre de formation affilié à l'OFPPT, applique une pédagogie active orientée projets. Chaque semaine de formation est structurée autour d’un projet intégrant plusieurs livrables, présentés à la fin de la semaine.  

**Livrables hebdomadaires :**  
- Code source,  
- Présentation,  
- Rapport détaillé,  
- Tutoriel pour réaliser le prototype,  
- Prototype concret,  
- Mini-projet complémentaire.  

**Particularité :** Les formations alternent entre développement mobile (Android avec Kotlin) et développement web avec Laravel.  

---

### **Votre rôle**  

En tant que formateur expérimenté (10 ans) spécialisé en développement Android avec Kotlin, votre mission est d’accompagner les apprenants dans la maîtrise des concepts clés et avancés du développement mobile.  

---

### **Objectifs pédagogiques**  

1. Concevoir **des tutoriels progressifs et didactiques** pour apprendre le développement Android.  
2. Proposer **un mini-projet pratique** à la fin de chaque module pour renforcer les acquis.  
3. Préparer un **projet final évaluatif** mettant en application l’ensemble des compétences.  
4. S’appuyer sur le guide officiel d’Android Studio et utiliser **Jetpack Compose** comme base des tutoriels.  

---

### **Contraintes et exigences**  

1. **Application cible :** Chaque tutoriel doit contribuer à créer une application fonctionnelle de gestion de tâches (TODO liste).  
2. **Code clair et complet :** Fournir du code prêt à exécuter dans Android Studio.  
3. **Approche pédagogique :**  
   - Identifier les fichiers et sections à modifier.  
   - Expliquer chaque bloc de code à l’aide de commentaires détaillés.  
   - Introduire chaque concept avant de le coder.  
   - Éviter de répéter les notions déjà couvertes dans les tutoriels précédents.  
4. **Utilisation obligatoire de Jetpack Compose** dans toutes les implémentations.  
5. Les mini-projets doivent uniquement utiliser les notions vues dans les tutoriels et modules précédents.  
6. **Structure des dépendances :** Utiliser le **catalogue de bibliothèques** dans `build.gradle`, par exemple :  
   ```kotlin  
   implementation(libs.androidx.navigation.compose)  
   ```  

- Utilisation de androidx.compose.material3 : Material 3

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


---

### **Module 2 : Créer l’interface utilisateur et gérer l’état**  
**Objectif pédagogique :** Approfondir les connaissances en Kotlin et maîtriser la gestion de l'état dans une interface utilisateur.

#### **Tutoriel 4 : Principes avancés de Kotlin**  
- **Concepts abordés :** Instructions conditionnelles, nullabilité, classes, objets, lambdas.  
- **Tags :** Kotlin, Programmation orientée objet.  
- **Résumé :** Maîtriser les concepts avancés pour écrire un code robuste.

#### **Tutoriel 5 : Interaction avec l'interface utilisateur**  
- **Concepts abordés :** Gestion des clics, ajout de boutons, état dans Compose.  
- **Tags :** UI, Gestion de l'état, Jetpack Compose.  
- **Résumé :** Créer des applications interactives et réactives.

#### **Tutoriel 6 : Gestion de l’état dans Jetpack Compose**  
- **Concepts abordés :** États, immutabilité
- **Tags :** État, Jetpack Compose.  
- **Résumé :** Contrôler l'état et la réactivité de l'application.


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

#### **Tutoriel 11 : Ajouter un NavigationDrawer avec Jetpack Compose au Turoriel 10**  
- **Concepts abordés :** Apprendre à intégrer un menu de navigation latérale (*NavigationDrawer*) dans une application Android utilisant Jetpack Compose pour permettre une navigation fluide entre plusieurs écrans.
- **Tags :** 
- **Résumé :** 


#### **Tutoriel 12 : Introduction à l’architecture MVVM**  
- **Concepts abordés :** Cycle de vie, ViewModel, StateFlow.  
- **Tags :** Architecture, ViewModel.  
- **Résumé :** Structurer l'application pour une meilleure gestion des données.


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
---

### **Résultats attendus pour chaque tutoriel**  

1. Fournir une introduction théorique expliquant les notions clés avant leur utilisation dans le code.  
2. Inclure un code complet, facile à copier et exécuter dans Android Studio.  
3. Ajouter des questions ou exercices en fin de tutoriel pour réfléchir à une organisation optimale des fichiers et des classes.  
4. Réaliser les exemples avec **un minimum de complexité**, adapté au niveau des apprenants.  


5. L'emplacement et le nom de chaque fichier et classe à créer dans le projet.  
6. Une organisation structurée du code en fichiers et dossiers, basée sur une architecture que vous proposerez.  
7. Ajouter une partie théorique pour expliquer les notions de base aborder dans le tutoriel


## **Travail à réaliser :**  


- Donner le résumé de **Mini-projet de module 1 : Carte de visite interactive** 


en format : 
---
#### **Mini-projet : Carte de visite interactive**  
- **Description :** Créer une application de carte de visite dynamique.  
- **Lien avec le projet final :** Introduction aux composants d'interface et à la mise en page.
---



**Version actuelle du tutoriel** :  

```
---
reference: m1-première-application-android-mini-projet
slug: mini-projet
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: Mini projet
description: ''
order: 81
directory: m1-première-application-android
permalink: m1-première-application-android/mini-projet
layout: chapters
---

### Mini-projet : Carte de visite interactive

#### **Description du mini-projet**

Dans ce mini-projet, les apprenants créeront une application interactive de carte de visite. L'application affichera des informations personnelles stylisées (nom, profession, coordonnées), avec des boutons interactifs permettant d'effectuer des actions simples, comme ouvrir un site web ou composer un numéro de téléphone.

---

### **Objectifs pédagogiques**
1. Mettre en pratique les notions de base de Jetpack Compose vues dans le tutoriel précédent.
2. Découvrir comment structurer une interface utilisateur simple.
3. Manipuler des composants interactifs comme les **Button** et les **ClickableText**.
4. Comprendre l'utilisation des actions pour interagir avec d'autres applications (exemple : ouvrir une page web ou composer un appel).

---

### **Fonctionnalités principales**
1. Affichage du nom, du métier, et des informations de contact (téléphone et email).
2. Boutons interactifs pour effectuer des actions :
   - Appeler un numéro.
   - Envoyer un email.
   - Ouvrir un site web.

---

### **Étapes de réalisation**

#### **Étape 1 : Configuration du projet**
1. **Créer un nouveau projet Android avec Jetpack Compose** :
   - Ouvrir Android Studio.
   - Sélectionner "New Project" > "Empty Compose Activity".
   - Nommer le projet : `CarteDeVisiteInteractive`.
   - Configurer les paramètres du projet (Minimum SDK : API 21).

2. **Vérifier la structure du projet** : S'assurer que le fichier `MainActivity.kt` contient un composable de base.

---

#### **Étape 2 : Conception de l'interface utilisateur**

1. **Structure de base de la carte de visite**  
   Ajouter les éléments principaux dans une fonction composable `CarteDeVisite` :
   ```kotlin
   @Composable
   fun CarteDeVisite() {
       Column(
           modifier = Modifier
               .fillMaxSize()
               .padding(16.dp),
           horizontalAlignment = Alignment.CenterHorizontally,
           verticalArrangement = Arrangement.Center
       ) {
           // Nom et profession
           Text(
               text = "John Doe",
               style = MaterialTheme.typography.h4,
               modifier = Modifier.padding(bottom = 8.dp)
           )
           Text(
               text = "Développeur Android",
               style = MaterialTheme.typography.subtitle1,
               color = Color.Gray
           )
           Spacer(modifier = Modifier.height(16.dp))

           // Coordonnées
           ContactInfo(
               label = "Téléphone :",
               value = "+33 6 12 34 56 78",
               onClick = { /* Appeler */ }
           )
           ContactInfo(
               label = "Email :",
               value = "johndoe@example.com",
               onClick = { /* Envoyer un email */ }
           )
           Spacer(modifier = Modifier.height(16.dp))

           // Bouton pour site web
           Button(onClick = { /* Ouvrir le site */ }) {
               Text("Visiter mon site")
           }
       }
   }
   ```

2. **Fonction composable pour les contacts interactifs**  
   Créer une fonction pour afficher les coordonnées interactives :
   ```kotlin
   @Composable
   fun ContactInfo(label: String, value: String, onClick: () -> Unit) {
       Row(
           modifier = Modifier
               .clickable(onClick = onClick)
               .padding(vertical = 4.dp)
       ) {
           Text(text = "$label ", fontWeight = FontWeight.Bold)
           Text(text = value, color = Color.Blue)
       }
   }
   ```

---

#### **Étape 3 : Ajouter les actions interactives**

1. **Appeler un numéro de téléphone**  
   Implémenter l'action pour ouvrir l'application d'appel :
   ```kotlin
   val context = LocalContext.current
   val callIntent = Intent(Intent.ACTION_DIAL).apply {
       data = Uri.parse("tel:+33612345678")
   }
   ContactInfo(
       label = "Téléphone :",
       value = "+33 6 12 34 56 78",
       onClick = { context.startActivity(callIntent) }
   )
   ```

2. **Envoyer un email**  
   Ajouter une action pour ouvrir l'application de messagerie électronique :
   ```kotlin
   val emailIntent = Intent(Intent.ACTION_SENDTO).apply {
       data = Uri.parse("mailto:johndoe@example.com")
   }
   ContactInfo(
       label = "Email :",
       value = "johndoe@example.com",
       onClick = { context.startActivity(emailIntent) }
   )
   ```

3. **Ouvrir un site web**  
   Ajouter un bouton pour naviguer vers un site web :
   ```kotlin
   val websiteIntent = Intent(Intent.ACTION_VIEW).apply {
       data = Uri.parse("https://www.johndoe.com")
   }
   Button(onClick = { context.startActivity(websiteIntent) }) {
       Text("Visiter mon site")
   }
   ```

---

#### **Étape 4 : Prévisualiser l'application**
1. Ajouter une fonction pour prévisualiser le composable :
   ```kotlin
   @Preview(showBackground = true)
   @Composable
   fun CarteDeVisitePreview() {
       CarteDeVisite()
   }
   ```

2. Ouvrir la fenêtre de prévisualisation dans Android Studio et vérifier que tout est correctement affiché.

---

### **Livrable attendu**
Une application Android simple et fonctionnelle qui affiche une carte de visite interactive. Les apprenants doivent être capables de personnaliser les informations affichées et d'exécuter les actions interactives (appel, email, navigation web).

---

#### **Prolongement possible**
1. Ajouter un thème personnalisé pour styliser l'application.
2. Introduire une image de profil en haut de la carte avec le composant **Image**.
3. Réorganiser l'interface pour utiliser des colonnes et des rangées de manière plus avancée.
```




