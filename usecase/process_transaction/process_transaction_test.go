package process_transaction

import (
	"github.com/golang/mock/gomock"
	mock_entity "github.com/samuelterra22/aluno-go/entity/mock"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestProcessTransactionWhenItsValid(t *testing.T) {
	input := TransactionDtoInput{
		ID:        "1",
		AccountID: "1",
		Amount:    200,
	}

	expectedOutput := TransactionDtoOutput{
		ID:           "1",
		Status:       "approved",
		ErrorMessage: "",
	}

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	repositoryMock := mock_entity.NewMockTransactionRepository(ctrl)
	repositoryMock.EXPECT().Insert(input.ID, input.AccountID, input.Amount, "approved", "").Return(nil)

	usecase := NewProcessTransaction(repositoryMock)
	output, err := usecase.Execute(input)
	assert.Nil(t, err)
	assert.Equal(t, expectedOutput, output)
}
