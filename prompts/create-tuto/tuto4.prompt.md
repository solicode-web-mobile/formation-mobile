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

Modifier le Tutoriel 4 : Principes avancés de Kotlin

Essayer de voir ces deux parties en détail 


3. **Classes et objets** : Constructeurs, propriétés, méthodes.
4. **Expressions lambdas** : Définition et usage.

### Version actuel : 

```md
---
reference: m2-créer-interface-utilisateur-tuto4
slug: tuto4
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: tuto4
description: ''
order: 93
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto4
layout: chapters
---


# Tutoriel 4 : Principes avancés de Kotlin

## Objectif pédagogique
Ce tutoriel vise à approfondir les concepts avancés de Kotlin pour permettre aux apprenants d'écrire un code plus robuste, réutilisable et élégant. Les notions abordées incluent les instructions conditionnelles, la gestion de la nullabilité, les classes et objets, ainsi que les expressions lambdas.

---

## Prérequis
Avant de commencer ce tutoriel, assurez-vous d'avoir compris les bases de Kotlin, notamment :
- Les variables,
- Les types de données,
- Les fonctions simples.

---

## Concepts abordés
1. **Instructions conditionnelles** : If/else, when.
2. **Nullabilité et opérateurs de sécurité** : Safe call, Elvis operator.
3. **Classes et objets** : Constructeurs, propriétés, méthodes.
4. **Expressions lambdas** : Définition et usage.

---

## Partie 1 : Instructions conditionnelles

### If/Else
L'instruction `if` fonctionne comme une expression en Kotlin. Elle peut renvoyer une valeur.

#### Exemple :
```kotlin
val a = 10
val b = 20
val max = if (a > b) a else b
println("Le maximum est : $max")
```

### When
L'instruction `when` remplace les longues séries de `if/else`.

#### Exemple :
```kotlin
val day = 3
val dayName = when (day) {
    1 -> "Lundi"
    2 -> "Mardi"
    3 -> "Mercredi"
    else -> "Jour inconnu"
}
println("Aujourd'hui, c'est : $dayName")
```

---

## Partie 2 : Nullabilité et opérateurs de sécurité

### Nullabilité en Kotlin
Kotlin impose une différenciation stricte entre les types nullable et non-nullable.

#### Exemple :
```kotlin
var name: String? = null
name = "Solicode"
```

### Safe Call Operator
Pour éviter les exceptions `NullPointerException`, utilisez l'opérateur `?.`.

#### Exemple :
```kotlin
val length = name?.length
println("Longueur du nom : $length")
```

### Elvis Operator
L'opérateur `?:` permet de fournir une valeur par défaut si une variable est `null`.

#### Exemple :
```kotlin
val nameLength = name?.length ?: 0
println("Longueur du nom (par défaut) : $nameLength")
```

---

## Partie 3 : Classes et Objets

### Créer une classe

#### Exemple :
```kotlin
class Person(val name: String, var age: Int) {
    fun greet() {
        println("Bonjour, je m'appelle $name et j'ai $age ans.")
    }
}

val person = Person("Alice", 25)
person.greet()
```

### Propriétés calculées
Vous pouvez définir des propriétés calculées en utilisant `get`.

#### Exemple :
```kotlin
class Rectangle(val width: Int, val height: Int) {
    val area: Int
        get() = width * height
}

val rect = Rectangle(5, 10)
println("Aire : ${rect.area}")
```

---

## Partie 4 : Expressions Lambdas

### Qu'est-ce qu'une lambda ?
Une lambda est une fonction anonyme que vous pouvez passer comme paramètre à une autre fonction.

#### Exemple :
```kotlin
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }
println(doubled)
```

### Filtrage avec les lambdas

#### Exemple :
```kotlin
val evenNumbers = numbers.filter { it % 2 == 0 }
println(evenNumbers)
```

---

## Mini-Exercice : Créer une classe "Book"
1. Créez une classe `Book` avec les propriétés `title`, `author` et `price`.
2. Ajoutez une méthode `discountedPrice` qui applique une remise au prix.
3. Créez une liste de livres et filtrez ceux dont le prix est inférieur à 20 €.

#### Solution suggérée :
```kotlin
class Book(val title: String, val author: String, var price: Double) {
    fun discountedPrice(discount: Double): Double {
        return price - (price * discount / 100)
    }
}

val books = listOf(
    Book("Kotlin for Beginners", "John Doe", 25.0),
    Book("Advanced Kotlin", "Jane Smith", 15.0),
    Book("Compose Mastery", "Alice Brown", 30.0)
)

val affordableBooks = books.filter { it.price < 20 }
println("Livres abordables :")
affordableBooks.forEach { println(it.title) }
```

---

## Conclusion
Ce tutoriel a permis de découvrir des notions avancées de Kotlin pour écrire du code plus élégant et performant. Les concepts explorés ici seront indispensables pour les tutoriels suivants, notamment pour gérer les interactions avec l’interface utilisateur et les états dans Jetpack Compose.


```


