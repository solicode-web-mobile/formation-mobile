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
- **Concepts abordés :** Gestion des clics, ajout de boutons, état dans Compose.  
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

#### **Tutoriel 11 : Introduction à l’architecture MVVM**  
- **Concepts abordés :** Cycle de vie, ViewModel, StateFlow.  
- **Tags :** Architecture, ViewModel.  
- **Résumé :** Structurer l'application pour une meilleure gestion des données.

#### **Mini-projet : Application multi-écrans My City**  
- **Description :** Concevoir une application avec plusieurs écrans de navigation.  
- **Lien avec le projet final :** Structurer la To-Do List en plusieurs vues.

---

### **Module 5 : Connexion à Internet et récupération de données**  
**Objectif pédagogique :** Apprendre à récupérer des données en ligne et les afficher.

#### **Tutoriel 12 : Récupération de données via API REST**  
- **Concepts abordés :** Requêtes HTTP, coroutines, JSON.  
- **Tags :** API, REST, Coroutines.  
- **Résumé :** Connecter l'application à des sources de données en ligne.

#### **Mini-projet : Application Bookshelf**  
- **Description :** Développer une bibliothèque virtuelle avec des données issues d’une API.  
- **Lien avec le projet final :** Intégrer des tâches récupérées depuis un serveur.

---

### **Module 6 : Persistance des données locales**  
**Objectif pédagogique :** Stocker les données localement à l'aide de Room et DataStore.

#### **Tutoriel 13 : Utilisation de Room pour la persistance**  
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
---

### **Résultats attendus pour chaque tutoriel**  

1. Fournir une introduction théorique expliquant les notions clés avant leur utilisation dans le code.  
2. Inclure un code complet, facile à copier et exécuter dans Android Studio.  
3. Ajouter des questions ou exercices en fin de tutoriel pour réfléchir à une organisation optimale des fichiers et des classes.  
4. Réaliser les exemples avec **un minimum de complexité**, adapté au niveau des apprenants.  


5. L'emplacement et le nom de chaque fichier et classe à créer dans le projet.  
6. Une organisation structurée du code en fichiers et dossiers, basée sur une architecture que vous proposerez.  
7. Ajouter une partie théorique pour expliquer les notions de base aborder dans le tutoriel



### **Travail à réaliser :**  

Donner seulement un tutoriel pour ajouter une menu NavigationDrawer pour le résultat de Tuto10

**Tutoriel 10 : Navigation dans Jetpack Compose** pour inclure : 




**Version actuelle du tutoriel** :  
```
---
reference: m4-navigation-architecture-tuto10
slug: tuto10
module_reference: mobile
part_reference: m4-navigation-architecture
concept_reference: ''
title: tuto10
description: ''
order: 133
directory: mobile/m4-navigation-architecture
permalink: mobile/m4-navigation-architecture/tuto10
layout: chapters
---
# **Tutoriel 10 : Navigation dans Jetpack Compose (Version Révisée)**

---

## **Objectif pédagogique**  
Apprendre à mettre en place une navigation multi-écrans dans une application Android avec Jetpack Compose, tout en structurant le code suivant une architecture modulaire et maintenable.

---

## **1. Notions théoriques**

Avant de plonger dans le code, voici les concepts à comprendre :  

1. **Jetpack Navigation Compose :**  
   - Une bibliothèque officielle d'Android pour gérer la navigation dans les applications Jetpack Compose.  
   - Elle simplifie la navigation entre les écrans (ou *composables*).  

2. **Routes et arguments :**  
   - Les *routes* définissent les chemins entre les écrans.  
   - Les arguments permettent de transmettre des données entre les écrans.  

3. **NavHost et NavGraph :**  
   - **NavHost** : Conteneur principal où sont définies les différentes routes.  
   - **NavGraph** : Décrit la structure de navigation (écrans et transitions).  

4. **Structure de l’application :**  
   - Une organisation modulaire facilite l’évolution de l’application et améliore la lisibilité.  

---

## **2. Organisation du projet**

Dans le dossier `src/main/java/com/votreprojet/`, créez la structure suivante :  

```
com.votreprojet  
├── navigation  
│   ├── NavGraph.kt  
│   └── Routes.kt  
├── ui  
│   ├── home  
│   │   └── HomeScreen.kt  
│   ├── details  
│   │   └── DetailsScreen.kt  
└── MainActivity.kt  
```

**Explications :**  
1. **`navigation/`** : Contient la logique de navigation.  
2. **`ui/`** : Contient les écrans regroupés par fonctionnalité (par exemple, `home` pour l’écran principal).  
3. **`MainActivity.kt`** : Point d’entrée de l’application.

---

## **3. Configuration initiale**

### Dépendances à ajouter dans `build.gradle` :  

```kotlin
implementation(libs.androidx.navigation.compose)
```

---

## **4. Création des fichiers**

### **4.1. `Routes.kt` : Définir les routes**

Ce fichier centralise les noms des routes pour éviter les erreurs.  

```kotlin
package com.votreprojet.navigation

object Routes {
    const val Home = "home"
    const val Details = "details/{itemId}"
}
```

### **4.2. `NavGraph.kt` : Gestion des transitions**

Ce fichier définit les écrans et la navigation entre eux.  

```kotlin
package com.votreprojet.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.votreprojet.ui.details.DetailsScreen
import com.votreprojet.ui.home.HomeScreen

@Composable
fun NavGraph(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = Routes.Home
    ) {
        composable(Routes.Home) { HomeScreen(navController) }
        composable(Routes.Details) { backStackEntry ->
            val itemId = backStackEntry.arguments?.getString("itemId")
            DetailsScreen(navController, itemId)
        }
    }
}
```

---

## **5. Création des écrans**

### **5.1. `HomeScreen.kt` : Écran principal**  

Cet écran contient un bouton permettant de naviguer vers l’écran des détails.  

```kotlin
package com.votreprojet.ui.home

import androidx.compose.foundation.layout.*  
import androidx.compose.material.*  
import androidx.compose.runtime.Composable  
import androidx.navigation.NavController  
import com.votreprojet.navigation.Routes

@Composable
fun HomeScreen(navController: NavController) {
    Scaffold(
        topBar = { TopAppBar(title = { Text("Écran principal") }) }
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Text("Bienvenue sur l'écran principal !", style = MaterialTheme.typography.h5)
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = { navController.navigate("details/42") }) {
                Text("Voir les détails de l'élément 42")
            }
        }
    }
}
```

---

### **5.2. `DetailsScreen.kt` : Écran de détails**

Cet écran affiche les informations transmises depuis `HomeScreen`.  

```kotlin
package com.votreprojet.ui.details

import androidx.compose.foundation.layout.*  
import androidx.compose.material.*  
import androidx.compose.runtime.Composable  
import androidx.navigation.NavController  

@Composable
fun DetailsScreen(navController: NavController, itemId: String?) {
    Scaffold(
        topBar = { TopAppBar(title = { Text("Écran de détails") }) }
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Text("Détails pour l'élément : $itemId", style = MaterialTheme.typography.h5)
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = { navController.popBackStack() }) {
                Text("Retour à l'écran principal")
            }
        }
    }
}
```

---

## **6. Intégration dans l’application**

Modifiez `MainActivity.kt` pour intégrer la navigation.  

```kotlin
package com.votreprojet

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.MaterialTheme
import androidx.navigation.compose.rememberNavController
import com.votreprojet.navigation.NavGraph

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                val navController = rememberNavController()
                NavGraph(navController = navController)
            }
        }
    }
}
```

---

## **7. Exercices pratiques**  

1. **Ajout d’un écran supplémentaire :**  
   - Créez un écran `ProfileScreen` et ajoutez-le au système de navigation.  

2. **Transmission de données complexes :**  
   - Modifiez `DetailsScreen` pour accepter un objet JSON contenant plusieurs propriétés.  

3. **Création d’un menu de navigation :**  
   - Implémentez un menu permettant de passer d’un écran à l’autre.  

---

## **8. Résultats attendus**  

- Navigation fonctionnelle entre plusieurs écrans.  
- Structure modulaire du projet.  
- Meilleure compréhension de l’organisation et de la navigation dans une application Jetpack Compose.  

---

## **9. Questions d’évaluation**  

1. Pourquoi utiliser une architecture modulaire dans un projet Android ?  
2. Quels sont les avantages d’utiliser des objets pour définir les routes ?  
3. Comment gérer les erreurs liées aux arguments manquants lors de la navigation ?
```

