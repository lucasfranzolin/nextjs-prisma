# Development

## Run simultaneously:

- ### `yarn dev`
- ### `yarn storybook`
- ### `npx prisma studio --experimental`

- Make sure to have a PostgreSQL db process running in background
- Create a `.env` file in the project root and add the variable

  `DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"`

## Helpers

### [Prisma](https://www.prisma.io/)

- Add prisma globally: `yarn global add prisma`

- #### Migrations `prisma migrate dev --name <migration-name>`

### easy-peasy

- [Typescript guide](https://easy-peasy.now.sh/docs/tutorials/typescript.html)
