# HaloBuku

Commerce to buy various books such as novels

![Screenshot 1]()

![Screenshot 2]()

## Links

### Production

- https://halobuku.vercel.app

### Local

- http://localhost:3000 for Next.js

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

## REST API Endpoints

- Local REST API URL:
  - `http://localhost:8000`
- Production REST API URL:
  - `https://halobuku.railway.app`
  - `https://halobuku.ericprd.site/api/v1`

| HTTP   | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/books`     | Get all books     |
| GET    | `/books/:id` | Get book by id    |
| POST   | `/books/`    | Create book       |
| DELETE | `/books/:id` | Delete book by id |
| POST   | `/register`  | Register user     |
| POST   | `/verify`    | Verify user       |
| POST   | `/login`     | Login             |

## Data Model

### Books

```ts
{
   _id: Number,
  title: String,
  author: String,
  publishedYear: Number,
  description: String,
  image: String,
  price: Number,
  quantity: Number,
  isAvailable: Boolean
}
```

## User

```json
{
  "id": "abc123",
  "name": "First Last",
  "email": "firstlast@user.com"
}
```

Base URL: `https://halobuku.ericprd.site/api/v1`
