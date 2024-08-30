FROM postgis/postgis:15-3.3-alpine

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV PGDATA=/data/postgres

EXPOSE 5432