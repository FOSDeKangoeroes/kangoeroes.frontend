export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'

  },
  {
    name: 'Takken',
    url: '/takken',
    icon: 'icon-people'
  },
  {
    name: 'Personen',
    url: '/personen',
    icon: 'icon-user'
  },
  {
    name: 'Poef',
    url: '/poef',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Dranken',
        url: '/poef/drank',
        icon: 'icon-speedometer'
      }
    ]
  }
];
