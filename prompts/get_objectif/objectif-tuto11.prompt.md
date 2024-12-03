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


### **Travail à réaliser :**  

Donner l'objectif de Ce tutoriel que j'ai trouver sur la formation d'android sur compose 

### Tutoriel que j'ai trouver sur le web 

````md
                ViewModel et l'état dans Compose  |  Android Developers    

 [![Android Developers](https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/android/images/lockup.svg)](/)

/

*   English
*   Deutsch
*   Español – América Latina
*   Français
*   Indonesia
*   Polski
*   Português – Brasil
*   Tiếng Việt
*   中文 – 简体
*   中文 – 繁體
*   日本語
*   한국어

[Android Studio](https://developer.android.com/studio?hl=fr) Connexion [![Android Developers](https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/android/images/lockup.svg)](/)

*   [Android Studio](/studio)

body { transition: opacity ease-in 0.2s; } body\[unresolved\] { opacity: 0; display: block; overflow: hidden; position: relative; }

# ViewModel et l'état dans Compose

Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.

## 1\. Avant de commencer

Dans les ateliers précédents, vous avez découvert le cycle de vie des activités et les problèmes de cycle de vie liés aux modifications de configuration. Lorsqu'une configuration est modifiée, vous pouvez enregistrer les données d'une application de différentes manières, par exemple en utilisant `rememberSaveable` ou en enregistrant l'état de l'instance. Cependant, ces options peuvent créer des problèmes. Dans la plupart des cas, vous pouvez utiliser `rememberSaveable`, mais vous devrez peut-être conserver la logique dans ou près des composables. Quand une application se développe, il convient de séparer les données et la logique des composables. Dans cet atelier de programmation, vous allez découvrir une méthode efficace pour concevoir votre application et préserver ses données lors des modifications de configuration grâce à la bibliothèque Android Jetpack, à `ViewModel` et aux principes fondamentaux de l'architecture des applications Android.

Les bibliothèques [Android Jetpack](https://developer.android.com/jetpack?hl=fr) vous permettent de développer plus facilement des applications Android performantes. Elles vous aident à suivre les bonnes pratiques, vous évitent d'avoir à écrire du code récurrent et simplifient les tâches complexes. Vous pouvez ainsi vous concentrer sur le code qui vous intéresse, comme la logique de l'application.

L'_architecture des applications_ est l'ensemble des règles qui régit la conception d'une application. Comme le plan d'une maison, votre architecture fournit la structure de votre application. Avec une bonne architecture, votre code peut être robuste, flexible, évolutif, testable et facile à gérer au cours des années à venir. Le [Guide de l'architecture des applications](https://developer.android.com/topic/libraries/architecture?hl=fr) fournit des recommandations sur l'architecture des applications et les bonnes pratiques en la matière.

Dans cet atelier de programmation, vous allez apprendre à utiliser [`ViewModel`](https://developer.android.com/topic/libraries/architecture/viewmodel?hl=fr), l'un des composants d'architecture des bibliothèques Android Jetpack capables de stocker les données de vos applications. Si le framework détruit et recrée les activités lors d'une modification de configuration, ou lorsque d'autres événements surviennent, les données stockées ne sont pas perdues. Cependant, les données seront perdues si l'activité est détruite suite à l'arrêt du processus. Le `ViewModel` ne met en cache les données que via des recréations liées à une activité rapide.

## Conditions préalables

*   Vous maîtrisez Kotlin, y compris les fonctions, les lambdas et les composables sans état.
*   Vous disposez de connaissances de base en création de mises en page dans Jetpack Compose.
*   Vous disposez de connaissances de base en Material Design.

## Points abordés

*   Présentation de l'[architecture des applications Android](https://developer.android.com/topic/architecture?hl=fr#recommended-app-arch)
*   Utiliser la classe [`ViewModel`](https://developer.android.com/reference/android/arch/lifecycle/ViewModel?hl=fr) dans votre application
*   Comment conserver les données de l'interface utilisateur en modifiant la configuration de l'appareil à l'aide de [`ViewModel`](https://developer.android.com/reference/android/arch/lifecycle/ViewModel?hl=fr)

## Objectifs de l'atelier

*   Créer une application de jeu [Unscramble](https://github.com/google-developer-training/basic-android-kotlin-compose-training-unscramble), dans laquelle l'utilisateur doit retrouver un mot à partir de lettres mélangées.

## Ce dont vous avez besoin

*   La dernière version d'Android Studio
*   Une connexion Internet pour télécharger le code de démarrage

## 2\. Présentation de l'application

## Présentation du jeu

L'application Unscramble est un jeu en solo qui repose sur le principe des anagrammes. L'application affiche un mot dont les lettres ont été mélangées, et le joueur doit retrouver le mot en utilisant toutes les lettres affichées. Si le mot est correct, le joueur marque des points. Dans le cas contraire, il peut retenter sa chance. L'application propose également une option permettant d'ignorer un mot. Dans le coin supérieur droit, l'application affiche le nombre de mots qui vous ont déjà été proposés au cours de la partie. Il y a 10 mots à deviner par partie.

![](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/ac79bf1ed6375a27.png?hl=fr "Écran de jeu initial avec un nombre de mots mélangé et un score de zéro")

![](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/a1bc55781d627b38.png?hl=fr "Écran de jeu affichant le champ de texte d'erreur  ")

![](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/c6727347fe0db265.png?hl=fr "Écran de jeu avec une boîte de dialogue de félicitations indiquant le score final et l'option permettant de quitter ou de rejouer. ")

## **Télécharger le code de démarrage**

Pour commencer, téléchargez le code de démarrage :

[file\_downloadTélécharger le fichier ZIP](https://github.com/google-developer-training/basic-android-kotlin-compose-training-unscramble/archive/refs/heads/starter.zip)

Vous pouvez également cloner le dépôt GitHub du code :

$ git clone
https://github.com/google-developer-training/basic-android-kotlin-compose-training-unscramble.git
$ cd basic-android-kotlin-compose-training-unscramble
$ git checkout starter

**Remarque** : Le code de démarrage se trouve dans la branche `starter` du dépôt téléchargé.

Vous pouvez parcourir le code de démarrage dans le dépôt GitHub [`Unscramble`](https://github.com/google-developer-training/basic-android-kotlin-compose-training-unscramble/tree/starter).

## 3\. Présentation de l'application de démarrage

Pour vous familiariser avec le code de démarrage, procédez comme suit :

1.  Dans Android Studio, ouvrez le projet contenant le code de démarrage.
2.  Exécutez l'appli sur un appareil Android ou sur un émulateur.
3.  Appuyez sur les boutons **Submit** (Envoyer) et **Skip** (Ignorer) pour tester l'appli.

Vous remarquerez des bugs dans l'appli. Le mot mélangé ne s'affiche pas, mais est codé en dur sur "scrambleun", et rien ne se passe lorsque vous appuyez sur ces boutons.

Dans cet atelier de programmation, vous allez implémenter la fonctionnalité de jeu à l'aide de l'architecture des applications Android.

## Explication du code de démarrage

Le code de démarrage vous propose une mise en page prédéfinie pour l'écran du jeu. Dans ce parcours, vous allez vous concentrer sur la mise en œuvre de la logique du jeu. Vous utiliserez des composants d'architecture pour implémenter la structure d'application recommandée et résoudre les problèmes mentionnés ci-dessus. Voici une présentation rapide de certains fichiers pour vous aider à vous lancer.

**WordsData.kt**

Ce fichier contient la liste des mots utilisés dans le jeu, ainsi que des constantes pour le nombre maximal de mots par partie et le nombre de points gagnés par le joueur pour chaque mot trouvé.

```
package com.example.android.unscramble.data

const val MAX_NO_OF_WORDS = 10
const val SCORE_INCREASE = 20

// Set with all the words for the Game
val allWords: Set<String> =
   setOf(
       "animal",
       "auto",
       "anecdote",
       "alphabet",
       "all",
       "awesome",
       "arise",
       "balloon",
       "basket",
       "bench",
      // ...
       "zoology",
       "zone",
       "zeal"
)
```

**AVERTISSEMENT** : Il est déconseillé de coder des chaînes en dur. Ajoutez des chaînes à `strings.xml` pour faciliter la localisation de l'application. Dans cet exemple, les chaînes sont codées en dur par souci de simplicité et vous permettent de vous concentrer sur l'architecture de l'application.

**MainActivity.kt**

Ce fichier contient principalement du code généré à partir d'un modèle. Le composable `GameScreen` est affiché dans le bloc `setContent{}`.

**GameScreen.kt**

Tous les composables de l'interface utilisateur sont définis dans le fichier **`GameScreen.kt`**. Les sections suivantes vous présentent quelques fonctions modulables.

**GameStatus**

`GameStatus` est une fonction composable qui affiche le score du jeu en bas de l'écran. La fonction composable contient un composable Text dans une `Card`. Pour l'instant, le score est codé en dur pour être `0`.

![1a7e4472a5638d61.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/1a7e4472a5638d61.png?hl=fr)

```
// No need to copy, this is included in the starter code.

@Composable
fun GameStatus(score: Int, modifier: Modifier = Modifier) {
    Card(
        modifier = modifier
    ) {
        Text(
            text = stringResource(R.string.score, score),
            style = typography.headlineMedium,
            modifier = Modifier.padding(8.dp)
        )
    }
}
```

**GameLayout**

`GameLayout` est une fonction composable qui affiche la fonctionnalité principale du jeu, qui comprend le mot mélangé, les instructions du jeu et un champ de texte qui accepte les propositions de l'utilisateur.

![b6ddb1f07f10df0c.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/b6ddb1f07f10df0c.png?hl=fr "GameLayout affichant le mot mélangé")

Notez que le code `GameLayout` ci-dessous contient une colonne dans une `Card` avec trois éléments "enfant" : le mot mélangé, le texte des instructions et le champ de texte pour le mot `OutlinedTextField` de l'utilisateur. Pour le moment, le mot mélangé est codé en dur pour être `scrambleun`. Plus tard dans l'atelier, vous implémenterez une fonctionnalité permettant d'afficher un mot du fichier `WordsData.kt`.

```
// No need to copy, this is included in the starter code.

@Composable
fun GameLayout(modifier: Modifier = Modifier) {
   val mediumPadding = dimensionResource(R.dimen.padding_medium)
   Card(
       modifier = modifier,
       elevation = CardDefaults.cardElevation(defaultElevation = 5.dp)
   ) {
       Column(
           verticalArrangement = Arrangement.spacedBy(mediumPadding),
           horizontalAlignment = Alignment.CenterHorizontally,
           modifier = Modifier.padding(mediumPadding)
       ) {
           Text(
               modifier = Modifier
                   .clip(shapes.medium)
                   .background(colorScheme.surfaceTint)
                   .padding(horizontal = 10.dp, vertical = 4.dp)
                   .align(alignment = Alignment.End),
               text = stringResource(R.string.word_count, 0),
               style = typography.titleMedium,
               color = colorScheme.onPrimary
           )
           Text(
               text = "scrambleun",
               style = typography.displayMedium
           )
           Text(
               text = stringResource(R.string.instructions),
               textAlign = TextAlign.Center,
               style = typography.titleMedium
           )
           OutlinedTextField(
               value = "",
               singleLine = true,
               shape = shapes.large,
               modifier = Modifier.fillMaxWidth(),
               colors = TextFieldDefaults.textFieldColors(containerColor = colorScheme.surface),
               onValueChange = { },
               label = { Text(stringResource(R.string.enter_your_word)) },
               isError = false,
               keyboardOptions = KeyboardOptions.Default.copy(
                   imeAction = ImeAction.Done
               ),
               keyboardActions = KeyboardActions(
                   onDone = { }
               )
           )
       }
   }
}
```

Le composable `OutlinedTextField` est semblable au composable `TextField` des applications vu dans les précédents ateliers.

Il existe deux types de champs de texte :

*   Les champs de texte remplis
*   Champs de texte encadrés

![3df34220c3d177eb.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/3df34220c3d177eb.png?hl=fr "Champ de texte rempli et champ de texte encadré")

Les champs de texte encadrés sont moins visibles que les champs de texte remplis. Lorsqu'ils apparaissent au niveau des formulaires, qui réunissent de nombreux champs de texte, leur accentuation réduite facilite la mise en page.

Dans le code de démarrage, `OutlinedTextField` ne se met pas à jour lorsque l'utilisateur saisit une proposition. Vous allez mettre à jour cette fonctionnalité au cours de cet atelier.

**GameScreen**

Le composable `GameScreen` contient les fonctions composables `GameStatus` et `GameLayout`, le titre du jeu, le nombre de mots et les composables des boutons **Submit** (Envoyer) et **Skip** (Ignorer).

![ac79bf1ed6375a27.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/ac79bf1ed6375a27.png?hl=fr "Écran de jeu avec tous les composables ")

```
@Composable
fun GameScreen() {
    val mediumPadding = dimensionResource(R.dimen.padding_medium)

    Column(
        modifier = Modifier
            .verticalScroll(rememberScrollState())
            .padding(mediumPadding),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

        Text(
            text = stringResource(R.string.app_name),
            style = typography.titleLarge,
        )

        GameLayout(
            modifier = Modifier
                .fillMaxWidth()
                .wrapContentHeight()
                .padding(mediumPadding)
        )
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(mediumPadding),
            verticalArrangement = Arrangement.spacedBy(mediumPadding),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {

            Button(
                modifier = Modifier.fillMaxWidth(),
                onClick = { }
            ) {
                Text(
                    text = stringResource(R.string.submit),
                    fontSize = 16.sp
                )
            }

            OutlinedButton(
                onClick = { },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = stringResource(R.string.skip),
                    fontSize = 16.sp
                )
            }
        }

        GameStatus(score = 0, modifier = Modifier.padding(20.dp))
    }
}
```

Les événements de clic de bouton ne sont pas implémentés dans le code de démarrage. Vous allez implémenter ces événements au cours de cet atelier.

**FinalScoreDialog**

Le composable `FinalScoreDialog` affiche une boîte de dialogue, c'est-à-dire une petite fenêtre qui invite l'utilisateur à effectuer les actions **Play Again** (Rejouer) ou **Exit** (Quitter le jeu). Plus tard dans cet atelier de programmation, vous allez implémenter une logique pour afficher cette boîte de dialogue à la fin du jeu.

![dba2d9ea62aaa982.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/dba2d9ea62aaa982.png?hl=fr "Écran de l'application affichant la boîte de dialogue du score")

```
// No need to copy, this is included in the starter code.

@Composable
private fun FinalScoreDialog(
    score: Int,
    onPlayAgain: () -> Unit,
    modifier: Modifier = Modifier
) {
    val activity = (LocalContext.current as Activity)

    AlertDialog(
        onDismissRequest = {
           // Dismiss the dialog when the user clicks outside the dialog or on the back
           // button. If you want to disable that functionality, simply use an empty
           // onDismissRequest.
        },
        title = { Text(text = stringResource(R.string.congratulations)) },
        text = { Text(text = stringResource(R.string.you_scored, score)) },
        modifier = modifier,
        dismissButton = {
            TextButton(
                onClick = {
                    activity.finish()
                }
            ) {
                Text(text = stringResource(R.string.exit))
            }
        },
        confirmButton = {
            TextButton(onClick = onPlayAgain) {
                Text(text = stringResource(R.string.play_again))
            }
        }
    )
}
```

## 4\. Notions fondamentales sur l'architecture des applications

L'architecture d'une application vous fournit les principes fondamentaux qui vous aideront à répartir les responsabilités de l'application dans les différentes classes. Une architecture d'application performante vous permet de faire évoluer votre projet et d'y ajouter des fonctionnalités supplémentaires. L'architecture peut également faciliter le travail en équipe.

Les [principes fondamentaux de l'architecture des applications](https://developer.android.com/jetpack/guide?hl=fr#common-principles) sont la **séparation des tâches** et le **contrôle de l'interface utilisateur à partir d'un modèle**.

**Séparation des tâches**

Selon le principe de conception de séparation des tâches, l'application doit être divisée en classes, chacune ayant des responsabilités distinctes.

**Contrôle de l'UI à partir d'un modèle**

Le principe de contrôle de l'UI à partir d'un modèle indique que vous devez contrôler votre UI à l'aide d'un modèle, de préférence un modèle persistant. Les modèles sont des composants chargés de gérer les données d'une appli. Ils sont indépendants des éléments d'UI et des composants de votre appli et ne sont donc pas concernés par le cycle de vie de l'appli, ni par les préoccupations qui en découlent.

## Architecture d'application recommandée

Compte tenu des principes fondamentaux de l'architecture des applications mentionnés dans la section précédente, chaque application doit comporter au moins deux couches :

*   **Couche d'interface utilisateur** : une couche qui affiche les données de l'application à l'écran, mais qui reste indépendante des données.
*   **Couche de données** : une couche qui stocke, récupère et expose les données de l'application.

Vous pouvez ajouter une autre couche, appelée couche de domaine, pour simplifier et réutiliser les interactions entre l'interface utilisateur et les couches de données. Cette couche est facultative et dépasse le cadre de cet atelier.

## ![a4da6fa5c1c9fed5.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/a4da6fa5c1c9fed5.png?hl=fr "Schéma de l'architecture avec la couche d'interface utilisateur, la couche de domaine et la couche de données")

**Remarque** : Dans ce guide, les flèches des schémas représentent les dépendances entre les classes. Par exemple, la couche du domaine dépend des classes de la couche de données.

### Couche d'interface utilisateur

Le rôle de la couche d'interface utilisateur, ou couche de présentation, est d'afficher les données de l'application à l'écran. Chaque fois que les données changent en raison d'une interaction utilisateur (p. ex. l'appui sur un bouton), l'interface utilisateur doit se mettre à jour pour refléter les modifications.

La couche de l'interface utilisateur contient les composants suivants :

*   **Éléments d'interface utilisateur** : les composants qui affichent les données à l'écran. Pour créer ces éléments, utilisez [Jetpack Compose](https://developer.android.com/jetpack/compose?hl=fr).
*   **Conteneurs d'états** : les composants qui contiennent les données, les exposent à l'interface utilisateur et gèrent la logique de l'application. Par exemple, un [ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel?hl=fr) est un conteneur d'état.

![6eaee5b38ec247ae.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/6eaee5b38ec247ae.png?hl=fr "ViewModel expose les données de l'application à la couche de l'interface utilisateur  ")

### ViewModel

Le composant `ViewModel` conserve et expose l'état utilisé par l'UI. L'état de l'interface utilisateur correspond aux données d'application transformées par le `ViewModel`. `ViewModel` permet à votre application de suivre le principe fondamental de l'architecture consistant à contrôler l'UI à partir du modèle.

`ViewModel` stocke les données liées à l'application qui ne sont pas détruites lorsque le framework Android détruit et recrée l'activité. Contrairement à l'instance d'activité, les objets `ViewModel` ne sont pas détruits. L'application conserve automatiquement les objets `ViewModel` lors des modifications de configuration pour que les données détenues par ces objets soient immédiatement disponibles après la recomposition.

Pour implémenter `ViewModel` dans votre application, étendez la classe `ViewModel`, qui provient de la bibliothèque de composants d'architecture, et utilisez-la pour stocker les données de l'application.

### État de l'interface utilisateur

L'interface utilisateur correspond à ce que l'utilisateur voit, tandis que l'état de l'interface utilisateur correspond à ce qu'il devrait voir selon l'application. L'interface utilisateur est la représentation visuelle de son état. Toute modification apportée à l'état de l'UI est immédiatement répercutée dans l'interface.

![9cfedef1750ddd2c.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/9cfedef1750ddd2c.png?hl=fr)

_L'UI est le résultat d'une liaison entre des éléments d'interface utilisateur et un état d'interface utilisateur._

```
// Example of UI state definition, do not copy over

data class NewsItemUiState(
    val title: String,
    val body: String,
    val bookmarked: Boolean = false,
    ...
)
```

### **Immuabilité**

Dans l'exemple ci-dessus, la définition de l'état de l'interface utilisateur est immuable. Les objets immuables vous assurent que plusieurs sources ne modifient pas instantanément l'état de l'appli. Cette protection libère l'interface utilisateur, ce qui lui permet de se concentrer sur un seul rôle : lire l'état et mettre à jour les éléments de l'interface utilisateur en conséquence. Vous ne devez donc jamais modifier directement l'état de l'UI, sauf si l'UI elle-même est la seule source de ses données. Si vous ne respectez pas ce principe, alors il existera plusieurs sources de vérité pour une même information, ce qui entraînera des incohérences au niveau des données et des bugs.

## 5\. Ajouter un ViewModel

Dans cette tâche, vous allez ajouter un `ViewModel` à votre application pour y stocker l'état de l'UI de votre jeu (mot mélangé, nombre de mots et score). Pour résoudre le problème dans le code de démarrage identifié à la section précédente, vous devez enregistrer les données du jeu dans `ViewModel`.

1.  Ouvrez `build.gradle.kts (Module :app)`, faites défiler la page jusqu'au bloc `dependencies` et ajoutez la dépendance suivante pour `ViewModel`. Cette dépendance permet d'ajouter le ViewModel tenant compte du cycle de vie à votre appli Compose.

```
dependencies {
// other dependencies

    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.6.1")
//...
}
```

2.  Dans le package `ui`, créez une classe/un fichier Kotlin appelé `GameViewModel`. Vous l'étendrez à partir de la classe `ViewModel`.

```
import androidx.lifecycle.ViewModel

class GameViewModel : ViewModel() {
}
```

3.  Dans le package `ui`, ajoutez une classe de modèle pour l'UI d'état, appelée `GameUiState`. Transformez-la en une classe de données et ajoutez une variable pour le mot mélangé.

```
data class GameUiState(
   val currentScrambledWord: String = ""
)
```

## StateFlow

[`StateFlow`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/) est un flux observable de conteneur de données qui émet les mises à jour de l'état actuel et du nouvel état. Sa propriété [`value`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/value.html) reflète la valeur de l'état actuel. Pour mettre à jour l'état et l'envoyer au flux, attribuez une nouvelle valeur à la propriété de valeur de la classe [`MutableStateFlow`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-mutable-state-flow/index.html).

Dans Android, `StateFlow` fonctionne bien avec les classes qui doivent conserver un état immuable observable.

Un `StateFlow` peut être exposé à partir de `GameUiState` afin que les composables puissent écouter les mises à jour de l'état de l'interface utilisateur et faire en sorte que l'état de l'écran survive aux changements de configuration.

Dans la classe `GameViewModel`, ajoutez la propriété `_uiState` suivante.

```
import kotlinx.coroutines.flow.MutableStateFlow

// Game UI state
private val _uiState = MutableStateFlow(GameUiState())
```

## Propriété de support

Une propriété de support vous permet de renvoyer un élément d'un getter qui n'est pas l'objet exact.

Pour la propriété `var`, le framework Kotlin génère des getters et des setters.

Pour les méthodes getter et setter, vous pouvez forcer l'une de ces méthodes (ou les deux) afin de personnaliser leur comportement. Pour implémenter une propriété de support, vous devez forcer la méthode getter afin de renvoyer une version en lecture seule de vos données. L'exemple suivant vous montre une propriété de support.

```
//Example code, no need to copy over

// Declare private mutable variable that can only be modified
// within the class it is declared.
private var _count = 0

// Declare another public immutable field and override its getter method.
// Return the private property's value in the getter method.
// When count is accessed, the get() function is called and
// the value of _count is returned.
val count: Int
    get() = _count
```

Imaginons que vous souhaitiez que les données de l'application soient privées pour `ViewModel` :

Dans la classe `ViewModel` :

*   La propriété `_count` est `private` (privée) et modifiable. Par conséquent, elle n'est accessible et modifiable que dans la classe `ViewModel`.

En dehors de la classe `ViewModel` :

*   Dans Kotlin, le modificateur de visibilité par défaut est `public`. `count` est donc public et accessible à partir d'autres classes, comme les contrôleurs d'interface utilisateur. Un type `val` ne peut pas avoir de setter. Comme il est immuable et en lecture seule, vous pouvez uniquement remplacer la méthode `get()`. Lorsqu'une classe externe accède à cette propriété, elle renvoie la valeur de `_count`, qui n'est pas modifiable. Cette propriété de support protège les données de l'application à l'intérieur de `ViewModel` contre les modifications indésirables et non sécurisées effectuées par les classes externes. Elle permet également aux appelants externes d'accéder à sa valeur de façon sécurisée.

1.  Dans le fichier `GameViewModel.kt`, ajoutez une propriété de support à `uiState` nommée `_uiState`. Nommez la propriété `uiState` et utilisez le type `StateFlow<GameUiState>`.

`_uiState` est désormais accessible et modifiable uniquement dans `GameViewModel`. L'interface utilisateur peut lire sa valeur à l'aide de la propriété en lecture seule, `uiState`. Vous pourrez corriger l'erreur d'initialisation à l'étape suivante.

```
import kotlinx.coroutines.flow.StateFlow

// Game UI state

// Backing property to avoid state updates from other classes
private val _uiState = MutableStateFlow(GameUiState())
val uiState: StateFlow<GameUiState>
```

2.  Définissez `uiState` sur `_uiState.asStateFlow()`.

Le `asStateFlow()` transforme ce flux d'état modifiable en un flux d'état en _lecture seule_.

```
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

// Game UI state
private val _uiState = MutableStateFlow(GameUiState())
val uiState: StateFlow<GameUiState> = _uiState.asStateFlow()
```

## Afficher un mot mélangé aléatoire

Dans cette tâche, vous allez ajouter des méthodes d'assistance pour choisir un mot aléatoire dans `WordsData.kt` et mélanger les lettres.

1.  Dans `GameViewModel`, ajoutez une propriété appelée `currentWord` de type `String` pour enregistrer le mot mélangé actuel.

```
private lateinit var currentWord: String
```

2.  Ajoutez une méthode d'assistance pour choisir un mot aléatoire dans la liste et le lire en mode aléatoire. Nommez-le `pickRandomWordAndShuffle()` sans paramètre d'entrée et faites-lui renvoyer une `String`.

```
import com.example.unscramble.data.allWords

private fun pickRandomWordAndShuffle(): String {
   // Continue picking up a new random word until you get one that hasn't been used before
   currentWord = allWords.random()
   if (usedWords.contains(currentWord)) {
       return pickRandomWordAndShuffle()
   } else {
       usedWords.add(currentWord)
       return shuffleCurrentWord(currentWord)
   }
}
```

Android Studio signale une erreur pour la variable et la fonction non définies.

3.  Dans `GameViewModel`, ajoutez la propriété suivante après la propriété `currentWord` pour servir d'ensemble modifiable qui stockera les mots utilisés dans le jeu.

```
// Set of words used in the game
private var usedWords: MutableSet<String> = mutableSetOf()
```

4.  Ajoutez une autre méthode d'assistance pour lire le mot actuel `shuffleCurrentWord()` en mode aléatoire, qui accepte une `String` et renvoie la `String` dans un ordre aléatoire.

```
private fun shuffleCurrentWord(word: String): String {
   val tempWord = word.toCharArray()
   // Scramble the word
   tempWord.shuffle()
   while (String(tempWord).equals(word)) {
       tempWord.shuffle()
   }
   return String(tempWord)
}
```

5.  Ajoutez une fonction d'assistance appelée `resetGame()` permettant d'initialiser le jeu. Vous utiliserez cette fonction plus tard pour démarrer et redémarrer le jeu. Dans cette fonction, effacez tous les mots de l'ensemble `usedWords` et initialisez `_uiState`. Choisissez un nouveau mot pour `currentScrambledWord` avec `pickRandomWordAndShuffle()`.

```
fun resetGame() {
   usedWords.clear()
   _uiState.value = GameUiState(currentScrambledWord = pickRandomWordAndShuffle())
}
```

6.  Ajoutez un bloc `init` au `GameViewModel` et appelez `resetGame()` à partir de celui-ci.

```
init {
   resetGame()
}
```

Lorsque vous compilez votre appli, vous ne verrez toujours aucune modification dans l'interface utilisateur. Vous ne transmettez pas les données du `ViewModel` aux composables de `GameScreen`.

## 6\. Structurer votre interface utilisateur Compose

Dans Compose, le seul moyen de mettre à jour l'UI est de modifier l'état de l'appli. Vous pouvez contrôler l'état de l'interface utilisateur. À chaque modification de l'interface utilisateur, Compose recrée les parties de l'arborescence qui ont été modifiées. Les composables peuvent accepter des événements "state" et "expose". Par exemple, un objet `TextField`/`OutlinedTextField` accepte une valeur et expose un rappel `onValueChange` qui demande au gestionnaire de rappel de modifier la valeur.

```
//Example code no need to copy over

var name by remember { mutableStateOf("") }
OutlinedTextField(
    value = name,
    onValueChange = { name = it },
    label = { Text("Name") }
)
```

Étant donné que les composables acceptent des événements "state" et "expose", le modèle de flux de données unidirectionnel s'adapte bien à Jetpack Compose. Ce guide explique comment implémenter le modèle de flux de données unidirectionnel, implémenter des événements et des conteneurs d'état, et utiliser les `ViewModel` dans Compose.

## **Flux de données unidirectionnel**

Un _flux de données unidirectionnel_ (UDF) est un modèle de conception dans lequel l'état redescend et les événements remontent. En suivant le flux de données unidirectionnel, vous pouvez dissocier les composables qui affichent l'état dans l'interface utilisateur des parties de votre application qui stockent et modifient l'état.

La boucle de mise à jour de l'UI pour une application utilisant un flux de données unidirectionnel se présente comme suit :

*   **Événement** : une partie de l'interface utilisateur génère un événement et le fait remonter (p. ex. un clic sur le bouton transmis au ViewModel qui va le gérer), ou un événement transmis à partir d'autres couches de votre application (p. ex. un message qui indique l'expiration de la session utilisateur).
*   **Modification d'état** : un gestionnaire d'événements peut modifier l'état.
*   **État de l'affichage** : le conteneur d'état transmet l'état, et l'interface utilisateur l'affiche.

![61eb7bcdcff42227.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/61eb7bcdcff42227.png?hl=fr "L'UI est le résultat d'une liaison entre des éléments d'interface utilisateur et un état d'interface utilisateur.")

L'utilisation du modèle de flux de données unidirectionnel (UDF) pour l'architecture des applications a les conséquences suivantes :

*   `ViewModel` conserve et expose l'état utilisé par l'UI.
*   L'état de l'interface utilisateur correspond aux données d'application transformées par `ViewModel`.
*   L'interface utilisateur informe `ViewModel` des événements d'utilisateurs.
*   `ViewModel` gère les actions de l'utilisateur et met à jour l'état.
*   L'état mis à jour est renvoyé à l'interface utilisateur, puis affiché.
*   Ce processus se répète pour tout événement qui provoque une mutation d'état.

## Transmettre les données

Transmettez l'instance du ViewModel à l'interface utilisateur, c'est-à-dire de `GameViewModel` à `GameScreen()` dans le fichier **`GameScreen.kt`**. Dans `GameScreen()`, utilisez l'instance du ViewModel pour accéder à `uiState` à l'aide de `collectAsState()`.

La fonction `collectAsState()` collecte les valeurs de ce [`StateFlow`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/index.html) et représente sa dernière valeur à l'aide de [`State`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/State?hl=fr). [`StateFlow.value`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/value.html) est utilisée comme valeur initiale. Chaque fois qu'une nouvelle valeur est ajoutée dans [`StateFlow`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/index.html), la valeur renvoyée [`State`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/State?hl=fr) se met à jour, ce qui entraîne la recomposition de chaque utilisation de [`State.value`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/State?hl=fr#value\(\)).

1.  Dans la fonction `GameScreen`, transmettez un deuxième argument du type `GameViewModel` avec une valeur par défaut de `viewModel()`.

```
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun GameScreen(
   gameViewModel: GameViewModel = viewModel()
) {
   // ...
}
```

![de93b81a92416c23.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/de93b81a92416c23.png?hl=fr "Transmission de l'interface d'état du jeu de ViewModel au composable GameScreen")

2.  Dans la fonction `GameScreen()`, ajoutez une variable appelée `gameUiState`. Utilisez le délégué `by` et appelez `collectAsState()` sur `uiState`.

Grâce à cette approche, lorsque la valeur `uiState` est modifiée, la recomposition a lieu pour les composables utilisant la valeur `gameUiState`.

```
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue

@Composable
fun GameScreen(
   // ...
) {
   val gameUiState by gameViewModel.uiState.collectAsState()
   // ...
}
```

3.  Transmettez `gameUiState.currentScrambledWord` au composable `GameLayout()`. Vous ajouterez l'argument à une étape ultérieure. Pour le moment, vous pouvez ignorer l'erreur.

```
GameLayout(
   currentScrambledWord = gameUiState.currentScrambledWord,
   modifier = Modifier
       .fillMaxWidth()
       .wrapContentHeight()
       .padding(mediumPadding)
)
```

4.  Ajoutez `currentScrambledWord` comme autre paramètre à la fonction composable `GameLayout()`.

```
@Composable
fun GameLayout(
   currentScrambledWord: String,
   modifier: Modifier = Modifier
) {
}
```

5.  Mettez à jour la fonction composable `GameLayout()` pour afficher `currentScrambledWord`. Définissez le paramètre `text` du premier champ de texte de la colonne sur `currentScrambledWord`.

```
@Composable
fun GameLayout(
   // ...
) {
   Column(
       verticalArrangement = Arrangement.spacedBy(24.dp)
   ) {
       Text(
           text = currentScrambledWord,
           fontSize = 45.sp,
           modifier = modifier.align(Alignment.CenterHorizontally)
       )
    //...
    }
}
```

6.  Exécutez et créez l'application. Le mot mélangé doit s'afficher.

![6d93a8e1ba5dad6f.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/6d93a8e1ba5dad6f.png?hl=fr "Écran de jeu avec un mot mélangé")

## Afficher le mot à deviner

Dans le composable `GameLayout()`, la mise à jour de la proposition de l'utilisateur est l'un des rappels d'événement qui passent de `GameScreen` à `ViewModel`. Les données `gameViewModel.userGuess` seront transférées de `ViewModel` vers `GameScreen`.

![Les rappels d'événement, onKeyboardDone et onUserGuessChanged sont transmis de l'UI à ViewModel](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/af3b1fed1f840c63.png?hl=fr "Transmission du mot mélangé et de la proposition de l'utilisateur à l'UI")

1.  Dans le fichier **`GameScreen.kt`**, dans le composable `GameLayout()`, définissez `onValueChange` sur `onUserGuessChanged` et `onKeyboardDone()` sur l'action clavier `onDone`. Vous corrigerez les erreurs à l'étape suivante.

```
OutlinedTextField(
   value = "",
   singleLine = true,
   modifier = Modifier.fillMaxWidth(),
   onValueChange = onUserGuessChanged,
   label = { Text(stringResource(R.string.enter_your_word)) },
   isError = false,
   keyboardOptions = KeyboardOptions.Default.copy(
       imeAction = ImeAction.Done
   ),
   keyboardActions = KeyboardActions(
       onDone = { onKeyboardDone() }
   ),
```

2.  Dans la fonction composable `GameLayout()`, ajoutez deux autres arguments : le lambda `onUserGuessChanged` accepte un argument `String` et ne renvoie rien, tandis que `onKeyboardDone` ne prend rien et ne renvoie rien.

```
@Composable
fun GameLayout(
   onUserGuessChanged: (String) -> Unit,
   onKeyboardDone: () -> Unit,
   currentScrambledWord: String,
   modifier: Modifier = Modifier,
   ) {
}
```

3.  Dans l'appel de fonction `GameLayout()`, ajoutez des arguments lambda pour `onUserGuessChanged` et `onKeyboardDone`.

```
GameLayout(
   onUserGuessChanged = { gameViewModel.updateUserGuess(it) },
   onKeyboardDone = { },
   currentScrambledWord = gameUiState.currentScrambledWord,
)
```

Vous allez bientôt définir la méthode `updateUserGuess` dans `GameViewModel`.

4.  Dans le fichier **`GameViewModel.kt`**, ajoutez une méthode appelée `updateUserGuess()` qui accepte un argument `String`, le mot proposé par l'utilisateur. Dans la fonction, mettez à jour le `userGuess` avec la valeur `guessedWord` transmise.

  ```
  fun updateUserGuess(guessedWord: String){
     userGuess = guessedWord
  }
```

Vous allez ensuite ajouter `userGuess` dans le ViewModel.

5.  Dans le fichier `GameViewModel.kt`, ajoutez une propriété var appelée `userGuess`. Utilisez `mutableStateOf()` pour que Compose observe cette valeur et définisse la valeur initiale sur `""`.

```
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue

var userGuess by mutableStateOf("")
   private set
```

6.  Dans le fichier `GameScreen.kt`, dans `GameLayout()`, ajoutez un autre paramètre `String` pour `userGuess`. Définissez le paramètre `value` de `OutlinedTextField` sur `userGuess`.

```
fun GameLayout(
   currentScrambledWord: String,
   userGuess: String,
   onUserGuessChanged: (String) -> Unit,
   onKeyboardDone: () -> Unit,
   modifier: Modifier = Modifier
) {
   Column(
       verticalArrangement = Arrangement.spacedBy(24.dp)
   ) {
       //...
       OutlinedTextField(
           value = userGuess,
           //..
       )
   }
}
```

7.  Dans la fonction `GameScreen`, mettez à jour l'appel de fonction `GameLayout()` pour inclure le paramètre `userGuess`.

```
GameLayout(
   currentScrambledWord = gameUiState.currentScrambledWord,
   userGuess = gameViewModel.userGuess,
   onUserGuessChanged = { gameViewModel.updateUserGuess(it) },
   onKeyboardDone = { },
   //...
)
```

8.  Créez et exécutez votre application.
9.  Essayez de deviner le mot et entrez une proposition. Le champ de texte permet d'afficher la proposition de l'utilisateur.

![ed10c7f522495a.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/ed10c7f522495a.png?hl=fr "Écran de jeu avec la proposition de l'utilisateur dans le champ de texte ")

## 7\. Vérifier le mot à deviner et modifier le score

Dans cette tâche, vous implémenterez une méthode permettant de vérifier la proposition de l'utilisateur, puis de mettre à jour le score du jeu ou d'afficher une erreur. Vous mettrez à jour l'interface d'état du jeu pour afficher le nouveau score et le nouveau mot plus tard.

1.  Dans `GameViewModel`, ajoutez une autre méthode appelée `checkUserGuess()`.
2.  Dans la fonction `checkUserGuess()`, ajoutez un bloc `if else` pour vérifier que la proposition de l'utilisateur est identique à celle de `currentWord`. Réinitialisez `userGuess` pour vider la chaîne.

```
fun checkUserGuess() {

   if (userGuess.equals(currentWord, ignoreCase = true)) {
   } else {
   }
   // Reset user guess
   updateUserGuess("")
}
```

3.  Si la réponse de l'utilisateur est incorrecte, définissez `isGuessedWordWrong` sur `true`. [`MutableStateFlow<T>.`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-mutable-state-flow/index.html) [`update()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/update.html) met à jour [`MutableStateFlow.value`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-mutable-state-flow/value.html) avec la valeur spécifiée.

```
import kotlinx.coroutines.flow.update

   if (userGuess.equals(currentWord, ignoreCase = true)) {
   } else {
       // User's guess is wrong, show an error
       _uiState.update { currentState ->
           currentState.copy(isGuessedWordWrong = true)
       }
   }
```

**Remarque sur la méthode copy()** : La fonction `copy()` vous permet de copier un objet, ce qui vous permet de modifier certaines de ses propriétés sans rien changer d'autre.

Par exemple :

`val jack =` `User(name =` `"Jack", age =` `1)`

`val olderJack = jack.copy(age =` `2)`

4.  Dans la classe `GameUiState`, ajoutez un `Boolean` appelé `isGuessedWordWrong` et initialisez-le sur `false`.

```
data class GameUiState(
   val currentScrambledWord: String = "",
   val isGuessedWordWrong: Boolean = false,
)
```

Vous transmettez ensuite le rappel d'événement `checkUserGuess()` de `GameScreen` à `ViewModel` lorsque l'utilisateur clique sur le bouton **Submit** (Envoyer) ou sur la touche "OK" du clavier. Transmettez les données, `gameUiState.isGuessedWordWrong` de `ViewModel` à `GameScreen`, pour définir l'erreur dans le champ de texte.

![7f05d04164aa4646.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/7f05d04164aa4646.png?hl=fr "Organigramme illustrant le déplacement de l'événement de vérification du mot deviné par l'utilisateur vers le haut depuis l'écran de jeu vers le ViewModel du jeu")

1.  Dans le fichier `GameScreen.kt`, à la fin de la fonction composable `GameScreen()`, appelez `gameViewModel.checkUserGuess()` dans l'expression lambda `onClick` du bouton **Submit** (Envoyer).

```
Button(
   modifier = modifier
       .fillMaxWidth()
       .weight(1f)
       .padding(start = 8.dp),
   onClick = { gameViewModel.checkUserGuess() }
) {
   Text(stringResource(R.string.submit))
}
```

2.  Dans la fonction composable `GameScreen()`, mettez à jour l'appel de fonction `GameLayout()` pour transmettre `gameViewModel.checkUserGuess()` dans l'expression lambda `onKeyboardDone`.

```
GameLayout(
   currentScrambledWord = gameUiState.currentScrambledWord,
   userGuess = gameViewModel.userGuess,
   onUserGuessChanged = { gameViewModel.updateUserGuess(it) },
   onKeyboardDone = { gameViewModel.checkUserGuess() }
)
```

3.  Dans la fonction composable `GameLayout()`, ajoutez un paramètre de fonction pour `Boolean` : **`isGuessWrong`**. Définissez le paramètre **`isError`** de `OutlinedTextField` sur **`isGuessWrong`** pour afficher l'erreur dans le champ de texte si la proposition est incorrecte.

```
fun GameLayout(
   currentScrambledWord: String,
   isGuessWrong: Boolean,
   userGuess: String,
   onUserGuessChanged: (String) -> Unit,
   onKeyboardDone: () -> Unit,
   modifier: Modifier = Modifier
) {
   Column(
       // ,...
       OutlinedTextField(
           // ...
           isError = isGuessWrong,
           keyboardOptions = KeyboardOptions.Default.copy(
               imeAction = ImeAction.Done
           ),
           keyboardActions = KeyboardActions(
               onDone = { onKeyboardDone() }
           ),
       )
}
}
```

4.  Dans la fonction composable `GameScreen()`, mettez à jour l'appel de la fonction `GameLayout()` pour transmettre `isGuessWrong`.

```
GameLayout(
   currentScrambledWord = gameUiState.currentScrambledWord,
   userGuess = gameViewModel.userGuess,
   onUserGuessChanged = { gameViewModel.updateUserGuess(it) },
   onKeyboardDone = { gameViewModel.checkUserGuess() },
   isGuessWrong = gameUiState.isGuessedWordWrong,
   // ...
)
```

5.  Créez et exécutez votre application.
6.  Saisissez une proposition incorrecte et cliquez sur **Submit** (Envoyer). Notez que le champ de texte devient rouge pour indiquer une erreur.

![a1bc55781d627b38.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/a1bc55781d627b38.png?hl=fr "Écran de jeu affichant le champ de texte d'erreur  ")

Le libellé du champ de texte indique toujours "Enter your word" (Saisissez votre mot). Pour le rendre plus ergonomique, vous devez ajouter un texte d'erreur qui indique que le mot est incorrect.

7.  Dans le fichier **`GameScreen.kt`**, dans le composable `GameLayout()`, mettez à jour le paramètre de libellé du champ de texte en fonction de `isGuessWrong`, comme suit :

```
OutlinedTextField(
   // ...
   label = {
       if (isGuessWrong) {
           Text(stringResource(R.string.wrong_guess))
       } else {
           Text(stringResource(R.string.enter_your_word))
       }
   },
   // ...
)
```

8.  Dans le fichier `strings.xml`, ajoutez une chaîne au libellé d'erreur.

```
<string name="wrong_guess">Wrong Guess!</string>
```

9.  Créez et exécutez à nouveau votre application.
10.  Saisissez une proposition incorrecte et cliquez sur **Submit** (Envoyer). Observez le libellé d'erreur.

![8c17eb61e9305d49.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/8c17eb61e9305d49.png?hl=fr "Écran de jeu avec un champ et un libellé de texte d'erreur ")

## 8\. Modifier le score et le nombre de mots

Dans cette tâche, vous allez mettre à jour le score et le nombre de mots au fil de la partie de l'utilisateur. Le score doit faire partie de `_ uiState`.

1.  Dans `GameUiState`, ajoutez une variable `score` et initialisez-la avec la valeur zéro.

```
data class GameUiState(
   val currentScrambledWord: String = "",
   val isGuessedWordWrong: Boolean = false,
   val score: Int = 0
)
```

2.  Pour mettre à jour la valeur du score, dans `GameViewModel`, dans la fonction `checkUserGuess()`, dans la condition `if`, lorsque la réponse de l'utilisateur est correcte, augmentez la valeur `score`.

```
import com.example.unscramble.data.SCORE_INCREASE

fun checkUserGuess() {
   if (userGuess.equals(currentWord, ignoreCase = true)) {
       // User's guess is correct, increase the score
       val updatedScore = _uiState.value.score.plus(SCORE_INCREASE)
   } else {
       //...
   }
}
```

3.  Dans `GameViewModel`, ajoutez une autre méthode appelée `updateGameState` pour mettre à jour le score, augmenter le nombre de mots actuel et choisir un nouveau mot dans le fichier `WordsData.kt`. Ajoutez un `Int` nommé `updatedScore` en guise de paramètre. Mettez à jour les variables d'interface d'état du jeu comme suit :

```
private fun updateGameState(updatedScore: Int) {
   _uiState.update { currentState ->
       currentState.copy(
           isGuessedWordWrong = false,
           currentScrambledWord = pickRandomWordAndShuffle(),
           score = updatedScore
       )
   }
}
```

4.  Dans la fonction `checkUserGuess()`, si la réponse de l'utilisateur est correcte, appelez `updateGameState` avec le score mis à jour pour préparer le jeu pour le prochain tour.

```
fun checkUserGuess() {
   if (userGuess.equals(currentWord, ignoreCase = true)) {
       // User's guess is correct, increase the score
       // and call updateGameState() to prepare the game for next round
       val updatedScore = _uiState.value.score.plus(SCORE_INCREASE)
       updateGameState(updatedScore)
   } else {
       //...
   }
}
```

La fonction `checkUserGuess()` terminée doit se présenter comme suit :

```
fun checkUserGuess() {
   if (userGuess.equals(currentWord, ignoreCase = true)) {
       // User's guess is correct, increase the score
       // and call updateGameState() to prepare the game for next round
       val updatedScore = _uiState.value.score.plus(SCORE_INCREASE)
       updateGameState(updatedScore)
   } else {
       // User's guess is wrong, show an error
       _uiState.update { currentState ->
           currentState.copy(isGuessedWordWrong = true)
       }
   }
   // Reset user guess
   updateUserGuess("")
}
```

Ensuite, comme pour le score, vous devez mettre à jour le nombre de mots joués.

5.  Ajoutez une autre variable pour le nombre indiqué dans `GameUiState`. Appelez-la `currentWordCount` et initialisez-la à `1`.

```
data class GameUiState(
   val currentScrambledWord: String = "",
   val currentWordCount: Int = 1,
   val score: Int = 0,
   val isGuessedWordWrong: Boolean = false,
)
```

6.  Dans la fonction `updateGameState()` du fichier `GameViewModel.kt`, augmentez le nombre de mots, comme indiqué ci-dessous. La fonction `updateGameState()` est appelée pour préparer le jeu pour le prochain tour.

```
private fun updateGameState(updatedScore: Int) {
   _uiState.update { currentState ->
       currentState.copy(
           //...
           currentWordCount = currentState.currentWordCount.inc(),
           )
   }
}
```

## Score de réussite et nombre de mots

Procédez comme suit pour transmettre les données de score et de nombre de mots de `ViewModel` à `GameScreen`.

![546e101980380f80.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/546e101980380f80.png?hl=fr "Organigramme illustrant la transmission des données de score et de nombre de mots par ViewModel à l'écran de jeu  ")

1.  Dans le fichier `GameScreen.kt`, dans la fonction composable `GameLayout()`, ajoutez le nombre de mots en tant qu'argument et transmettez les arguments de format **`wordCount`** à l'élément de texte.

```
fun GameLayout(
   onUserGuessChanged: (String) -> Unit,
   onKeyboardDone: () -> Unit,
   wordCount: Int,
   //...
) {
   //...

   Card(
       //...
   ) {
       Column(
           // ...
       ) {
           Text(
               //..
               text = stringResource(R.string.word_count, wordCount),
               style = typography.titleMedium,
               color = colorScheme.onPrimary
           )

// ...

}
```

2.  Mettez à jour l'appel de fonction `GameLayout()` pour inclure le nombre de mots.

```
GameLayout(
   userGuess = gameViewModel.userGuess,
   wordCount = gameUiState.currentWordCount,
   //...
)
```

3.  Dans la fonction composable `GameScreen()`, mettez à jour l'appel de fonction `GameStatus()` pour inclure les paramètres `score`. Transmettez le score à partir de `gameUiState`.

```
GameStatus(score = gameUiState.score, modifier = Modifier.padding(20.dp))
```

4.  Créez et exécutez l'application.
5.  Saisissez le mot à deviner et cliquez sur **Submit** (Envoyer). Le score et le nombre de mots sont mis à jour.
6.  Cliquez sur **Skip** (Ignorer). Rien ne change.

Pour implémenter la fonctionnalité "Ignorer", vous devez transmettre le rappel de l'événement "Ignorer" à `GameViewModel`.

7.  Dans le fichier `GameScreen.kt`, dans la fonction modulable `GameScreen()`, appelez `gameViewModel.skipWord()` dans l'expression lambda `onClick`.

Android Studio affiche une erreur, car vous n'avez pas encore implémenté la fonction. Vous allez corriger cette erreur à l'étape suivante en ajoutant la méthode `skipWord()`. Lorsque l'utilisateur ignore un mot, vous devez mettre à jour les variables du jeu et préparer le jeu pour le prochain tour.

```
OutlinedButton(
   onClick = { gameViewModel.skipWord() },
   modifier = Modifier.fillMaxWidth()
) {
   //...
}
```

8.  Dans `GameViewModel`, ajoutez la méthode `skipWord()`.
9.  Dans la fonction `skipWord()`, appelez `updateGameState()` pour transmettre le score et réinitialiser la proposition de l'utilisateur.

```
fun skipWord() {
   updateGameState(_uiState.value.score)
   // Reset user guess
   updateUserGuess("")
}
```

10.  Exécutez votre application et jouez. Vous devriez à présent pouvoir ignorer des mots.

![e87bd75ba1269e96.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/e87bd75ba1269e96.png?hl=fr "Écran de jeu affichant un mot mélangé différent et trois mots ignorés")

Vous pouvez toujours jouer au-delà de 10 mots. Lors de votre prochaine tâche, vous vous occuperez de la dernière partie du jeu.

## 9\. Gérer le dernier tour du jeu

Dans l'implémentation actuelle, les utilisateurs peuvent ignorer ou jouer au-delà de 10 mots. Dans cette tâche, vous allez ajouter une logique pour terminer le jeu.

![d3fd67d92c5d3c35.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/d3fd67d92c5d3c35.png?hl=fr "Écran de jeu affichant 15 mots joués sur 10")

Pour implémenter la logique de fin de jeu, vous devez d'abord vérifier si l'utilisateur a atteint le nombre maximal de mots.

1.  Dans `GameViewModel`, ajoutez un bloc `if-else` et déplacez le corps de la fonction existante dans le bloc `else`.
2.  Ajoutez une condition `if` pour vérifier que la taille de `usedWords` est égale à `MAX_NO_OF_WORDS`.

```
import com.example.android.unscramble.data.MAX_NO_OF_WORDS

private fun updateGameState(updatedScore: Int) {
   if (usedWords.size == MAX_NO_OF_WORDS){
       //Last round in the game
   } else{
       // Normal round in the game
       _uiState.update { currentState ->
           currentState.copy(
               isGuessedWordWrong = false,
               currentScrambledWord = pickRandomWordAndShuffle(),
               currentWordCount = currentState.currentWordCount.inc(),
               score = updatedScore
           )
       }
   }
}
```

3.  Dans le bloc `if`, ajoutez l'indicateur `Boolean` `isGameOver` et attribuez la valeur `true` à l'indicateur pour signaler la fin du jeu.
4.  Mettez à jour `score` et réinitialisez `isGuessedWordWrong` dans le bloc `if`. Le code suivant montre à quoi doit ressembler votre fonction :

```
private fun updateGameState(updatedScore: Int) {
   if (usedWords.size == MAX_NO_OF_WORDS){
       //Last round in the game, update isGameOver to true, don't pick a new word
       _uiState.update { currentState ->
           currentState.copy(
               isGuessedWordWrong = false,
               score = updatedScore,
               isGameOver = true
           )
       }
   } else{
       // Normal round in the game
       _uiState.update { currentState ->
           currentState.copy(
               isGuessedWordWrong = false,
               currentScrambledWord = pickRandomWordAndShuffle(),
               currentWordCount = currentState.currentWordCount.inc(),
               score = updatedScore
           )
       }
   }
}
```

5.  Dans `GameUiState`, ajoutez la variable `Boolean` `isGameOver` et attribuez-lui ensuite la valeur `false`.

```
data class GameUiState(
   val currentScrambledWord: String = "",
   val currentWordCount: Int = 1,
   val score: Int = 0,
   val isGuessedWordWrong: Boolean = false,
   val isGameOver: Boolean = false
)
```

6.  Exécutez votre application et jouez. Vous ne pouvez pas jouer plus de 10 mots.

![ac8a12e66111f071.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/ac8a12e66111f071.png?hl=fr "Écran de jeu affichant 10 mots sur 10")

Une fois la partie terminée, nous vous recommandons d'en informer l'utilisateur et de lui demander s'il souhaite rejouer. Vous implémenterez cette fonctionnalité dans votre prochaine tâche.

## Afficher la boîte de dialogue de fin de jeu

Dans cette tâche, vous allez transmettre des données `isGameOver` à `GameScreen` depuis le ViewModel et l'utiliser pour afficher une boîte de dialogue d'alerte incluant des options pour arrêter ou redémarrer le jeu.

Une boîte de dialogue est une petite fenêtre qui invite l'utilisateur à prendre une décision ou à saisir des informations supplémentaires. Normalement, une boîte de dialogue ne remplit pas tout l'écran, et les utilisateurs doivent réaliser une action avant de pouvoir continuer. Android propose différents types de boîtes de dialogue. Dans cet atelier de programmation, vous découvrirez les boîtes de dialogue d'alerte.

### Anatomie d'une boîte de dialogue d'alerte

![eb6edcdd0818b900.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/eb6edcdd0818b900.png?hl=fr "Anatomie d'une boîte de dialogue d'alerte")

1.  Conteneur
2.  Icône (facultatif)
3.  Titre (facultatif)
4.  Texte d'accompagnement
5.  Séparateur (facultatif)
6.  Actions

Le fichier `GameScreen.kt` du code de démarrage fournit déjà une fonction affichant une boîte de dialogue d'alerte. Celle-ci inclut des options permettant de quitter ou redémarrer le jeu.

![78d43c7aa01b414d.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/78d43c7aa01b414d.png?hl=fr "Boîte de dialogue d'alerte de fin de jeu avec les options "Exit" (Quitter) et "Play again" (Rejouer)")

```
@Composable
private fun FinalScoreDialog(
   onPlayAgain: () -> Unit,
   modifier: Modifier = Modifier
) {
   val activity = (LocalContext.current as Activity)

   AlertDialog(
       onDismissRequest = {
           // Dismiss the dialog when the user clicks outside the dialog or on the back
           // button. If you want to disable that functionality, simply use an empty
           // onDismissRequest.
       },
       title = { Text(stringResource(R.string.congratulations)) },
       text = { Text(stringResource(R.string.you_scored, 0)) },
       modifier = modifier,
       dismissButton = {
           TextButton(
               onClick = {
                   activity.finish()
               }
           ) {
               Text(text = stringResource(R.string.exit))
           }
       },
       confirmButton = {
           TextButton(
               onClick = {
                   onPlayAgain()
               }
           ) {
               Text(text = stringResource(R.string.play_again))
           }
       }
   )
}
```

Dans cette fonction, les paramètres `title` et `text` affichent le titre et le texte d'accompagnement dans la boîte de dialogue d'alerte. `dismissButton` et `confirmButton` sont les boutons de texte. Dans le paramètre `dismissButton`, vous affichez le texte **Exit** (Quitter) et arrêtez l'application en terminant l'activité. Dans le paramètre `confirmButton`, vous redémarrez le jeu et affichez le texte **Play Again** (Rejouer).

![a24f59b84a178d9b.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/a24f59b84a178d9b.png?hl=fr "Schéma de classe de la transmission du score à l'UI")

1.  Dans la fonction `FinalScoreDialog()` du fichier `GameScreen.kt`, notez le paramètre du score afin d'afficher le score du jeu dans la boîte de dialogue d'alerte.

```
@Composable
private fun FinalScoreDialog(
   score: Int,
   onPlayAgain: () -> Unit,
   modifier: Modifier = Modifier
) {
```

2.  Dans la fonction `FinalScoreDialog()`, notez l'utilisation de l'expression lambda du paramètre `text` pour utiliser `score` comme argument de format du texte de la boîte de dialogue.

```
text = { Text(stringResource(R.string.you_scored, score)) }
```

3.  Dans le fichier `GameScreen.kt`, à la fin de la fonction composable `GameScreen()`, après le bloc `Column`, ajoutez une condition `if` pour vérifier `gameUiState.isGameOver`.
4.  Dans le bloc `if`, affichez la boîte de dialogue d'alerte. Appelez `FinalScoreDialog()` en transmettant les éléments `score` et `gameViewModel.resetGame()` pour le rappel de l'événement `onPlayAgain`.

```
if (gameUiState.isGameOver) {
   FinalScoreDialog(
       score = gameUiState.score,
       onPlayAgain = { gameViewModel.resetGame() }
   )
}
```

`resetGame()` est un rappel d'événement transmis de `GameScreen` à `ViewModel`.

5.  Dans le fichier `GameViewModel.kt`, le rappel de la fonction `resetGame()` initialise `_uiState` et choisit un nouveau mot.

```
fun resetGame() {
   usedWords.clear()
   _uiState.value = GameUiState(currentScrambledWord = pickRandomWordAndShuffle())
}
```

6.  Créez et exécutez votre application.
7.  Jouez au jeu jusqu'à la fin et consultez la boîte de dialogue d'alerte qui affiche les options **Exit** (Quitter) ou **Play Again** (Rejouer). Essayez chacune de ces options.

![c6727347fe0db265.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/c6727347fe0db265.png?hl=fr "Écran de jeu avec une boîte de dialogue de félicitations indiquant le score final et l'option permettant de quitter ou de rejouer. ")

## 10\. L'état dans la rotation des appareils

Dans les précédents ateliers de programmation, vous avez découvert les modifications de configuration dans Android. Lorsqu'une modification de configuration se produit, Android redémarre toute l'activité, en exécutant tous les rappels de démarrage du cycle de vie.

Le [`ViewModel`](https://developer.android.com/topic/libraries/architecture/viewmodel?hl=fr) stocke les données liées à l'application qui ne sont pas détruites lorsque le framework Android détruit et recrée l'activité. Les objets `ViewModel` sont conservés automatiquement et ne sont pas détruits, comme l'instance d'activité lorsque la configuration change. Les données qu'ils contiennent sont immédiatement disponibles après la recomposition.

Dans cette tâche, vous allez vérifier si l'application conserve StateUI lors d'un changement de configuration.

1.  Exécutez l'application et commencez à jouer. Faites pivoter l'appareil du mode Portrait au mode Paysage, ou inversement.
2.  Notez que les données enregistrées dans l'interface utilisateur d'état de `ViewModel` sont conservées lors du changement de configuration.

![4a63084643723724.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/4a63084643723724.png?hl=fr "Écran de jeu avec le mot à deviner dans le champ de texte en mode Portrait")

![4134470d435581dd.png](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-viewmodel-and-state/img/4134470d435581dd.png?hl=fr "Écran de jeu en mode Paysage avec tous les états intacts, comme le nombre de mots et le champ de texte")

## 11\. Télécharger le code de solution

Pour télécharger le code de cet atelier de programmation terminé, utilisez les commandes Git suivantes :

$ git clone https://github.com/google-developer-training/basic-android-kotlin-compose-training-unscramble.git
$ cd basic-android-kotlin-compose-training-unscramble
$ git checkout viewmodel

Vous pouvez également télécharger le dépôt sous forme de fichier ZIP, le décompresser et l'ouvrir dans Android Studio.

[file\_downloadTélécharger le fichier ZIP](https://github.com/google-developer-training/basic-android-kotlin-compose-training-unscramble/archive/refs/heads/viewmodel.zip)

**Remarque** : Le code de solution se trouve dans la branche `viewmodel` du dépôt téléchargé.

Si vous le souhaitez, vous pouvez consulter le code de solution de cet atelier de programmation sur [GitHub](https://github.com/google-developer-training/basic-android-kotlin-compose-training-unscramble/tree/viewmodel).

## 12\. Conclusion

Félicitations ! Vous avez terminé l'atelier de programmation. Vous comprenez maintenant que les principes fondamentaux de l'architecture des applications Android recommandent de séparer les classes ayant des responsabilités distinctes et de piloter l'interface utilisateur à partir d'un modèle.

N'oubliez pas de partager le fruit de vos efforts sur les réseaux sociaux avec le hashtag _#AndroidBasics_.

## **En savoir plus**

*   [Guide de l'architecture des applications | Développeurs Android](https://developer.android.com/topic/architecture?hl=fr)
*   [Couche d'interface utilisateur | Développeurs Android](https://developer.android.com/topic/architecture/ui-layer?hl=fr)
*   [Gérer l'état avec un flux de données unidirectionnel | Développeurs Android](https://developer.android.com/topic/architecture/ui-layer?hl=fr#udf)
*   Parcours de formation : [Architecture des applications Android modernes](https://developer.android.com/courses/pathways/android-architecture?hl=fr)

Sauf indication contraire, le contenu de cette page est régi par une licence [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), et les échantillons de code sont régis par une licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Pour en savoir plus, consultez les [Règles du site Google Developers](https://developers.google.com/site-policies?hl=fr). Java est une marque déposée d'Oracle et/ou de ses sociétés affiliées.

  *     [![X](https://developer.android.com/_static/android/images/logo-x.svg?hl=fr)X](//x.com/AndroidDev)
    
    Follow @AndroidDev on X
    
*     [![YouTube](//www.gstatic.com/images/icons/material/product/2x/youtube_48dp.png)YouTube](//www.youtube.com/user/androiddevelopers?hl=fr)
    
    Check out Android Developers on YouTube
    
*     [![LinkedIn](https://developer.android.com/_static/android/images/logo-linkedin.svg?hl=fr)LinkedIn](//www.linkedin.com/showcase/androiddev)
    
    Connect with the Android Developers community on LinkedIn

*   ### More Android
    
    *   [Android](//www.android.com)
    *   [Android for Enterprise](//www.android.com/enterprise/)
    *   [Security](//www.android.com/security-center/)
    *   [Source](//source.android.com)
    *   [News](/news)
    *   [Blog](//android-developers.googleblog.com/)
    *   [Podcasts](/podcasts)
*   ### Discover
    
    *   [Gaming](/games)
    *   [Machine Learning](/ml)
    *   [Health & Fitness](/health-and-fitness)
    *   [Camera & Media](/media)
    *   [Règles de confidentialité](/privacy)
    *   [5G](/training/connectivity/5g)
*   ### Android Devices
    
    *   [Large screens](/large-screens)
    *   [Wear OS](/wear)
    *   [ChromeOS devices](/chrome-os)
    *   [Android for cars](/cars)
    *   [Android TV](/tv)
*   ### Releases
    
    *   [Android 15](/about/versions/15)
    *   [Android 14](/about/versions/14)
    *   [Android 13](/about/versions/13)
    *   [Android 12](/about/versions/12)
    *   [Android 11](/about/versions/11)
    *   [Android 10](/about/versions/10)
    *   [Pie](/about/versions/pie)
*   ### Documentation and Downloads
    
    *   [Android Studio guide](/studio/intro)
    *   [Developers guides](/guide)
    *   [Document de référence sur les API](/reference)
    *   [Download Studio](/studio)
    *   [Android NDK](/ndk)
*   ### Support
    
    *   [Report platform bug](//issuetracker.google.com/issues/new?component=190923&template=841312)
    *   [Report documentation bug](//issuetracker.google.com/issues/new?component=192697)
    *   [Google Play support](//support.google.com/googleplay/android-developer)
    *   [Join research studies](https://g.co/userresearch/androiddeveloperfooter)

 [![Google Developers](https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/android/images/lockup-google-for-developers.svg)](https://developers.google.com/?hl=fr)

*   [Android](//developer.android.com?hl=fr)
*   [Chrome](//developer.chrome.com/home?hl=fr)
*   [Firebase](//firebase.google.com?hl=fr)
*   [Google Cloud Platform](//cloud.google.com?hl=fr)
*   [All products](//developers.google.com/products/?hl=fr)

*   [Règles de confidentialité](//policies.google.com/privacy?hl=fr)
*   [License](https://developer.android.com/license?hl=fr)
*   [Brand guidelines](https://developer.android.com/distribute/marketing-tools/brand-guidelines?hl=fr)
*   [Manage cookies](#)
*   Get news and tips by email [Subscribe](https://developer.android.com/updates?hl=fr)

*   English
*   Deutsch
*   Español – América Latina
*   Français
*   Indonesia
*   Polski
*   Português – Brasil
*   Tiếng Việt
*   中文 – 简体
*   中文 – 繁體
*   日本語
*   한국어

\[\] {&#34;at&#34;: &#34;True&#34;, &#34;ga4&#34;: \[{&#34;id&#34;: &#34;G-QFRN08RN6E&#34;, &#34;purpose&#34;: 0}\], &#34;ga4p&#34;: \[{&#34;id&#34;: &#34;G-QFRN08RN6E&#34;, &#34;purpose&#34;: 0}\], &#34;gtm&#34;: \[\], &#34;parameters&#34;: {&#34;internalUser&#34;: &#34;False&#34;, &#34;language&#34;: {&#34;machineTranslated&#34;: &#34;False&#34;, &#34;requested&#34;: &#34;fr&#34;, &#34;served&#34;: &#34;fr&#34;}, &#34;pageType&#34;: &#34;codelab&#34;, &#34;projectName&#34;: null, &#34;signedIn&#34;: &#34;False&#34;, &#34;tenant&#34;: &#34;android&#34;, &#34;recommendations&#34;: {&#34;sourcePage&#34;: &#34;&#34;, &#34;sourceType&#34;: 0, &#34;sourceRank&#34;: 0, &#34;sourceIdenticalDescriptions&#34;: 0, &#34;sourceTitleWords&#34;: 0, &#34;sourceDescriptionWords&#34;: 0, &#34;experiment&#34;: &#34;&#34;}, &#34;experiment&#34;: {&#34;ids&#34;: &#34;&#34;}}} (function(d,e,v,s,i,t,E){d\['GoogleDevelopersObject'\]=i; t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)\[0\]; E.parentNode.insertBefore(t,E);})(window, document, 'script', 'https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/android/js/app\_loader.js', '\[3,"fr",null,"/js/devsite\_app\_module.js","https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625","https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/android","https://android-dot-devsite-v2-prod.appspot.com",1,null,\["/\_pwa/android/manifest.json","https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/android/images/favicon.svg","https://www.gstatic.com/devrel-devsite/prod/v870e399c64f7c43c99a3043db4b3a74327bb93d0914e84a0c3dba90bbfd67625/android/images/lockup.svg","https://fonts.googleapis.com/css?family=Google+Sans:400,500,600,700|Google+Sans+Text:400,400italic,500,500italic,600,600italic,700,700italic|Roboto+Mono:400,500,700&display=swap"\],1,null,\[1,6,8,12,14,17,21,25,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,112,113,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,147,148,149,151,152,156,157,158,159,161,163,164,168,169,170,179,180,182,183,186,191,193,196\],"AIzaSyAP-jjEJBzmIyKR4F-3XITp8yM9T1gEEI8","AIzaSyB6xiKGDR5O3Ak2okS4rLkauxGUG7XP0hg","developer.android.com","AIzaSyAQk0fBONSGUqCNznf6Krs82Ap1-NV6J4o","AIzaSyCCxcqdrZ\_7QMeLCRY20bh\_SXdAYqy70KY",null,null,null,\["TpcFeatures\_\_enable\_mirror\_tenant\_redirects","MiscFeatureFlags\_\_developers\_footer\_dark\_image","Cloud\_\_enable\_llm\_concierge\_chat","TpcFeatures\_\_enable\_required\_headers","Profiles\_\_enable\_complete\_playlist\_endpoint","MiscFeatureFlags\_\_enable\_variable\_operator","Cloud\_\_enable\_cloud\_dlp\_service","Search\_\_enable\_ai\_search\_summaries","Cloud\_\_enable\_legacy\_calculator\_redirect","Profiles\_\_enable\_profile\_collections","MiscFeatureFlags\_\_developers\_footer\_image","BookNav\_\_enable\_tenant\_cache\_key","Profiles\_\_enable\_release\_notes\_notifications","MiscFeatureFlags\_\_enable\_dark\_theme","Profiles\_\_enable\_public\_developer\_profiles","Profiles\_\_enable\_completecodelab\_endpoint","Search\_\_enable\_ai\_eligibility\_checks","Cloud\_\_enable\_cloudx\_experiment\_ids","DevPro\_\_enable\_cloud\_innovators\_plus","Profiles\_\_enable\_developer\_profiles\_callout","Profiles\_\_enable\_recognition\_badges","Significatio\_\_enable\_by\_tenant","MiscFeatureFlags\_\_enable\_view\_transitions","EngEduTelemetry\_\_enable\_engedu\_telemetry","Search\_\_enable\_suggestions\_from\_borg","DevPro\_\_enable\_developer\_subscriptions","Profiles\_\_enable\_page\_saving","Cloud\_\_enable\_cloud\_shell\_fte\_user\_flow","Profiles\_\_enable\_awarding\_url","Analytics\_\_enable\_clearcut\_logging","Cloud\_\_enable\_free\_trial\_server\_call","Cloud\_\_enable\_cloud\_facet\_chat","CloudShell\_\_cloud\_shell\_button","MiscFeatureFlags\_\_emergency\_css","Concierge\_\_enable\_pushui","Profiles\_\_enable\_dashboard\_curated\_recommendations","Cloud\_\_enable\_cloud\_shell","Experiments\_\_reqs\_query\_experiments","MiscFeatureFlags\_\_enable\_project\_variables","Search\_\_enable\_dynamic\_content\_confidential\_banner","MiscFeatureFlags\_\_enable\_firebase\_utm","Profiles\_\_require\_profile\_eligibility\_for\_signin","Search\_\_enable\_page\_map","Cloud\_\_enable\_cloudx\_ping","MiscFeatureFlags\_\_enable\_explain\_this\_code","CloudShell\_\_cloud\_code\_overflow\_menu"\],null,null,"AIzaSyBLEMok-5suZ67qRPzx0qUtbnLmyT\_kCVE","https://developerscontentserving-pa.googleapis.com","AIzaSyCM4QpTRSqP5qI4Dvjt4OAScIN8sOUlO-k","https://developerscontentsearch-pa.googleapis.com",2,4,null,"https://developerprofiles-pa.googleapis.com",\[3,"android","Android Developers","developer.android.com",null,"android-dot-devsite-v2-prod.appspot.com",null,null,\[null,1,null,null,null,null,null,null,null,null,null,\[1\],null,null,null,null,null,null,\[1\],\[1,null,null,\[1,20\],"/recommendations"\],null,null,null,\[1,null,1\],\[1,1,null,1,1\]\],null,\[18,null,null,null,null,null,"/images/lockup.svg","/images/touchicon-180.png",null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,"/images/lockup-dark-theme.svg",\[\]\],\[\],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,\[6,1,14,15,20,22,23,28,29,37,43\],null,\[\[null,null,1\],\[1,1\]\],\[\[null,null,null,null,null,null,null,\[\["G-QFRN08RN6E"\],null,null,\[\["G-QFRN08RN6E",1\]\]\],null,null,null,null,1\],null,\[\[2,2\],\[1,1\]\]\],null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,"android.devsite.google"\],null,"pk\_live\_5170syrHvgGVmSx9sBrnWtA5luvk9BwnVcvIi7HizpwauFG96WedXsuXh790rtij9AmGllqPtMLfhe2RSwD6Pn38V00uBCydV4m"\]')
````


