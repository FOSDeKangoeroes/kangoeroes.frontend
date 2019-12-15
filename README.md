# Kangoeroes frontend

## Wat

Monorepo voor alle Angular frontends.

- kangoeroes-frontend-core: library met gedeelde code: components, services,..
- kangoeroes-frontend-leidingbeheer: Angular frontend voor het beheer van leiding, poef en schulden
- kangoeroes-frontend-totems: Angular frontend voor het beheer van de totemdatabank

## 0. Prerequisites

- Git
- npm
- Angular cli
- Gebruikersaccount op Auth0 (aan te vragen)

## 1. Clonen

Zorg dat je een SSH key hebt toegevoegd aan je GitHub profiel.

``` git
git clone git@github.com:FOSDeKangoeroes/kangoeroes.frontend.git
```

## 2. How to run

1. `npm install`
2. `npm run leidingbeheer` of `npm run totems`
3. Navigeer naar de url waar de applicatie draait:

    - localhost:4200 - leidingbeheer
    - localhost:4300 - totems

4. PROFIT
