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

### Les tutoriels actuels 

```
---
reference: m1-première-application-android-tuto1
slug: tuto1
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: tuto1
description: ''
order: 83
directory: m1-première-application-android
permalink: m1-première-application-android/tuto1
layout: chapters
---


# Tutoriel 1 : Introduction à Kotlin

## Objectif pédagogique
Familiariser les apprenants avec les bases du langage Kotlin en explorant sa syntaxe et ses concepts fondamentaux, préparant ainsi le terrain pour le développement mobile sous Android.

---

## Prérequis
- Connaissances de base en programmation (variables, conditions, boucles).
- Installation de Kotlin sur votre machine. (Vous pouvez utiliser un IDE comme IntelliJ IDEA ou un compilateur en ligne comme [Kotlin Playground](https://play.kotlinlang.org/)).

---

## Concepts abordés
- Syntaxe de base de Kotlin.
- Variables et types de données.
- Structures conditionnelles.
- Boucles et fonctions simples.

---

## Partie 1 : Premiers pas avec Kotlin

1. **Créez votre premier programme Kotlin :**

   ```kotlin
   fun main() {
       println("Bonjour, Kotlin !")
   }
   ```
   **Explications :**
   - `fun main()`: Point d'entrée de tout programme Kotlin.
   - `println`: Fonction pour afficher du texte dans la console.

2. **Exécutez le programme :**
   - Utilisez l'IDE ou Kotlin Playground pour exécuter le code.

   **Objectif :** Comprendre le flux de base d'un programme Kotlin.

---

## Partie 2 : Variables et types de données

1. **Déclarer des variables :**

   ```kotlin
   fun main() {
       val nom = "Solicode" // Variable immuable
       var age = 5          // Variable mutable

       println("Nom : $nom")
       println("Age : $age")

       age = 6 // Modification possible avec var
       println("Nouvel Age : $age")
   }
   ```

   **Explications :**
   - `val` : Déclare une variable constante.
   - `var` : Déclare une variable modifiable.
   - `$nom` : Interpolation pour inclure des variables dans des chaînes de caractères.

2. **Types de données courants :**

   ```kotlin
   val entier: Int = 42
   val decimal: Double = 3.14
   val caractere: Char = 'A'
   val chaine: String = "Bonjour"
   val boolean: Boolean = true
   ```

   **Objectif :** Identifier et utiliser les types de données de base en Kotlin.

---

## Partie 3 : Conditions et contrôle de flux

1. **Structure conditionnelle :**

   ```kotlin
   fun main() {
       val age = 18

       if (age >= 18) {
           println("Vous êtes majeur.")
       } else {
           println("Vous êtes mineur.")
       }
   }
   ```

   **Explications :**
   - `if`/`else` : Structure conditionnelle pour évaluer des expressions.

2. **Expression when :**

   ```kotlin
   fun main() {
       val jour = 3

       when (jour) {
           1 -> println("Lundi")
           2 -> println("Mardi")
           3 -> println("Mercredi")
           else -> println("Autre jour")
       }
   }
   ```

   **Objectif :** Simplifier la logique conditionnelle avec `when`.

---

## Partie 4 : Boucles et fonctions

1. **Boucles :**

   ```kotlin
   fun main() {
       for (i in 1..5) {
           println("Itération : $i")
       }

       var compteur = 0
       while (compteur < 3) {
           println("Compteur : $compteur")
           compteur++
       }
   }
   ```

   **Explications :**
   - `for (i in 1..5)` : Boucle qui parcourt une plage de valeurs.
   - `while` : Boucle conditionnelle.

2. **Fonctions simples :**

   ```kotlin
   fun addition(a: Int, b: Int): Int {
       return a + b
   }

   fun main() {
       val resultat = addition(4, 5)
       println("Résultat : $resultat")
   }
   ```

   **Explications :**
   - `fun addition(a: Int, b: Int): Int` : Définition d'une fonction avec des paramètres et un type de retour.
   - `return` : Renvoie une valeur.

---

## Exercice pratique
**Objectif :** Mettre en pratique les notions abordées.

1. **Développez un programme Kotlin qui :**
   - Déclare une variable `nom` (chaîne de caractères) et une variable `age` (entier).
   - Affiche un message personnalisé basé sur l'âge (majeur ou mineur).
   - Utilise une fonction pour calculer l'année de naissance à partir de l'âge et de l'année actuelle.

2. **Exemple de sortie attendue :**

   ```
   Bonjour, [Votre nom] !
   Vous êtes majeur.
   Vous êtes né(e) en 2005.
   ```

---

## Conclusion
Félicitations, vous avez appris les bases de Kotlin ! Vous êtes maintenant prêt à explorer des concepts plus avancés et à commencer votre parcours en développement mobile Android.
```

```
---
reference: m1-première-application-android-tuto2
slug: tuto2
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: tuto2
description: ''
order: 84
directory: m1-première-application-android
permalink: m1-première-application-android/tuto2
layout: chapters
---

# Tutoriel 2 : Configuration d'Android Studio

## **Objectif**
Apprendre à installer et configurer Android Studio, l'environnement de développement intégré (IDE) officiel pour Android, afin de commencer à développer des applications Android en Kotlin.

---

## **Prérequis**

1. Un ordinateur sous Windows, macOS, ou Linux.
2. Une connexion Internet stable.
3. Avoir des bases en programmation (idéalement avec Kotlin ou Java).

---

## **Étapes du tutoriel**

### **1. Télécharger Android Studio**

1. Accédez au site officiel d'Android Developers : [https://developer.android.com/studio](https://developer.android.com/studio).
2. Cliquez sur le bouton **Download Android Studio**.
3. Acceptez les termes et conditions, puis téléchargez le fichier d'installation correspondant à votre système d'exploitation.

### **2. Installer Android Studio**

#### **Sur Windows**
1. Ouvrez le fichier `.exe` téléchargé.
2. Suivez les instructions de l'assistant d'installation :
   - Sélectionnez les composants à installer (cochez tout par défaut).
   - Choisissez un dossier d'installation.
3. Une fois l'installation terminée, cliquez sur **Finish** pour lancer Android Studio.

#### **Sur macOS**
1. Ouvrez le fichier `.dmg` téléchargé.
2. Glissez l'icône d'Android Studio dans le dossier **Applications**.
3. Ouvrez Android Studio depuis le dossier **Applications**.

#### **Sur Linux**
1. Extrayez le fichier `.zip` téléchargé dans un dossier de votre choix.
2. Ouvrez un terminal et naviguez vers le dossier extrait.
3. Exécutez le script `studio.sh` avec la commande :
   ```bash
   ./studio.sh
   ```

### **3. Configuration initiale**

1. **Assistant de configuration :**
   - Au premier lancement, Android Studio vous propose de télécharger les composants nécessaires (SDK Android, outils de développement, etc.). Cliquez sur **Next**.
2. **Choix de l'interface :**
   - Sélectionnez le thème d'interface (clair ou sombre).
   - Cliquez sur **Finish** pour finaliser la configuration.
3. Android Studio téléchargera les fichiers nécessaires. Ce processus peut prendre plusieurs minutes.

### **4. Créer un premier projet Android**

1. Cliquez sur **New Project** dans l'écran d'accueil d'Android Studio.
2. Choisissez un modèle de projet :
   - Pour ce tutoriel, sélectionnez **Empty Compose Activity** (Jetpack Compose).
3. Configurez votre projet :
   - **Nom du projet :** `FirstApp`.
   - **Nom du package :** `com.example.firstapp`.
   - **Langage :** Kotlin.
   - **API minimale :** Sélectionnez une API adaptée (par exemple, API 21 pour supporter la plupart des appareils).
4. Cliquez sur **Finish**.

### **5. Explorer Android Studio**

1. **Structure de l'interface :**
   - **Project View :** Affiche l'arborescence de votre projet.
   - **Editor :** Permet d'éditer les fichiers (code, ressources, etc.).
   - **Logcat :** Affiche les journaux d'exécution de l'application.
2. **Fichiers importants :**
   - `MainActivity.kt` : Point d'entrée de l'application.
   - `AndroidManifest.xml` : Déclare les composants de l'application.
   - `build.gradle` : Gère les dépendances et la configuration du projet.

### **6. Exécuter l'application sur un émulateur**

1. Ouvrez **AVD Manager** (Android Virtual Device) depuis la barre d'outils.
2. Créez un nouvel émulateur :
   - Sélectionnez un appareil (ex. Pixel 4).
   - Choisissez une image système (API niveau 30 ou supérieur recommandé).
   - Configurez les paramètres et cliquez sur **Finish**.
3. Lancez l'émulateur en cliquant sur le bouton **Play**.
4. Exécutez l'application :
   - Cliquez sur **Run** ou utilisez le raccourci clavier **Shift + F10**.
   - L'application s'ouvrira dans l'émulateur.

### **7. Résolution des problèmes courants**

1. **SDK manquant :**
   - Allez dans **File > Settings > Appearance & Behavior > System Settings > Android SDK**.
   - Téléchargez les versions nécessaires du SDK.
2. **Erreur Gradle :**
   - Synchronisez votre projet avec Gradle en cliquant sur **Sync Now**.
3. **Émulateur lent :**
   - Activez l'accélération matérielle (HAXM pour Intel ou Hyper-V pour AMD).

---

## **Conclusion**

Vous avez installé et configuré Android Studio, créé un projet initial, et exécuté une application simple sur un émulateur. Vous êtes maintenant prêt à explorer Jetpack Compose dans les tutoriels suivants.

---

## **Prochain tutoriel**
**Création de l’interface avec Jetpack Compose :** Nous commencerons à construire une interface utilisateur simple en utilisant Compose pour afficher du texte et des boutons interactifs.
```
```
---
reference: m1-première-application-android-tuto3
slug: tuto3
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: tuto3
description: ''
order: 85
directory: m1-première-application-android
permalink: m1-première-application-android/tuto3
layout: chapters
---

# Tutoriel 3 : Création de l’interface avec Jetpack Compose

## Objectif pédagogique  
Ce tutoriel a pour objectif de guider les apprenants dans la création d'une interface utilisateur simple en utilisant Jetpack Compose. Ils apprendront à utiliser des composants de base comme **Text**, **Image**, et **Button**, tout en explorant la structuration de la mise en page.

---

## Prérequis  
- Avoir installé Android Studio et configuré l'environnement de développement.  
- Comprendre les bases de Kotlin.  

---

## Partie 1 : Création d'un projet Android Compose  

1. **Créer un nouveau projet Compose dans Android Studio :**  
   - Ouvrez Android Studio et cliquez sur **File > New > New Project**.  
   - Sélectionnez « Empty Compose Activity » comme modèle.  
   - Configurez les détails du projet (nom : `ComposeInterfaceApp`, langage : Kotlin, API minimale : 21).  
   - Cliquez sur **Finish** pour générer le projet.  

2. **Structure du projet :**  
   - Ouvrez le fichier `MainActivity.kt`. Ce fichier contient une fonction principale qui gère l'interface utilisateur.  

3. **Vérifiez la configuration initiale :**  
   - Exécutez l'application pour vérifier que l'interface prédéfinie ("Hello Android!") s'affiche correctement.

---

## Partie 2 : Utilisation des composants de base  

### **2.1 Afficher un texte**

1. Remplacez le contenu de la fonction `setContent` dans `MainActivity` par le code suivant :

```kotlin
setContent {
    Text(text = "Bonjour, Solicode !", style = MaterialTheme.typography.h4)
}
```

2. **Explications :**
   - `Text` : Un composant qui affiche du texte.
   - `text` : Propriété pour spécifier le contenu textuel.
   - `style` : Applique un style, ici celui défini dans `MaterialTheme.typography.h4`.

3. Lancez l'application pour voir le texte affiché.

### **2.2 Ajouter une image**

1. Ajoutez une image à votre interface :

```kotlin
setContent {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Image(
            painter = painterResource(id = R.drawable.ic_launcher_foreground),
            contentDescription = "Logo de l'application",
            modifier = Modifier.size(100.dp)
        )
        Text(text = "Bienvenue dans l'application Compose!")
    }
}
```

2. **Explications :**
   - `Column` : Un conteneur qui organise les éléments verticalement.
   - `painterResource` : Charge une image à partir des ressources.
   - `Modifier` : Permet de personnaliser l'apparence et le comportement d'un composant (ici, à l'aide de `size` et `fillMaxSize`).

3. Ajoutez une image à votre projet si nécessaire :  
   - Placez un fichier image dans le dossier `res/drawable`.  

4. Exécutez l'application pour afficher l'image et le texte.

### **2.3 Ajouter un bouton interactif**

1. Ajoutez un bouton à votre interface :

```kotlin
setContent {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = "Cliquez sur le bouton ci-dessous !")
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = { println("Bouton cliqué") }) {
            Text(text = "Cliquez-moi")
        }
    }
}
```

2. **Explications :**
   - `Button` : Composant interactif pour capturer les clics.
   - `onClick` : Fonction lambda exécutée lorsqu'on clique sur le bouton.
   - `Spacer` : Ajoute un espace entre les éléments pour améliorer la mise en page.

3. Lancez l'application et ouvrez **Logcat** pour voir le message "Bouton cliqué" dans la console lors d'un clic.

---

## Partie 3 : Structuration de la mise en page

1. Combinez plusieurs composants dans une mise en page structurée :

```kotlin
setContent {
    Scaffold(
        topBar = {
            TopAppBar(title = { Text(text = "Application Compose") })
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Image(
                painter = painterResource(id = R.drawable.ic_launcher_foreground),
                contentDescription = null,
                modifier = Modifier.size(100.dp)
            )
            Text(text = "Créez facilement votre interface avec Compose!", style = MaterialTheme.typography.body1)
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = { /* TODO */ }) {
                Text(text = "Démarrer")
            }
        }
    }
}
```

2. **Explications :**
   - `Scaffold` : Fournit une structure standard pour les applications, incluant une barre d'outils (`TopAppBar`).
   - `padding` : Gère les marges entre le contenu principal et les autres éléments de l'interface.

3. Testez l'application pour voir une interface propre et bien structurée.

---

## Exercice pratique : Carte de visite interactive

### **Objectif :** Créer une application affichant une carte de visite dynamique avec une photo, un nom, une profession et un bouton interactif.

1. **Structure suggérée :**
   - Une image pour la photo de profil.
   - Un texte pour le nom et la profession.
   - Un bouton permettant d’afficher un message dans la console.

2. **Code exemple :**

```kotlin
setContent {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Image(
            painter = painterResource(id = R.drawable.ic_profile),
            contentDescription = "Photo de profil",
            modifier = Modifier.size(128.dp)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(text = "Madani Ali", style = MaterialTheme.typography.h5)
        Text(text = "Développeur Android", style = MaterialTheme.typography.body1)
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = { println("Carte de visite partagée !") }) {
            Text(text = "Partager")
        }
    }
}
```

3. **Extension :**
   - Ajoutez des informations de contact (email, téléphone) sous forme de texte.
   - Stylisez davantage avec `MaterialTheme`.

---

## Conclusion
Vous avez maintenant une bonne compréhension de la création d’interfaces avec Jetpack Compose. Vous êtes prêts à explorer des mises en page plus complexes et 


```


## **Travail à réaliser :**  

rédiger le Tutoriel 10 : Navigation dans Jetpack Compose

Les autres tutos 




