---
sidebar_position: 2
---
# Installazione del Composer in ambiente Linux

1. Introduzione all'ambiente di sviluppo

Il Composer è un gestore delle dipendenze per il linguaggio di scripting interpretato PHP.

Per dipendenze intendiamo quella situazione in cui si verifica che una determinata istruzione, per poter essere eseguita, richieda delle istruzioni di livello superiore (c.d. dipendenze). Sono nati, quindi, dei sistemi di gestione dei pacchetti come appunto il Composer per PHP.

1. Alcuni dei Framework supportati dal Composer
* Symfony
* Laravel
* Cake PHP
* Codelgniter
* FuelPHP
* Drupal
* TYPO3
* SilverStripe
* Magento
* Zend
* Silex
* Lumen

```bash
sudo apt update
```

```bash
sudo apt install php-cli unzip
```


```bash
cd ~
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
```

```bash
HASH=`curl -sS https://composer.github.io/installer.sig`
```

```bash
echo $HASH
```
```bash
php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

