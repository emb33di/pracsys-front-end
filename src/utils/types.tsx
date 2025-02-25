// Read this 1st

// Typescript is great
// What is typescript? https://www.youtube.com/watch?v=zQnBQ4tB3ZA&ab_channel=Fireship
// Why
// - You can clearly model your data
// - This data model is what your backend should also follow

type ProcessingTime = {
    providerName: string,
    processingTime: number,
    completedRequests: number
}

type Claim = {
    id: string,
    patientName: string,
    testOrderedName: string,
    testOrderDate: Date
    authorizationStatus: 'Draft' | 'Pending' | 'Complete'
}

