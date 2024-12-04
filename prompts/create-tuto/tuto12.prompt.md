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


### **Travail à réaliser :**  

Modifier le **Tutoriel 12 : Utilisation de ViewModel et gestion d'état dans Jetpack Compose** en intégrant les éléments suivants :  

1. **Proposer une architecture de fichiers et dossiers adaptée** pour le projet final de Todo List.  
   - Cette organisation sera utilisée dès maintenant pour habituer les apprenants à travailler de manière structurée.  

2. **Expliquer les concepts liés à ViewModel et StateFlow** :  
   - Pourquoi utiliser ViewModel avec StateFlow pour gérer l'état ?  
   - Quels sont les problèmes potentiels si l'on utilise seulement ViewModel sans StateFlow ?  
   - Pourquoi privilégier ViewModel plutôt que `remember` et `mutableStateOf` ?  

### Référence du tutoriel actuel :  

```
# Tutoriel 12 : Utilisation de ViewModel et gestion d'état dans Jetpack Compose

## **Introduction**

Dans ce tutoriel, nous allons explorer l’utilisation de **ViewModel** pour la gestion d’état dans une application Jetpack Compose. Nous apprendrons comment séparer la logique métier de l'interface utilisateur, mettre en œuvre un flux de données unidirectionnel (UDF), et utiliser **StateFlow** pour exposer des états immuables.

---

## **Objectifs**

1. Comprendre l'importance de **ViewModel** dans l'architecture Android.
2. Séparer la logique métier de l’interface utilisateur.
3. Implémenter un modèle de flux de données unidirectionnel (**UDF**).
4. Construire une application Jetpack Compose simple où l'état est conservé lors des changements de configuration.

---

## **Préparation**

### **Dépendances**
Ajoutez les dépendances suivantes dans le fichier `build.gradle` :

````
implementation(libs.androidx.lifecycle.viewmodel.compose)
implementation(libs.kotlinx.coroutines.android)
````


Ces dépendances incluent l’intégration de ViewModel avec Jetpack Compose et les coroutines Kotlin pour la gestion des états.


## **Concepts Clés**

### **1. Rôle de ViewModel**
ViewModel est une classe spéciale qui conserve les données d’une application lors des changements de configuration (par exemple, une rotation d’écran). Elle permet :

- De séparer la logique métier de l’interface utilisateur.
- De préserver l’état des données pendant la durée de vie d’une activité ou d’un fragment.

### **2. Flux de données unidirectionnel (UDF)**
Dans UDF, l’état est généré par la logique métier et exposé à l’interface utilisateur via une source unique (ex. `StateFlow`). Ce modèle garantit :

- Une meilleure prévisibilité des états.
- Une immuabilité pour minimiser les erreurs.

### **3. StateFlow pour l’état réactif**
StateFlow est une API de Kotlin Coroutines qui permet de suivre les changements d’état et de les notifier à l’interface utilisateur. Il est idéal pour une application Compose car :

- Il gère automatiquement les abonnements.
- Il est compatible avec les cycles de vie des composants Android.

---

## **Mise en œuvre**

### **1. Création de ViewModel**

Dans ce tutoriel, nous allons implémenter une liste simple d’éléments où les utilisateurs peuvent ajouter et supprimer des tâches.

#### **Code : ViewModel**

```kotlin
import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class TaskViewModel : ViewModel() {

    private val _tasks = MutableStateFlow(listOf<String>())
    val tasks: StateFlow<List<String>> = _tasks

    fun addTask(task: String) {
        _tasks.value = _tasks.value + task
    }

    fun removeTask(task: String) {
        _tasks.value = _tasks.value - task
    }
}
```

- `MutableStateFlow` gère l’état mutable des tâches.
- La propriété immuable `tasks` expose cet état à l’interface utilisateur.

---

### **2. Intégration avec Jetpack Compose**

Créons une interface simple pour afficher et interagir avec la liste des tâches.

#### **Code : Composable principal**

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun TaskScreen(viewModel: TaskViewModel = viewModel()) {
    val tasks = viewModel.tasks.collectAsState()
    val newTask = remember { mutableStateOf("") }

    Column(modifier = Modifier.padding(16.dp)) {
        // Input field for new task
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            BasicTextField(
                value = newTask.value,
                onValueChange = { newTask.value = it },
                modifier = Modifier.weight(1f)
            )
            Button(onClick = {
                if (newTask.value.isNotBlank()) {
                    viewModel.addTask(newTask.value)
                    newTask.value = ""
                }
            }) {
                Text("Add")
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Task list
        tasks.value.forEach { task ->
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                Text(task)
                Button(onClick = { viewModel.removeTask(task) }) {
                    Text("Remove")
                }
            }
        }
    }
}

@Preview
@Composable
fun PreviewTaskScreen() {
    TaskScreen()
}
```

---

## **Analyse du code**

1. **Collecte des états** : La méthode `collectAsState()` surveille les changements de `StateFlow` dans ViewModel.
2. **Entrée utilisateur** : Un champ de texte permet à l’utilisateur de saisir une nouvelle tâche.
3. **Affichage des tâches** : Les tâches sont affichées dynamiquement dans une colonne avec des options pour les supprimer.

---

## **Points Clés**

- **Immuabilité** : L’état est immuable (éviter les bugs liés aux modifications imprévisibles).
- **ViewModel évite la perte de données** : Les tâches restent présentes lors des changements de configuration.
- **Jetpack Compose** simplifie la liaison entre l'état et l'interface utilisateur.

---

## **Exercice Pratique**

Ajoutez une fonctionnalité pour marquer une tâche comme "terminée" avec un indicateur visuel (ex. texte barré).

---

## **Conclusion**

Avec ViewModel et StateFlow, la gestion de l’état dans Jetpack Compose devient claire, prédictive et efficace. Cela constitue une base solide pour des applications Android modernes et réactives.


```

