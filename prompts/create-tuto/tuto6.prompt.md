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



## **Travail à réaliser :**  

Refonte et amélioration de :  Tutoriel 6 : Gestion d'états réactifs et des flux de données


### Version actuel : 

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

# Tutoriel 6 : Gestion d'états réactifs et des flux de données

## Objectif pédagogique
Apprendre à gérer des états réactifs et des flux de données pour construire des applications modernes et interactives en utilisant Jetpack Compose.

## Concepts abordés
- Introduction à la notion d'état réactif.
- Utilisation de `State` et des outils de gestion d'état de base en Jetpack Compose.
- Introduction aux coroutines et à leur utilisation pour gérer des flux de données asynchrones.
- Scope et gestion des coroutines en Kotlin.

## Explication théorique

### Notion d'état réactif
Un état réactif est une donnée qui, lorsqu'elle change, provoque automatiquement une mise à jour de l'interface utilisateur correspondante. Jetpack Compose utilise un modèle de programmation déclaratif qui facilite ce comportement.

#### Exemple :
```kotlin
var counter by remember { mutableStateOf(0) }
```
Le mot-clé `remember` permet de conserver l'état entre les recompositions, et `mutableStateOf` rend cet état réactif.

### Les coroutines
Les coroutines en Kotlin permettent d'exécuter des tâches de manière asynchrone, sans bloquer le thread principal. Elles utilisent des scopes pour définir leur cycle de vie.

#### Scope des coroutines
Un CoroutineScope détermine la durée de vie d'une coroutine. Voici les principaux scopes :
- `GlobalScope` : Coroutine qui dure aussi longtemps que l'application.
- `CoroutineScope` : Scope personnalisé créé par le développeur.
- `lifecycleScope` : Attaché à une activité ou un fragment (sera introduit dans un module ultérieur).

#### Exemple de coroutine simple :
```kotlin
CoroutineScope(Dispatchers.Main).launch {
    val data = fetchData()
    // Mettre à jour l'interface utilisateur avec les données
}
```

## Étape 1 : Créer un composant interactif
### Objectif
Ajouter un compteur simple qui réagit à l'interaction utilisateur.

#### Code
```kotlin
@Composable
fun Counter() {
    var counter by remember { mutableStateOf(0) }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier.fillMaxSize()
    ) {
        Text(text = "Counter: $counter", style = MaterialTheme.typography.h4)
        Button(onClick = { counter++ }) {
            Text("Increment")
        }
    }
}
```

## Étape 2 : Introduire les coroutines pour une action asynchrone
### Objectif
Simuler la récupération de données depuis une source externe.

#### Code
```kotlin
@Composable
fun AsyncDataLoader() {
    var data by remember { mutableStateOf("Loading...") }

    LaunchedEffect(Unit) {
        data = fetchData()
    }

    Text(text = data, style = MaterialTheme.typography.h5)
}

suspend fun fetchData(): String {
    delay(2000) // Simule un temps d'attente
    return "Données chargées"
}
```

## Étape 3 : Gérer des flux de données avec `Flow`
### Objectif
Utiliser un `Flow` pour émettre plusieurs valeurs successives et les afficher.

#### Code
```kotlin
@Composable
fun DataStream() {
    val dataFlow = flow {
        for (i in 1..5) {
            emit("Item $i")
            delay(1000)
        }
    }

    val data by dataFlow.collectAsState(initial = "Starting...")

    Text(text = data, style = MaterialTheme.typography.h5)
}
```

## Exercice
Créez un composant qui :
1. Utilise une coroutine pour récupérer une liste de noms (simulés).
2. Affiche les noms dans une liste dynamiquement mise à jour.

### Indications :
- Utilisez `LaunchedEffect` pour initier la récupération des données.
- Affichez les noms dans une `LazyColumn`.

## Conclusion
Ce tutoriel a introduit la gestion d'états réactifs et l'utilisation de coroutines et `Flow` pour gérer des flux de données. Ces concepts sont essentiels pour construire des interfaces réactives et modernes dans Android avec Jetpack Compose.


```


