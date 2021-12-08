# Message pour l'équipe

Pour respecter les meilleurs pratiques en termes de devellopement, seul les chefs de projet (Pour le moment) on des droits en écriture. 

Vous devez faire Fork du projet ( onglet en haut à droite) pour travailler dessus via votre compte github , l'objectif est de permettre au chef de projet d'avoir un regard sur vos modification au travers des pull request sans vous empecher de travailler correctement .

je vous laisse consulter le site : 

https://git-flow.readthedocs.io/fr/latest/index.html pour connaitre comment fonctionne le git flow 

https://grafikart.fr/tutoriels/fork-pull-request-591#autoplay pour un peux mieux comprendre le fork&pull request 

## Régle de nommage des branches  : 

How to name your supporting branch prefixes?

- Feature branches? [feature/]
- Bugfix branches? [bugfix/]
- Release branches? [release/]
- Hotfix branches? [hotfix/]
- Support branches? [support/]

 ## Note sur le remote 
 
 Quand vous clonner votre projet vous pouvez vérifier les dépot disponible avec 
 ```sh
 git remote -v
 ```
donnant le resultat suivant : 

- origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
- origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)

pour rajouter le dépot d'équipe pour les pull request/ merge 
```sh 
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```
Upstream signifie que vous n'etes pas propriétaire du dépot.

Pour vos push en local vous pourrez faire  : 

```sh
git push origin BRANCHES/NOM_DE_BRANCH
```
Le pull request se fait depuis votre page github 

Voici un schéma explicatif 

![image](https://user-images.githubusercontent.com/66829997/137392913-d30ec40e-9011-4349-9ba0-334b95af5d13.png)

# Projet 
