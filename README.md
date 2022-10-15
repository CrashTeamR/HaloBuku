# Halo Buku

Marketplace sell various novels

![Screenshot 1]()

![Screenshot 2]()

## Links

- https://halobuku.com

### Production

- https://halobuku.vercel.app

### Local

- http://localhost:3000
- http://localhost:5173

### Design

- Figma Mockup : [Figma Mockup Link](https://www.figma.com/file/aI1EYZmKVtY4N4LioeZpt0/Halo-Buku-Design)
- Figma Prototype :
- Whimsical Flowchart : [Whimsical Link](https://whimsical.com/flowchart-AEp4LaBGjDUQFUG5N3GVkU@2Ux7TurymLpWJ3evPGyq)

## Main Features

- Display All Books
- Book's Details
- Cart Page
- Checkout Books

## Team Members

| Name  | Role             | GitHub URL                               |
| ----- | ---------------- | ---------------------------------------- |
| Eric  | Lead, Fullstack  | [@Eric](https://github.com/ericprd)      |
| Ersan | Frontend Design  | [@Ersan](https://github.com/ersankarimi) |
| Bayu  | Frontend, Design | [@Bayu](https://github.com/baysatriow)   |
| Denny | Frontend, Design | [@Denny](https://github.com/dennyshuda)  |

## Tech Stack

### Commerce

- HTML
- CSS
  - Tailwind CSS
- JavaScript
  - TypeScript
- Node.js & npm
- React
  - Next.js v12
    - next/router
    - next/image
- Data Fetching
  - REST API: `axios` / `swr`
  - GraphQL: `urql` / `graphql-request`
- Misc
  - Prettier
  - ESLint

## Development

Install dependencies:

```sh
npm install
```

Run server in development mode:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Start in production mode:

```sh
npm start
```

## Deployment

Details on deployment using Vercel or Netlify here.

## Data Model

### Books

```json
{
  "id": "abc123",
  "title": "Hujan",
  "publishedYear": 2022,
  "author": "Tere Liye",
  "description": "Novel from Indonesia",
  "price": 200000,
  "isAvailable": true,
  "quantity": 100
}
```

```graphql
type Resource {
  id: String!
  title: String!
  description: String
  isAvailable: Boolean!
  quantity: Number!
  tags: [Tag!]!
  createdAt: String!
  updatedAt: String!
}
```

### User

```json
{
  "id": "abc123",
  "name": "First Last",
  "email": "firstlast@user.com"
}
```

```graphql
type User {
  id: String!
  name: String!
  email: String!
}
```

Base URL: `https://api.example.com`
