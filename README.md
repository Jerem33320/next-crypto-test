This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


------------

NEXTJS

Next JS, ce framework React orienté Server Side Rendering, 
Le rendu côté serveur d'une page web ou Server Side Rendering (SSR) est une technique de développement web qui consiste à créer les pages html côté serveur pour les envoyer toutes faites au navigateur. Les pages interagissent ensuite avec le serveur en ajax.

Système de routes basé sur les fichiers
Next JS se base sur le file system node pour définir les routes frontend et backend de votre application. Pour chaque fichier JavaScript présent dans le répertoire Pages, Next JS crée la route frontend du même nom.

Deploiement en CLI et hébergement gratuit
L'avantage que procure NextJS est la simplicité de déploiement. Des services comme Vercel ou Netlify nous permettent de déployer l'application via le terminal et de bénéficier d'un CDN et d'un certificat SSL gratuitement.

Grâce au Static Site Generation, Next JS va créer toutes les pages que peut avoir le site en dur dès le build, c’est-à-dire au moment où vous codez votre site. Il y aura une page par restaurant qui sera déployé. L'avantage est que le serveur n'aura pas à construire la page à chaque requête, elle sera déjà prête à l'emploi. Elle pourra être mise en cache pour être servie d'autant plus rapidement. C'est la solution la plus rapide pour livrer une page web.

Cette solution n'est pas forcément adaptée à toutes les problématiques. Pour que le Static Site Generation soit pertinent, il faut que la grande majorité du contenu de la page évolue peu dans le temps et soit pas générique à toutes les requêtes.

Les projets de blogs, site vitrine, e-commerce ou marketplace se prêtent très bien au Static Site Generation et méritent tous d'être sur cette techno. En revanche, les produits SaaS qui impliquent beaucoup de données personnalisées à l'utilisateur n'ont pas d'intérêt à utiliser Next.

NEXT v.12
Le compilateur Rust est également capable de minifier vos fichiers 7 fois plus rapidement que Terser. Cette fonctionnalité est disponible en option sur Next.js 12 en l'activant dans votre fichier de configuration next.config.js:
// next.config.js
module.exports = {
  swcMinify: true
}


## Info

- _app -> global css

- tsconfig.json: "allowJs": true, -> allow js and typescript

- By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

- posts folder -> [id].tsx -> dynamic page

- https://nextjs.org/docs/api-reference/next/router#userouter

- absolute import -> tsconfig.json :
````
"baseUrl": "./",
    "paths": {
      "@components/*": ["components/*"]
    }
````
we can now use "@" in imports like this:
import { Article } from '@components/Article';

- static generation:
https://nextjs.org/docs/basic-features/data-fetching

- static generation for dynamic pages
getStaticProps (Static Generation): Fetch data at build time.
getStaticPaths (Static Generation): Specify dynamic routes to pre-render pages based on data.
getServerSideProps (Server-side Rendering): Fetch data on each request.

- useState does not auto merge and update the object!!! 
 we can parse and stringify if we wanna avoid re-rendering

``
const addToCart = ({id} = {}) => {
        updateCart(prev => {
            console.log('prev', prev);
            console.log('json', JSON.parse(JSON.stringify(prev)))
            let cartState = JSON.parse(JSON.stringify(prev));
            if(cartState.coins[id], prev.coins[id]){
                cartState.coins[id].quantity = cartState.coins[id].quantity + 1;
            } else {
                cartState.coins[id] = {
                    id,
                    quantity : 1
                }
            }
            return cartState
        })
    }
``

- netlify
- client-side transition: Link from next/Link
- metatag for SEO 
import Head from next/Head
