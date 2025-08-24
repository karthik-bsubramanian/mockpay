# Mockpay 

A payment application in a Turborepo + Next.js setup with the actual payment mocked out. 
With a bunch of security features added 

### Apps and Packages

- `merchant-app`: a [Next.js](https://nextjs.org/) app for merchants
- `user-app`: another [Next.js](https://nextjs.org/) app for users
- `@repo/ui`: a React component library shared by both `merchant-app` and `user-app` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/store`: `jotai` package for state management
- `@repo/db`: Prisma ORM 

1. Clone the repository
```bash
git clone https://github.com/karthik-bsubramanian/mockpay.git
``` 
2. run prisma client
```
npm run db:generate
```
3. Navigate to the user-app
```
cd apps/user-app && npm run dev

```
Payments made needs to be approved via sending requests to the webhook server in
```bash
cd apps/webhook
```