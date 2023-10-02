# Jesto

Ce projet est une application web conçue pour simplifier la gestion des commandes dans un restaurant. Il permet aux serveurs et au personnel de cuisine de prendre, suivre et gérer les commandes de manière efficace, garantissant ainsi une expérience client plus fluide.

---
## Auteur

- **Nicolas de Garrigues** - [Profil GitHub](https://github.com/lainocs)

---
## Technologies utilisées

- Node.js
- Express.js
- Prisma
- Base de données MySQL (ou la base de données de votre choix)
---
## Installation

1. Clonez ce dépôt sur votre machine locale en utilisant la commande suivante :
   ```shell
   git clone https://github.com/lainocs/jesto.git
    ```
2. Accédez au dossier jesto :
   ```shell
   cd jesto
   ```
3. Installez les dépendances :
   ```shell
   yarn install
   ```
4. Remplacez les valeurs des variables d'environnement dans le fichier `.env.example` par les valeurs de votre environnement local et renommez le fichier en `.env` :
   ```shell
   mv .env.example .env
   ```
5. Créez la base de données :
   ```shell
    yarn prisma migrate dev
    ```
6. Démarrez le serveur :
    ```shell
    yarn dev
    ```
---
## Contribution

Les contributions à ce projet sont les bienvenues. Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. **Fork du projet** : Cliquez sur le bouton "Fork" en haut à droite de la page du projet pour créer une copie de ce projet dans votre propre espace GitHub.

2. **Créez une branche pour votre fonctionnalité** : Utilisez la commande suivante pour créer une nouvelle branche et nommez-la de manière appropriée en remplaçant `ma-fonctionnalité` par le nom de votre fonctionnalité :
   ```shell
   git checkout -b feature/ma-fonctionnalité
    ```

3. **Committez vos modifications** : Une fois que vous avez terminé de travailler sur votre fonctionnalité, utilisez la commande suivante pour ajouter vos modifications à la branche :
   ```shell
   git add .
   git commit -m "Ajout de ma fonctionnalité"
    ```

4. **Push vers la branche** : Utilisez la commande suivante pour pousser vos modifications vers la branche :
    ```shell
    git push origin feature/ma-fonctionnalité
     ```

5. **Ouvrez une pull request** : Ouvrez une pull request en décrivant les modifications que vous avez apportées et en mentionnant les personnes concernées par votre pull request.

---

## License

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.
