# Utiliser l'image officielle de Nginx
FROM nginx:alpine

# Copier le fichier HTML dans le répertoire de Nginx
COPY calendrier.html /usr/share/nginx/html/index.html

# Copier le dossier asset dans le répertoire de Nginx
COPY asset /usr/share/nginx/html/asset

# Exposer le port 80 pour que l'application soit accessible
EXPOSE 80

# Lancer Nginx en mode non-démon
CMD ["nginx", "-g", "daemon off;"]