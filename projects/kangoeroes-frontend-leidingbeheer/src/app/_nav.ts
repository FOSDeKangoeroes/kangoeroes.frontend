export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Personen',
    icon: 'icon-arrow-down',
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
    icon: 'icon-arrow-down',
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
      },
      {
        name: 'Bestellingen en consumpties',
        url: '/poef/bestellingen',
        icon: 'icon-basket'
      }
    ]
  }
];
