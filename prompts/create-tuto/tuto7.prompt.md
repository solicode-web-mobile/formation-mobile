### Contexte  

Solicode, un centre de formation affilié à l'OFPPT, met en œuvre une pédagogie active orientée projets. Chaque semaine de formation est articulée autour d’un projet qui inclut plusieurs livrables, tous présentés en fin de semaine.  

Les livrables hebdomadaires comprennent :  
- Le code source,  
- Une présentation,  
- Un rapport détaillé,  
- Un tutoriel pour réaliser le prototype,  
- Un prototype concret,  
- Un mini-projet complémentaire.  

**Particularité :** Les sessions alternent entre le développement mobile (Android avec Kotlin) et le framework Laravel.

---

### Rôle  

Vous êtes un formateur expérimenté (10 ans) en développement mobile, avec une spécialisation dans Android et Kotlin. Votre objectif principal est d’accompagner les apprenants dans la maîtrise des principes fondamentaux et avancés du développement Android.

---

### Objectifs  

1. **Création de tutoriels didactiques** pour l’apprentissage progressif du développement mobile.  
2. **Intégration d’un mini-projet pratique** à la fin de chaque module d’apprentissage.  
3. **Conception d’un projet final** pour évaluer les compétences acquises.  
4. Basculer les tutoriels autour du guide officiel d’Android Studio : **Principes de base d'Android avec Compose**.  

---

### Contraintes  

1. Les tutoriels doivent culminer avec la réalisation d’une application fonctionnelle de gestion de tâches (TODO liste).  
2. **Code complet et fonctionnel :** Chaque tutoriel doit inclure du code prêt à exécuter dans Android Studio.  
3. **Clarté pédagogique :**  
   - Indiquez les fichiers à modifier dans le projet.  
   - Commentez chaque bloc de code pour en expliquer le fonctionnement.  
   - Introduisez chaque partie de code avant son utilisation.  
   - Évitez de réexpliquer des notions déjà couvertes dans les tutoriels précédents.  
4. Utilisation obligatoire de **Jetpack Compose** pour tous les tutoriels.


- Dans le mini projet il faut utiliser seulement les notion aborder dans les tuto précédents et les modules précédentes
---

### Plan des tutoriels  

1. Introduction au développement Android et Jetpack Compose.  
2. Comprendre les concepts fondamentaux : Layouts et Widgets.  
3. Gestion des états avec Compose : Création d’une TODO liste simple.  
4. Interaction utilisateur et navigation : Ajout d’un système de tâches.  
5. Persistance des données : Sauvegarder les tâches avec Room.  
6. Optimisation et déploiement de l’application finale.  

---

Si vous voulez, je peux commencer directement par l'élaboration d'un des tutoriels ou compléter un élément déjà existant dans votre formation.

### Plan des tutoriels :
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



## **Travail à réaliser :**  

rédiger Tutoriel 7 : Concepts avancés de Kotlin (Collections et génériques)

La version de tutoriel actuel 

```md
---
reference: m3-afficher-listes-utiliser-material-design-tuto7
slug: tuto7
module_reference: mobile
part_reference: m3-afficher-listes-utiliser-material-design
concept_reference: ''
title: Tuto7 - Concepts avancés de Kotlin
description: ''
order: 113
directory: m3-afficher-listes-utiliser-material-design
permalink: m3-afficher-listes-utiliser-material-design/tuto7
layout: chapters
---


# 🚀 **Tutoriel 7 : Concepts avancés de Kotlin (Collections et Génériques)**  

---

### **📚 Concepts abordés :**  
- **Collections** : List, Set, Map, Mutable vs Immutable.  
- **Génériques** : Utilisation des types génériques pour créer des classes, fonctions réutilisables et sûres.  
- **Extensions** : Ajouter des fonctionnalités aux classes sans les modifier.  
- **Fonctions d'ordre supérieur** : Utiliser des fonctions comme paramètres ou retours.  

---

### **🏷️ Tags :**  
- Collections, Génériques, Extensions, Kotlin avancé.  

---

### **📝 Résumé :**  
Ce tutoriel approfondit l’utilisation des collections et des génériques en Kotlin, essentiels pour gérer efficacement les données. Vous découvrirez également les extensions et les fonctions d’ordre supérieur pour écrire un code plus concis, modulaire et lisible.  

---

## **🔍 Objectifs pédagogiques :**  
- Maîtriser les collections Kotlin (List, Set, Map).  
- Comprendre et utiliser les types génériques.  
- Créer des extensions pour enrichir des classes existantes.  
- Manipuler des fonctions d’ordre supérieur.  

---

## **📦 Collections en Kotlin :**  

### **1. Les types de collections principales :**  
- **List** : Ordonnée, peut contenir des doublons.  
  ```kotlin
  val list = listOf("Pomme", "Banane", "Cerise")  // Immutable
  val mutableList = mutableListOf(1, 2, 3)  // Mutable
  ```

- **Set** : Unique, sans doublons.  
  ```kotlin
  val set = setOf(1, 2, 3, 3)  // Résultat : 1, 2, 3
  ```

- **Map** : Paires clé-valeur.  
  ```kotlin
  val map = mapOf("Clé1" to "Valeur1", "Clé2" to "Valeur2")
  ```

---

### **2. Manipulation des collections :**  
**Filtrer et transformer les données :**  
```kotlin
val nombres = listOf(1, 2, 3, 4, 5)
val pairs = nombres.filter { it % 2 == 0 }  // [2, 4]
val carrés = nombres.map { it * it }        // [1, 4, 9, 16, 25]
```

**Parcourir une collection :**  
```kotlin
nombres.forEach { println(it) }
```

---

## **🧩 Les génériques :**  

**Créer une fonction générique :**  
```kotlin
fun <T> afficherElement(element: T) {
    println(element)
}

afficherElement(42)         // Fonctionne avec un Int
afficherElement("Bonjour")  // Fonctionne avec un String
```

**Classe générique :**  
```kotlin
class Boîte<T>(val contenu: T) {
    fun afficherContenu() {
        println("Contenu : $contenu")
    }
}

val boîteInt = Boîte(123)
val boîteString = Boîte("Hello")
boîteInt.afficherContenu()     // Contenu : 123
boîteString.afficherContenu()  // Contenu : Hello
```

---

## **🚀 Extensions :**  
Les extensions ajoutent des fonctionnalités aux classes existantes sans modifier leur code source.  

**Exemple d’extension pour `String` :**  
```kotlin
fun String.inverser(): String {
    return this.reversed()
}

println("Kotlin".inverser())  // Résultat : "niltok"
```

---

## **🔧 Fonctions d’ordre supérieur :**  
Une fonction qui prend une autre fonction en paramètre ou retourne une fonction.  

**Exemple :**  
```kotlin
fun appliquerOperation(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

// Utilisation
val somme = appliquerOperation(5, 3) { x, y -> x + y }   // 8
val produit = appliquerOperation(5, 3) { x, y -> x * y } // 15
```

---

## **🛠️ Exercices pratiques :**  

1. **Manipulation des collections :**  
   - Créez une liste de nombres et filtrez ceux qui sont supérieurs à 10.  
   - Transformez une liste de chaînes en majuscules.  

2. **Fonctions génériques :**  
   - Créez une fonction générique qui retourne le dernier élément d’une liste.  

3. **Extension :**  
   - Créez une extension pour les listes qui renvoie le deuxième élément.  

---

## **🎯 Lien avec le projet final (To-Do List) :**  
- **Collections** : Vous utiliserez des listes pour stocker et manipuler les tâches.  
- **Génériques** : Assurez-vous que les données manipulées sont de types sûrs.  
- **Extensions** : Ajoutez des fonctionnalités spécifiques aux listes de tâches (ex. : tri, filtrage).  

### 🚀 **Prochain tutoriel : Gestion des événements et des listes dynamiques !**  
```


