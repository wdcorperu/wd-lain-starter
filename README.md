<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://img-c.udemycdn.com/course/480x270/5853238_37f7_2.jpg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://www.php.net/"><img src="https://img.shields.io/badge/8.2-Php-4F5B93" alt="PHP"></a>
<a href="https://laravel.com/docs/11.x"><img src="https://img.shields.io/badge/11.31-Laravel-F13B2F" alt="Laravel"></a>
<a href="https://jetstream.laravel.com/introduction.html"><img src="https://img.shields.io/badge/5.3-Jestream-6875F5" alt="Jestream"></a>
<a href="https://inertiajs.com/"><img src="https://img.shields.io/badge/1.1-Inertia-9354E9" alt="Inertia"></a>
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/3.3.13-Vue-42D392" alt="Vue"></a>
<a href="https://spatie.be/"><img src="https://img.shields.io/badge/6.13-Spatie-1D7593" alt="Spatie"></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/3.4.0-Tailwindcss-36BCFF" alt="Tailwindcss"></a>
</p>


## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/wdcorperu/wd-lain-starter.git <name-project>

# Acceder a la carpeta del proyecto
cd name-project

# Instalar dependencias
npm install
composer install

# Ejecutar la aplicación
npm run dev
```

## Configuracion

```bash
# .env
cp .env.example .env

# artisan key .env
php artisan key:generate

# Configurar la base de datos en el archivo .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bd_project
DB_USERNAME=root
DB_PASSWORD=

# Ejecutar migraciones
php artisan migrate
```

## Commands

```bash
# Crear Roles
php artisan db:seed --class=RoleSeeder

# Crear Admin
php artisan admin:create
```

## Use Heroicons

```bash
# Import
import { BeakerIcon } from '@heroicons/vue/outline'
import { BeakerIcon } from '@heroicons/vue/solid'

# Vue
<BeakerIcon class="size-6 text-blue-500" />
```

## Multi Language

```bash
# Resources/lang
es.json
en.json

# use vue
{{ $t('') }}
```