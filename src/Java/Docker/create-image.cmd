docker build --no-cache -f SQL\Dockerfile.PostgreSql -t a1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t a1-java/app ../../..
