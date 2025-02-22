// Constants are also great
// Why?
// - You can create test data easily
// - You can assume your backend api will return this type of data
// - You can ensure the data type is the same via Typescript!


// One test processing time
const TEST_PROCESSING_TIME: ProcessingTime = {
    providerName: 'Cigna',
    processingTime: 20
}

// More realistically, you backend will send a list of processing times
const TEST_PROCESSING_TIMES: ProcessingTime[]  = [
    {
        providerName: 'Cigna',
        processingTime: 20
    },
    {
        providerName: 'Aetna',
        processingTime: 30
    },
    {
        providerName: 'UHC',
        processingTime: 5
    },
    {
        providerName: 'Arkansas BCBS',
        processingTime: 15
    },
]

// Similarly you can create a test claim
const TEST_CLAIM: Claim = {
    id: '1',
    patientName: 'Adam Smith',
    testOrderedName: 'Chest CT w/ Contrast',
    testOrderDate: new Date(2024, 10, 4),
    authorizationStatu: 'draft'
}

// Again, more realistically your backend will send a list of claims
const TEST_CLAIMS: Claim[] = [
    {
        id: '1',
        patientName: 'Adam Smith',
        testOrderedName: 'Chest CT w/ Contrast',
        testOrderDate: new Date(2024, 8, 2),
        authorizationStatu: 'draft'
    },
    {
        id: '2',
        patientName: 'Floyd Miles',
        testOrderedName: 'Echocardiogram',
        testOrderDate: new Date(2023, 10, 4),
        authorizationStatu: 'pending'
    },
    {
        id: '3',
        patientName: 'Ronald Richards',
        testOrderedName: 'Holter Monitor',
        testOrderDate: new Date(2024, 7, 20),
        authorizationStatu: 'pending'
    },
    {
        id: '4',
        patientName: 'Marvin McKinney',
        testOrderedName: 'Cardiac Catheterization',
        testOrderDate: new Date(2025, 1, 2),
        authorizationStatu: 'complete'
    },
]