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