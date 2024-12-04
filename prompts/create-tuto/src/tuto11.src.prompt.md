!import[/prompts/mobile.context.prompt.md] 

### **Travail à réaliser :**  

Rédiger le **Tutoriel 11 : Cycle de vie d'une activité Android**

en prend en considération les éléments suivants : 

## Concepts Appris

1. **Cycle de Vie d'une Activité** :
   - Une activité Android traverse plusieurs états au cours de sa vie : création, démarrage, reprise, pause, arrêt, destruction.
   - Ces états sont gérés via des méthodes de rappel spécifiques (`onCreate()`, `onStart()`, `onResume()`, etc.).

2. **Journalisation avec Logcat** :
   - Utiliser l'API de journalisation d'Android, notamment `Log.d()`, pour suivre les événements du cycle de vie.
   - Filtrer et visualiser les journaux dans l'outil Logcat d'Android Studio.

3. **Impact des Modifications de Configuration** :
   - Lors de changements comme la rotation de l'écran ou le changement de langue, Android détruit et recrée l'activité.
   - Les données peuvent être perdues si elles ne sont pas correctement sauvegardées.

4. **Gestion de l'État avec Compose** :
   - Utilisation de `remember` pour conserver l'état d'une variable lors de recompositions.
   - Utilisation de `rememberSaveable` pour préserver l'état pendant les modifications de configuration.

---

## Objectifs Pratiques
- **Ajout de Journalisation** : Observer les appels aux différentes méthodes de rappel avec `Log.d()` dans le fichier `MainActivity.kt`.
- **Gestion des Données** :
  - Implémentation de `rememberSaveable` pour éviter la perte de données après une rotation de l'écran.
  - Maintenir l'état des variables comme le revenu total et le nombre de desserts vendus.
  
- **Études de Cas** :
  - Interagir avec l'application et observer les transitions du cycle de vie (par exemple, revenir à l'activité après l'avoir mise en arrière-plan).
  - Comprendre le comportement en cas de modification de configuration.

---

## Résumé des Étapes
1. **Initialisation** :
   - Définir des variables d'état et implémenter des méthodes comme `onCreate()` et `onStart()`.
   - Ajouter des instructions de journalisation pour chaque méthode de rappel.

2. **Modification d'Activité** :
   - Simuler la rotation d'écran pour observer l'appel des rappels `onPause()`, `onStop()`, et `onDestroy()`.
   - Résoudre les pertes de données avec `rememberSaveable`.

3. **Analyse Logcat** :
   - Filtrer les journaux pour comprendre les transitions entre les états.


!export[/prompts/create-tuto/tuto11.prompt.md]  