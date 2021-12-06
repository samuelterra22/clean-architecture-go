package repository

import (
	"github.com/samuelterra22/aluno-go/adapter/repository/fixture"
	"os"
	"testing"
)

func TestTransactionRepositoryDb_Insert(t *testing.T) {
	migrationsDir := os.DirFS("fixture/sql")

	db := fixture.Up(migrationsDir)
	defer fixture.Down(db, migrationsDir)
}
