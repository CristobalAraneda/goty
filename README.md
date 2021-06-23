# App de votacion 
![](https://img.shields.io/badge/Angular-v.10.1.4-red) 
![](https://img.shields.io/badge/NGX--Chats%20-v.18.0.1-blue) 
![](https://img.shields.io/badge/build-passing-brightgreen) 

Este proyecto es un App de votacion web Basica, que permite realizar votaciones y ver los resultados en tiempo real. desarrollado con [Angular](https://github.com/angular/angular-cli) , [AngularFire](https://github.com/angular/angularfire), uso de fireBaseCloud
[NGX-Chats](https://swimlane.gitbook.io/ngx-charts/), manejo de graficos y [SweetAlert2](sweetalert2.github.io) para las Alertas del sistema

# Developer
## restablecer proyecto en dev
```
> npm install 

```
## Server
```
> Run `ng serve` par iniciae el dev server. Navege a  `http://localhost:4200/`. 
```
## configuracion enviroments
Modificque ruta `src/app/environments ` los archivos enviormonmets.ts para desarrollo y enviormonmets.prod.ts con la configuracion de firebase de su proyecto [guia angularfire](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)
```
firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>',
    appId: '<your-app-id>',
    measurementId: '<your-measurement-id>'
  }
  ```




# version
[v1.0.0](https://github.com/CristobalAraneda/goty/releases) en produccion

