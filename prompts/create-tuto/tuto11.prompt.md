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

#### **Tutoriel 11 : Ajouter un NavigationDrawer avec Jetpack Compose au Turoriel 10**  
- **Concepts abordés :** Apprendre à intégrer un menu de navigation latérale (*NavigationDrawer*) dans une application Android utilisant Jetpack Compose pour permettre une navigation fluide entre plusieurs écrans.
- **Tags :** 
- **Résumé :** 


#### **Tutoriel 12 : Introduction à l’architecture MVVM**  
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

Modifier le tutoriel 11 : 


**Version actuelle du tutoriel** :  
```
# Tutoriel 11 : Ajouter un NavigationDrawer avec Jetpack Compose

## Objectif pédagogique

Apprendre à intégrer un menu de navigation latérale (*NavigationDrawer*) dans une application Android utilisant Jetpack Compose pour permettre une navigation fluide entre plusieurs écrans.

---

## Notions théoriques

Avant de coder, comprenons les concepts clés :

1. **NavigationDrawer :**
   - Un composant d'interface utilisateur qui permet d'afficher un menu latéral pour la navigation.
   - S'ouvre généralement via un bouton de menu dans la barre supérieure (*TopAppBar*).

2. **Scaffold et DrawerState :**
   - **Scaffold** : Un composant qui fournit une structure de base pour organiser les éléments de l'interface (barres d'application, tiroirs, contenu principal).
   - **DrawerState** : Un état qui contrôle l'ouverture et la fermeture du NavigationDrawer.

3. **NavHost et NavController :**
   - **NavHost** : Contient la logique de navigation entre les différents écrans.
   - **NavController** : Gère les actions de navigation et l'état de la pile d'écrans.

---

## Mise en place d'un NavigationDrawer

### Étape 2 : Configurer le Scaffold avec le NavigationDrawer

1. **Définir les écrans :** Commençons par créer deux écrans simples :

```kotlin
@Composable
fun HomeScreen() {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text(text = "Écran d'accueil", style = MaterialTheme.typography.headlineLarge)
    }
}

@Composable
fun ProfileScreen() {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text(text = "Écran du profil", style = MaterialTheme.typography.headlineLarge)
    }
}
```

2. **Configurer le NavigationDrawer :** Utilisez un `ModalNavigationDrawer` pour afficher un tiroir modifiable.

```kotlin
@Composable
fun MainScreen() {
    val drawerState = rememberDrawerState(DrawerValue.Closed)
    val scope = rememberCoroutineScope()
    val navController = rememberNavController()

    ModalNavigationDrawer(
        drawerState = drawerState,
        drawerContent = {
            DrawerContent(onDestinationClicked = { route ->
                scope.launch { drawerState.close() }
                navController.navigate(route) {
                    popUpTo(navController.graph.startDestinationId) { saveState = true }
                    launchSingleTop = true
                    restoreState = true
                }
            })
        }
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    title = { Text("Navigation Drawer") },
                    navigationIcon = {
                        IconButton(onClick = {
                            scope.launch { drawerState.open() }
                        }) {
                            Icon(Icons.Filled.Menu, contentDescription = "Menu")
                        }
                    }
                )
            }
        ) { padding ->
            NavHost(
                navController = navController,
                startDestination = "home",
                modifier = Modifier.padding(padding)
            ) {
                composable("home") { HomeScreen() }
                composable("profile") { ProfileScreen() }
            }
        }
    }
}
```

3. **Créer le contenu du tiroir :**

```kotlin
@Composable
fun DrawerContent(onDestinationClicked: (String) -> Unit) {
    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Text("Menu", style = MaterialTheme.typography.headlineMedium)
        Spacer(modifier = Modifier.height(16.dp))

        DrawerItem(label = "Accueil", route = "home", onClick = onDestinationClicked)
        DrawerItem(label = "Profil", route = "profile", onClick = onDestinationClicked)
    }
}

@Composable
fun DrawerItem(label: String, route: String, onClick: (String) -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick(route) }
            .padding(vertical = 8.dp)
    ) {
        Text(label, style = MaterialTheme.typography.bodyLarge)
    }
}
```

### Étape 3 : Ajouter la fonction principale
Assurez-vous que votre fonction principale appelle `MainScreen` :

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                MainScreen()
            }
        }
    }
}
```

---

## Résultat attendu
Lorsque vous exécutez cette application :
- Vous verrez un menu latéral avec des options "Accueil" et "Profil".
- Cliquer sur une option naviguera vers l'écran correspondant.

---

## Questions pour réflexion
1. Comment pouvez-vous personnaliser davantage le `NavigationDrawer` pour inclure des icônes ou des sous-menus ?
2. Comment géreriez-vous la persistance de l'état de navigation après une rotation de l'écran ?

---

## Prochaines étapes
Dans le prochain tutoriel, nous apprendrons à structurer une application avec l'architecture MVVM pour une meilleure gestion des données et de l'état.

```

