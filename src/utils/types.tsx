// Read this 1st

// Typescript is great
// What is typescript? https://www.youtube.com/watch?v=zQnBQ4tB3ZA&ab_channel=Fireship
// Why
// - You can clearly model your data
// - This data model can be used by the backend api too

type ProcessingTime = {
    providerName: string,
    processingTime: number
}

type Claim = {
    id: string,
    patientName: string,
    testOrderedName: string,
    testOrderDate: Date
    authorizationStatu: 'draft' | 'pending' | 'complete'
}

