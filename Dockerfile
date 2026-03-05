# On part de Node.js
FROM node:22

# On crée un dossier pour notre app
WORKDIR /app

# On copie les fichiers de dépendances
COPY package*.json ./

# On installe ce dont on a besoin
RUN npm install

# On copie notre code
COPY . .

# On dit quel port on utilise
EXPOSE 3000

# On dit comment démarrer l'app
CMD ["npm", "start"]