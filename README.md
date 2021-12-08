# Clean Architecture With Golang

- When init a new project
```shell
go mod init github.com/samuelterra22/clean-architecture-go
```

- Run testes
```shell
go test ./...
```

- Generate a mock
```shell
mockgen -source=entity/repository.go -destination=entity/mock/mock.go
```

```shell
 go run cmd/main.go 
```

```shell
docker-compose up -d
```

```shell
docker exec -it aluno_app_1 bash
```