import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    ChartBarIcon,
    CogIcon,
    UserIcon
 } from '@heroicons/vue/24/outline';

 export default [
    {
        name: 'Dashboard',
        route: 'dashboard',
        href: route('dashboard'),
        icon: HomeIcon,
    },
    {
        name: 'Usuarios',
        route: '#',
        href: '#',
        icon: UsersIcon,
      },
      {
        name: 'Proyectos',
        route: '#',
        href: '#',
        icon: FolderIcon,
      },
      {
        name: 'Calendario',
        route: '#',
        href: '#',
        icon: CalendarIcon,
      },
      {
        name: 'Reportes',
        route: '#',
        href: '#',
        icon: ChartBarIcon,
      },
      {
        name: 'Configuraciones',
        children: [
          {
            name: 'Perfil',
            route: 'profile.show',
            href: route('profile.show'),
            icon: UserIcon,
          }
        ]
      }
 ]