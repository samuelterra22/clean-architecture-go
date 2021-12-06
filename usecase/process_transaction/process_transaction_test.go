package process_transaction

import (
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

	usecase := NewProcessTransaction()
	output, err := usecase.Execute(input)
	assert.Nil(t, err)
	assert.Equal(t, expectedOutput, output)
}
