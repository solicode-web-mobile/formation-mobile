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


```
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

### **Tutoriel 4 : Principes avancés de Kotlin**  

**Objectif pédagogique :**  
Approfondir les connaissances des apprenants sur des concepts avancés de Kotlin afin qu’ils puissent écrire un code robuste, lisible et maintenable.

**Prérequis :**  
Les apprenants doivent avoir une compréhension des bases de Kotlin, notamment les variables, types, fonctions et structures de contrôle.

---

### **Concepts abordés :**  
1. Instructions conditionnelles avancées (when et expressions ternaires).  
2. Nullabilité et gestion des nulls (safe calls, Elvis operator).  
3. Programmation orientée objet en Kotlin (classes, objets, héritage).  
4. Lambdas et fonctions d’ordre supérieur.  

---

### **Plan du tutoriel :**  

#### **1. Instructions conditionnelles avancées : `when`**  

Dans Kotlin, l'instruction `when` remplace les multiples blocs `if-else`. Elle est plus lisible et puissante.  

##### **Exemple de code :**  
```kotlin
fun determineCategory(age: Int): String {
    return when {
        age < 13 -> "Enfant"
        age in 13..19 -> "Adolescent"
        age in 20..64 -> "Adulte"
        else -> "Sénior"
    }
}
```

**Explication :**  
- L’instruction `when` permet d’évaluer plusieurs conditions sans répéter `if`.  
- Le bloc retourne directement une valeur.

#### **2. Nullabilité et gestion des nulls**  

En Kotlin, les variables peuvent être nullables (`String?`) ou non-nullables (`String`). Kotlin fournit des outils pour gérer les valeurs nulles sans risquer une `NullPointerException`.  

##### **Exemple de code :**  
```kotlin
fun printName(name: String?) {
    println(name?.uppercase() ?: "Nom inconnu")
}
```

**Explication :**  
- `name?.uppercase()` : Appelle la méthode uniquement si `name` n’est pas null.  
- `?:` (Elvis operator) : Fournit une valeur par défaut si `name` est null.

---

#### **3. Programmation orientée objet**  

##### **Classes et objets simples :**  
```kotlin
class Person(val name: String, var age: Int) {
    fun introduce() {
        println("Je m'appelle $name et j'ai $age ans.")
    }
}
```

**Explication :**  
- `val` et `var` dans le constructeur déclarent des propriétés.  
- La méthode `introduce` utilise les propriétés de l’objet.  

##### **Héritage :**  
```kotlin
open class Animal(val species: String) {
    open fun sound() {
        println("Cet animal fait un bruit.")
    }
}

class Dog : Animal("Chien") {
    override fun sound() {
        println("Woof woof!")
    }
}
```

**Explication :**  
- `open` permet une classe ou une méthode d’être héritée.  
- `override` redéfinit une méthode de la classe parente.

---

#### **4. Lambdas et fonctions d’ordre supérieur**  

Une fonction d'ordre supérieur est une fonction qui prend une autre fonction comme paramètre ou retourne une fonction. Les lambdas sont des fonctions anonymes, idéales dans ce cas.  

##### **Exemple de code :**  
```kotlin
fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int {
    return operation(x, y)
}

fun main() {
    val sum = calculate(5, 10) { a, b -> a + b }
    println("Somme : $sum")
}
```

**Explication :**  
- `(Int, Int) -> Int` est le type de la fonction passée en paramètre.  
- `{ a, b -> a + b }` est une lambda qui retourne la somme de `a` et `b`.  

---

### **Exercice pratique :**  

1. **Conditionnelle avec `when`** :  
   Écrire une fonction qui prend une note d'examen (0-100) et retourne une mention :  
   - "Échec" pour une note inférieure à 50.  
   - "Passable" pour une note entre 50 et 65.  
   - "Bien" pour une note entre 66 et 85.  
   - "Très bien" pour une note supérieure à 85.  

2. **Gestion des nulls :**  
   Implémentez une fonction qui prend une chaîne de caractères nullable et retourne la longueur de la chaîne ou zéro si elle est null.  

3. **Programmation orientée objet :**  
   - Créez une classe `Voiture` avec les propriétés `marque` et `année`.  
   - Ajoutez une méthode `afficherInfo()` qui imprime les informations de la voiture.  
   - Créez une sous-classe `VoitureSport` avec une propriété supplémentaire `vitesseMax`.  

4. **Lambdas et fonctions d’ordre supérieur :**  
   Écrire une fonction qui applique une transformation à une liste d'entiers (par exemple, doubler les valeurs).  

---

### **Livrable attendu :**  
Un fichier Kotlin contenant :  
- Le code des exemples.  
- Les solutions aux exercices pratiques avec des commentaires détaillés.  
```
```
---
reference: m2-créer-interface-utilisateur-tuto5
slug: tuto5
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: tuto5
description: ''
order: 94
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto5
layout: chapters
---

### Tutoriel 5 : Interaction avec l'interface utilisateur dans Jetpack Compose  

#### Objectif pédagogique  
Apprendre à gérer les interactions utilisateur dans une application Android avec Jetpack Compose, notamment en utilisant des clics, des champs de texte interactifs, et en manipulant l'état pour créer une application réactive.

#### Concepts abordés  
- Gestion des clics sur les boutons.  
- Utilisation des champs de texte interactifs (`TextField`).  
- Modification de l'état local dans Jetpack Compose (`remember`, `mutableStateOf`).  

---

### Résumé du tutoriel  
Dans ce tutoriel, vous apprendrez à :  
1. Ajouter des boutons et gérer leurs actions.  
2. Créer des champs de saisie utilisateur avec `TextField`.  
3. Utiliser l'état pour mettre à jour l'interface de manière réactive.  
4. Construire une mini-application "Salut Utilisateur" qui affiche un message personnalisé en fonction du nom saisi.  

---

### Étape 1 : Configuration initiale  
#### Fichiers à modifier  
1. **MainActivity.kt** : Nous travaillerons dans ce fichier pour tout le tutoriel.  

#### Préparation du projet  
Assurez-vous que votre projet Android Studio utilise **Jetpack Compose**. Si ce n’est pas déjà fait, vérifiez les dépendances dans le fichier `build.gradle` de l’application :  

```kotlin
dependencies {
    implementation "androidx.compose.ui:ui:1.5.0"  
    implementation "androidx.compose.material:material:1.5.0"  
    implementation "androidx.compose.ui:ui-tooling-preview:1.5.0"  
    implementation "androidx.lifecycle:lifecycle-runtime-ktx:2.6.0"  
    implementation "androidx.activity:activity-compose:1.8.0"
}
```

Synchronisez votre projet pour inclure ces dépendances.

---

### Étape 2 : Création de l'interface utilisateur de base  

#### Ajouter un champ de texte et un bouton  
Nous allons maintenant construire une interface avec un champ de texte où l'utilisateur peut saisir son nom, et un bouton qui, lorsqu'il est cliqué, affiche un message personnalisé.  

Code complet :  

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApp()
        }
    }
}

@Composable
fun MyApp() {
    // Conteneur principal
    MaterialTheme {
        Surface(modifier = Modifier.fillMaxSize()) {
            UserInputApp()
        }
    }
}

@Composable
fun UserInputApp() {
    // Déclaration de l'état local
    var name by remember { mutableStateOf("") }
    var greetingMessage by remember { mutableStateOf("") }

    // Mise en page
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center
    ) {
        // Champ de texte pour la saisie
        TextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Entrez votre nom") },
            modifier = Modifier.fillMaxWidth()
        )
        
        Spacer(modifier = Modifier.height(16.dp))

        // Bouton
        Button(
            onClick = {
                greetingMessage = "Salut, $name !"
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Valider")
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Affichage du message
        if (greetingMessage.isNotEmpty()) {
            Text(
                text = greetingMessage,
                style = MaterialTheme.typography.h6
            )
        }
    }
}
```

---

### Étape 3 : Explications  

1. **TextField** :  
   Le composant `TextField` est utilisé pour permettre la saisie de texte par l'utilisateur.  
   - `value` : La valeur actuelle du champ de texte.  
   - `onValueChange` : Une fonction appelée lorsque l'utilisateur modifie le texte.  

   ```kotlin
   TextField(
       value = name,
       onValueChange = { name = it },
       label = { Text("Entrez votre nom") },
       modifier = Modifier.fillMaxWidth()
   )
   ```

2. **Button** :  
   Le composant `Button` permet de capturer les clics de l'utilisateur.  
   - `onClick` : Définit l'action à effectuer lorsque le bouton est cliqué.  
   ```kotlin
   Button(
       onClick = {
           greetingMessage = "Salut, $name !"
       },
       modifier = Modifier.fillMaxWidth()
   ) {
       Text("Valider")
   }
   ```

3. **État local avec `remember`** :  
   - `mutableStateOf("")` initialise une variable réactive.  
   - `remember` s'assure que l'état persiste lors des recompositions du composable.  
   ```kotlin
   var name by remember { mutableStateOf("") }
   ```

4. **Affichage conditionnel** :  
   Le message de salutation n'est affiché que si la variable `greetingMessage` n'est pas vide.  
   ```kotlin
   if (greetingMessage.isNotEmpty()) {
       Text(
           text = greetingMessage,
           style = MaterialTheme.typography.h6
       )
   }
   ```

---

### Étape 4 : Personnalisation  

Proposez aux apprenants de :  
1. Ajouter une icône au bouton pour le rendre plus attrayant.  
2. Limiter la saisie à un certain nombre de caractères.  
3. Modifier le style du message avec des couleurs et des typographies personnalisées.  

---

### Étape 5 : Exercice

**Application : Devinez l’âge**  
- **Description** : Créez une application où l'utilisateur entre son année de naissance. Lorsqu'il clique sur un bouton, l'application calcule et affiche son âge.  
- **Lien avec le projet final** : Utilisation des champs de texte et des boutons pour interagir avec l'utilisateur.  

---

Avec ce tutoriel, les apprenants seront prêts à gérer les interactions de base dans une interface utilisateur Android avec Jetpack Compose.  
```
```
---
reference: m2-créer-interface-utilisateur-tuto6
slug: tuto6
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: tuto6
description: ''
order: 95
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto6
layout: chapters
---


# **Tutoriel 6 : Gestion de l’état dans Jetpack Compose**  

**Objectif pédagogique :**  
Apprendre à gérer l’état dans une application Android avec Jetpack Compose, en comprenant les concepts d’immuabilité et en créant des interfaces réactives.

---

## **1. Introduction à la gestion de l’état**

Dans Jetpack Compose, l’état représente une donnée mutable utilisée pour rendre une interface utilisateur interactive. Lorsqu’un état change, l’interface utilisateur associée se met à jour automatiquement.

- **État immuable :** La valeur de l’état ne change pas directement, mais un nouvel état est créé en fonction du précédent.  
- **Règle principale :** L’état dans Compose doit toujours être maintenu dans une source unique de vérité.

---

## **2. Concepts clés**

### **a. `remember` et `mutableStateOf`**

Jetpack Compose utilise `remember` et `mutableStateOf` pour stocker et observer les changements d'état.

- **`remember` :** Conserve un état pendant la durée de vie d’un composable.  
- **`mutableStateOf` :** Crée un état mutable qui permet de déclencher la recomposition lorsqu’il change.  

**Exemple simple :**  
```kotlin
@Composable
fun CounterApp() {
    var count by remember { mutableStateOf(0) }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier.fillMaxSize()
    ) {
        Text(text = "Count: $count", fontSize = 24.sp)
        Button(onClick = { count++ }) {
            Text(text = "Increment")
        }
    }
}
```

---

### **b. Gestion des états dans des fonctions d'ordre supérieur**

L’état peut être géré dans des composables parents et passé comme paramètre aux enfants.

**Exemple :**  
```kotlin
@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }
    CounterDisplay(count)
    CounterButtons(onIncrement = { count++ }, onDecrement = { count-- })
}

@Composable
fun CounterDisplay(count: Int) {
    Text(text = "Count: $count", fontSize = 24.sp)
}

@Composable
fun CounterButtons(onIncrement: () -> Unit, onDecrement: () -> Unit) {
    Row {
        Button(onClick = onDecrement) { Text("Decrement") }
        Button(onClick = onIncrement) { Text("Increment") }
    }
}
```

---

## **3. Pratique guidée : Création d’une TODO liste simple**

### **Étape 1 : Définir l’état de la liste des tâches**

On commence par définir une liste mutable d’éléments pour la gestion des tâches.  
```kotlin
@Composable
fun TodoApp() {
    var tasks by remember { mutableStateOf(listOf<String>()) }

    Column(modifier = Modifier.padding(16.dp)) {
        TodoInput(onAddTask = { newTask ->
            tasks = tasks + newTask
        })
        TodoList(tasks)
    }
}
```

---

### **Étape 2 : Ajouter des tâches**

On crée un champ de saisie pour ajouter une nouvelle tâche.  
```kotlin
@Composable
fun TodoInput(onAddTask: (String) -> Unit) {
    var text by remember { mutableStateOf("") }

    Row(verticalAlignment = Alignment.CenterVertically) {
        TextField(
            value = text,
            onValueChange = { text = it },
            label = { Text("Nouvelle tâche") },
            modifier = Modifier.weight(1f)
        )
        Spacer(modifier = Modifier.width(8.dp))
        Button(onClick = {
            if (text.isNotBlank()) {
                onAddTask(text)
                text = "" // Réinitialiser le champ de saisie
            }
        }) {
            Text("Ajouter")
        }
    }
}
```

---

### **Étape 3 : Afficher les tâches**

On affiche les tâches sous forme de liste déroulante.  
```kotlin
@Composable
fun TodoList(tasks: List<String>) {
    LazyColumn {
        items(tasks) { task ->
            Text(
                text = task,
                modifier = Modifier.padding(vertical = 4.dp),
                fontSize = 18.sp
            )
        }
    }
}
```

---

## **4. Étape finale : Application complète**

Voici le code complet de l’application TODO liste :  
```kotlin
@Composable
fun TodoApp() {
    var tasks by remember { mutableStateOf(listOf<String>()) }

    Column(modifier = Modifier.padding(16.dp)) {
        TodoInput(onAddTask = { newTask ->
            tasks = tasks + newTask
        })
        Spacer(modifier = Modifier.height(16.dp))
        TodoList(tasks)
    }
}

@Composable
fun TodoInput(onAddTask: (String) -> Unit) {
    var text by remember { mutableStateOf("") }

    Row(verticalAlignment = Alignment.CenterVertically) {
        TextField(
            value = text,
            onValueChange = { text = it },
            label = { Text("Nouvelle tâche") },
            modifier = Modifier.weight(1f)
        )
        Spacer(modifier = Modifier.width(8.dp))
        Button(onClick = {
            if (text.isNotBlank()) {
                onAddTask(text)
                text = ""
            }
        }) {
            Text("Ajouter")
        }
    }
}

@Composable
fun TodoList(tasks: List<String>) {
    LazyColumn {
        items(tasks) { task ->
            Text(
                text = task,
                modifier = Modifier.padding(vertical = 4.dp),
                fontSize = 18.sp
            )
        }
    }
}
```

---

## **5. Résumé des concepts abordés**

1. **Gestion de l’état avec `remember` et `mutableStateOf`.**  
2. **Passage d’état entre composables parents et enfants.**  
3. **Création d’une interface réactive avec Jetpack Compose.**


```

```
---
reference: m3-afficher-listes-utiliser-material-design-tuto7
slug: tuto7
module_reference: mobile
part_reference: m3-afficher-listes-utiliser-material-design
concept_reference: ''
title: Tuto7 - Concepts avancés de Kotlin
description: ''
order: 123
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
```
---
reference: m3-afficher-listes-utiliser-material-design-tuto8
slug: tuto8
module_reference: mobile
part_reference: m3-afficher-listes-utiliser-material-design
concept_reference: ''
title: Tuto8 -  Création de listes avec Jetpack Compose
description: ''
order: 124
directory: m3-afficher-listes-utiliser-material-design
permalink: m3-afficher-listes-utiliser-material-design/tuto8
layout: chapters
---

# **Tutoriel 8 : Création de listes avec Jetpack Compose**

---

## **Concepts abordés :**  
- Affichage de listes déroulantes  
- Recycler les vues efficacement  
- Gestion des clics sur les éléments de la liste  

**Tags :** Lists, Jetpack Compose  

---

## **Objectif :**  
Créer une liste dynamique d'éléments en utilisant Jetpack Compose, afficher des images et du texte, et gérer les interactions utilisateur (clics sur les éléments).

---

## **Code Kotlin complet :**  

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.tooling.preview.Preview
import com.example.todoapp.R // Assurez-vous d'importer correctement votre package

// Modèle de données représentant un élément de la liste
data class ListItem(val title: String, val imageRes: Int)

// Liste de données factices pour l'exemple
val sampleItems = listOf(
    ListItem("Tâche 1", R.drawable.ic_task),  // Remplacez par des icônes appropriées
    ListItem("Tâche 2", R.drawable.ic_task),
    ListItem("Tâche 3", R.drawable.ic_task)
)

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                ListScreen(items = sampleItems)
            }
        }
    }
}

@Composable
fun ListScreen(items: List<ListItem>) {
    LazyColumn(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        items(items) { item ->
            ListItemRow(item = item)
            Divider() // Séparateur entre les éléments
        }
    }
}

@Composable
fun ListItemRow(item: ListItem) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { /* Action à exécuter lors du clic */ }
            .padding(8.dp),
        horizontalArrangement = Arrangement.Start
    ) {
        // Affiche l'image
        val image: Painter = painterResource(id = item.imageRes)
        Image(
            painter = image,
            contentDescription = item.title,
            modifier = Modifier.size(40.dp)
        )
        Spacer(modifier = Modifier.width(16.dp))  // Espacement entre l'image et le texte
        // Affiche le texte
        Text(
            text = item.title,
            style = MaterialTheme.typography.bodyLarge
        )
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewListScreen() {
    MaterialTheme {
        ListScreen(items = sampleItems)
    }
}
```

---

## **Explications du code :**

## **1. Modèle de données (`ListItem`)** :
- Représente chaque élément de la liste avec un titre et une ressource d'image.
  
## **2. Données factices (`sampleItems`)** :
- Une liste statique de `ListItem` servant d'exemple.

## **3. `MainActivity`** :
- Configure la mise en page principale en utilisant `setContent` pour afficher l'écran de liste.

## **4. `ListScreen` (Composant principal)** :
- Utilise `LazyColumn` pour afficher une liste déroulante optimisée.
- Chaque élément est rendu par la fonction `ListItemRow`.

## **5. `ListItemRow`** :
- Définit l'apparence de chaque élément de la liste.
- Utilise une `Row` pour aligner horizontalement l'image et le texte.
- Ajoute un comportement de clic sur l'élément avec `clickable`.

## **6. Aperçu (`PreviewListScreen`)** :
- Permet d'afficher un aperçu de l'interface dans Android Studio.

---

## **Lien avec le projet final :**  
- Ce tutoriel introduit la création et l'affichage de listes, un élément essentiel pour la gestion des tâches dans une application To-Do List.
- Les apprenants pourront réutiliser cette structure pour afficher une liste de tâches, ajouter des actions de clic pour modifier ou supprimer des tâches, et intégrer des icônes pour chaque état de tâche.


```
```
---
reference: m3-afficher-listes-utiliser-material-design-tuto9
slug: tuto9
module_reference: mobile
part_reference: m3-afficher-listes-utiliser-material-design
concept_reference: ''
title: Tuto9 - Introduction à Material Design
description: ''
order: 125
directory: m3-afficher-listes-utiliser-material-design
permalink: m3-afficher-listes-utiliser-material-design/tuto9
layout: chapters
---


# **Tutoriel 9 : Introduction à Material Design**

---

## **Objectif pédagogique :**
Découvrir et appliquer les principes de **Material Design** dans une application Android utilisant **Jetpack Compose**. Les apprenants apprendront à concevoir une interface moderne et attrayante en intégrant des thèmes, des couleurs, des formes, des typographies, et des pratiques d'accessibilité.

---

## **Concepts abordés :**
- Introduction à **Material Design**
- Création et personnalisation des thèmes Material
- Utilisation des composants Material (boutons, cartes, etc.)
- Intégration de couleurs et de formes
- Bonnes pratiques en matière d'accessibilité

---

## **Tags :**
Material Design, UI/UX, Jetpack Compose, Accessibilité

---

## **Résumé :**
Apprenez à utiliser **Material Design** pour créer des interfaces utilisateur modernes et intuitives. Ce tutoriel vous guidera à travers les étapes pour appliquer un thème, personnaliser les composants visuels, et garantir une meilleure expérience utilisateur.

---

## **Niveau 1 : Présentation de Material Design**

**Material Design** est un ensemble de principes et de composants développé par Google pour créer des interfaces cohérentes et esthétiques. Il repose sur la lumière, la profondeur et le mouvement pour offrir une expérience utilisateur engageante.

## **Étapes :**
1. **Comprendre les composants de base de Material Design :**
   - Boutons, cartes, barres d'applications, champs de texte.
   - Chaque composant possède des variantes spécifiques pour respecter l'esthétique Material.

2. **Intégrer Material Design dans Compose :**
   Compose fournit une bibliothèque de composants prêts à l'emploi qui suivent les directives Material. Utilisez les composants tels que `Button`, `Card`, et `TextField`.

---

## **Niveau 2 : Création et personnalisation des thèmes Material**

Les thèmes permettent de définir les couleurs, la typographie et les formes utilisées dans votre application.

## **Code Kotlin complet :**

```kotlin
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.tooling.preview.Preview

// Définition du thème Material personnalisé
@Composable
fun MyAppTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = lightColorScheme(
            primary = Color(0xFF6200EE),
            onPrimary = Color.White,
            secondary = Color(0xFF03DAC6),
            onSecondary = Color.Black,
            background = Color(0xFFF5F5F5),
            surface = Color.White,
            onSurface = Color.Black,
        ),
        typography = Typography(
            titleLarge = MaterialTheme.typography.titleLarge.copy(color = Color(0xFF6200EE))
        ),
        content = content
    )
}

// Utilisation des composants Material Design avec le thème
@Composable
fun MyAppScreen() {
    MyAppTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            Column(
                modifier = Modifier.padding(16.dp)
            ) {
                Text(
                    text = "Bienvenue dans Material Design",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.primary
                )

                Spacer(modifier = Modifier.height(16.dp))

                Button(
                    onClick = { /* Action au clic */ },
                    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
                ) {
                    Text("Appuyer ici", color = MaterialTheme.colorScheme.onPrimary)
                }

                Spacer(modifier = Modifier.height(16.dp))

                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 8.dp)
                ) {
                    Text(
                        text = "Ceci est une carte Material",
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }
            }
        }
    }
}

// Aperçu dans Android Studio
@Preview(showBackground = true)
@Composable
fun MyAppScreenPreview() {
    MyAppScreen()
}
```

---

## **Explications du code :**

1. **Thème personnalisé :**
   - Utilise `MaterialTheme` pour définir un jeu de couleurs et une typographie spécifique.
   - `lightColorScheme` permet de personnaliser les couleurs pour différents éléments (arrière-plan, boutons, etc.).

2. **Utilisation de composants Material :**
   - `Text`, `Button`, et `Card` sont personnalisés avec les couleurs et styles du thème.
   - Les composants utilisent les couleurs du thème grâce à `MaterialTheme.colorScheme`.

3. **Accessibilité :**
   - L'accessibilité est assurée en utilisant des contrastes de couleurs appropriés et en suivant les bonnes pratiques de conception.

---

## **Activité pratique :**
**Objectif :** Modifier les couleurs et les composants pour créer une interface qui respecte le thème de votre application To-Do List.

1. Créez un thème personnalisé avec vos propres couleurs.
2. Intégrez un bouton et une carte utilisant ce thème.
3. Assurez-vous que l'interface respecte les principes d'accessibilité (contraste, tailles de texte).

---

## **Conclusion :**
Ce tutoriel vous a introduit aux fondamentaux de **Material Design** avec Jetpack Compose. Vous avez appris à créer un thème personnalisé, à utiliser des composants stylisés et à concevoir des interfaces modernes et accessibles.
```

## **Travail à réaliser :**  

rédiger le Tutoriel 10 : Navigation dans Jetpack Compose


