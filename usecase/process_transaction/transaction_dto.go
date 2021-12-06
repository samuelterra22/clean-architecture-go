package process_transaction

type TransactionDtoInput struct {
	ID        string
	AccountID string
	Amount    float64
}

type TransactionDtoOutput struct {
	ID           string
	Status       string
	ErrorMessage string
}
