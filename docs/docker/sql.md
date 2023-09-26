---
sidebar_position: 1
---
# Docker

1. Che cos'è Docker

Docker è una piattaforma open-source che ha come scopo la creazione di un data-layer aggiuntivo ad un'infrastruttura esistente allo scopo di aggiungere un ulteriore livello
di astrazione.

2. Installazione di Docker in ambiente Linux (Ubuntu)

Per l'installazione dell'applicativo sotto Linux Docker fare riferimento alla documentazione ufficiale di Docker

[Documentazione ufficiale Docker](https://docs.docker.com/engine/install/ubuntu/)

3. Entrare dentro un container da terminale

Per prima cosa è necessario ricavare l'id del contenitore tramite il seguente comando.

```bash
sudo docker ps
```
Una volta ricavato l'id del contenitore lanciare il seguente comando.

```bash
docker exec -it <container_name> bash
```
Siamo quindi dentro il filesystem di Docker.