## Environment variables

env-cmd package: https://www.npmjs.com/package/env-cmd

Out of the box, NextJS only supports a limited set of .env files (base, local, dev, production). In order to create a full set of environment configs for common deployments flows with dev, qa, stage, and production - we need env-cmd. As a result, the scripts in package.json have been modified. For production, env-cmd's --no-override option is used so that environment variables set on the operating system itself are not overridden by the values in .env-cmdrc.

This way, if you wanted to keep sensitive data out of the .env-cmdrc file (example: prod database passwords), you can set a dummy value for `APP_DB_PASS` in the .env-cmdrc file, then on the OS itself `export APP_DB_PASS="supersecretpassword"`. With the `--no-override` option, the OS level env variable will replace the dummy value in the .env-cmdrc file.

The -e flag is used to dictate the environment(s) that will be loaded. In this application's setup, the base environment is always listed first in the script arguments so that the environment configs that follow can inherit the variables set in base.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the application for local development

```bash
npm run <env>
# where <env> is local, dev, qa
```

## Running the linter

```bash
npm run lint
```

## Building the application for deployment to a server

Additional environments can easily be added by creating new script entries in package.json and new matching environment entries in the .env-cmdrc file.

Production:
```bash
npm run build
# builds the application in the .next directory
npm run start
# starts the node server that was just built
```

Other environments:
```bash
npm run build:<env>
npm run start:<env>
# where <env> is local, dev, qa
```

For other deployment techniques, see the documentation: https://nextjs.org/docs/deployment

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!