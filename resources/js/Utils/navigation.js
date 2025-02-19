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
        name: 'dashboard',
        route: 'dashboard',
        href: route('dashboard'),
        icon: HomeIcon,
    },
    {
        name: 'users',
        route: '#',
        href: '#',
        icon: UsersIcon,
      },
      {
        name: 'projects',
        route: '#',
        href: '#',
        icon: FolderIcon,
      },
      {
        name: 'calendars',
        route: '#',
        href: '#',
        icon: CalendarIcon,
      },
      {
        name: 'reports',
        route: '#',
        href: '#',
        icon: ChartBarIcon,
      },
      {
        name: 'settings',
        children: [
          {
            name: 'profile',
            route: 'profile.show',
            href: route('profile.show'),
            icon: UserIcon,
          }
        ]
      }
 ]