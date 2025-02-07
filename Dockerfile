# Utilisation de l'image officielle Node.js
FROM node:18

# Définition du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie des fichiers du projet dans le conteneur
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers restants
COPY . .

# Compilation du projet NestJS
RUN npm run build

# Définition de la commande de démarrage
CMD ["npm", "run", "start"]
