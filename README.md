# Kangoeroes frontend

## Wat

Monorepo voor alle Angular frontends:

- kangoeroes-frontend-core: library met gedeelde code: components, services,..
- kangoeroes-frontend-leidingbeheer: Angular 7 frontend voor het beheer van leiding, poef en schulden
- kangoeroes-frontend-totems: Angular 7 frontend voor het beheer van de totemdatabank

## 0. Prerequisites

- Git
- npm
- Angular cli
- Environment file (aan te vragen/ zie voorbeeld)
- Gebruikersaccount op Auth0 (aan te vragen)
- Werkende backend (zie backend repository). Dit staat  hardcoded op `localhost:5000`in proxy.config.json. De backend moet in development dus op die url draaien.

## 1. Download the repo

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
