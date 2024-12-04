Ce projet est une application web développée avec Symfony, intégrant des composants dynamiques en React et un design moderne grâce à TailwindCSS.


----------------------Technos utilisées----------------------------


Symfony

React

Webpack Encore

TailwindCSS

Doctrine : ORM


-------------------------------l'installation-----------------------------


composer install "pour les depencies php"

npm install "pour les depencies javascript"

symfony new apiproject --webapp "pour le setup du projet"

php bin/console make:entity "pour les deux entities produit et categorie"



------------------------------------Pour la bdd-------------------------------------

modifier le fichier .env pour ajouter les identifiants de bdd

DATABASE_URL="mysql://root@127.0.0.1:3306/bdd"

------------------------------------Compiler la partie front----------------------------

npm run build

npm run dev

-----------------------------------lancer le serveur--------------------------------

symfony serve -d

