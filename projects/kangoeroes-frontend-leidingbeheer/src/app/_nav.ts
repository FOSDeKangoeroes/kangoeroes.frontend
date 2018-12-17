export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Personen',
    icon: 'icon-people',
    children: [
      {
        name: 'Takken',
        url: '/takken',
        icon: 'icon-people'
      },
      {
        name: 'Personen',
        url: '/personen',
        icon: 'icon-user'
      }
    ]
  },
  {
    name: 'Poef',
    icon: 'icon-map',
    children: [
      {
        name: 'Categorieën',
        url: '/poef/drank-type',
        icon: 'icon-cup'
      },
      {
        name: 'Dranken',
        url: '/poef/drank',
        icon: 'icon-cup'
      }
    ]
  }
];
