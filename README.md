Hello everyone, this is a simple project to test the efficiency of using Redis on a database.
Clean architecture concepts were used in building the api.
If you want to run the project, you must have installed docker, docker-compose and node on your machine, create the ".env" file and add the environment variables below to the file:

REDIS_HOST=redis -> default to run on docker
DATABASE= -> name of the database that will connect
DATABASE_PORT=5432 -> default postgres database port, (you can use another database if you want)
REDIS_PASSWORD=1234 -> default password configured in redis container
DATABASE_USERNAME= -> database username
DATABASE_HOST= -> Database access URL
DATABASE_PASSWORD= -> database user password.

For the execution of the project I used a free external database to test efficiency with large volumes of data.

To run the project, after cloning it and configuring the env's, execute:

```docker-compose run app ash```

Once inside the docker terminal, run:

```npm install --legacy-peer-deps```
```npm run db:create && npm run db:migrate:run```
```npm run db:seed:run```
```exit```

Outside the docker terminal, run:

```docker compose app```

Access the API at [link](http://localhost:3001)

The paths are /users to filter all users -> the first time you access it may take a little longer as it will access the database directly and cache, the next ones will be faster as it will be queried directly from the cache.
/clear-cache to clear the redis cache