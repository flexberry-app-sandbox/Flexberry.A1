docker build --no-cache -f SQL\Dockerfile.PostgreSql -t a1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t a1/app ../..
