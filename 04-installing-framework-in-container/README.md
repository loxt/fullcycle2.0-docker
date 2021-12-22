```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

```shell
php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

```shell
php composer-setup.php
```

```shell
php -r "unlink('composer-setup.php');"
```

```shell
apt install libzip-dev
```

```shell
docker-php-ext-install zip
```

```shell
php composer.phar create-project --prefer-dist laravel/laravel laravel
```
