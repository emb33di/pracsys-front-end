// Read this 2nd

// Constants are also great
// Why?
// - You can create test data easily
// - You can assume your backend api will return this type of data
// - You can ensure the data type is the same via Typescript!


// One test processing time
export const TEST_PROCESSING_TIME: ProcessingTime = {
    providerName: 'Cigna',
    processingTime: 20,
    completedRequests: 0
}

// More realistically, you backend will send a list of processing times
export const TEST_PROCESSING_TIMES: ProcessingTime[]  = [
    {
        providerName: 'Cigna',
        processingTime: 20,
        completedRequests: 30
    },
    {
        providerName: 'Aetna',
        processingTime: 30,
        completedRequests: 1
    },
    {
        providerName: 'UHC',
        processingTime: 5,
        completedRequests: 5
    },
    {
        providerName: 'Arkansas BCBS',
        processingTime: 15,
        completedRequests: 10
    },
]

// Similarly you can create a test claim
export const TEST_CLAIM: Claim = {
    id: '1',
    patientName: 'Adam Smith',
    testOrderedName: 'Chest CT w/ Contrast',
    testOrderDate: new Date(2024, 10, 4),
    authorizationStatus: 'Draft'
}

// Again, more realistically your backend will send a list of claims
export const TEST_CLAIMS: Claim[] = [
    {
        id: '1',
        patientName: 'Adam Smith',
        testOrderedName: 'Chest CT w/ Contrast',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Draft'
    },
    {
        id: '2',
        patientName: 'Floyd Miles',
        testOrderedName: 'Echocardiogram',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Pending'
    },
    {
        id: '3',
        patientName: 'Ronald Richards',
        testOrderedName: 'Holter Monitor',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Pending'
    },
    {
        id: '4',
        patientName: 'Marvin McKinney',
        testOrderedName: 'Cardiac Catheterization',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Complete'
    },
    {
        id: '5',
        patientName: 'John Ralls',
        testOrderedName: 'Coronary Angiogram',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Draft'
    },
    {
        id: '6',
        patientName: 'Jane Doe',
        testOrderedName: 'MRI Brain',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Pending'
    },
    {
        id: '7',
        patientName: 'John Doe',
        testOrderedName: 'Abdominal Ultrasound',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Complete'
    },
    {
        id: '8',
        patientName: 'Alice Johnson',
        testOrderedName: 'Pelvic MRI',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Draft'
    },
    {
        id: '9',
        patientName: 'Bob Brown',
        testOrderedName: 'Chest X-Ray',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Pending'
    },
    {
        id: '10',
        patientName: 'Charlie Davis',
        testOrderedName: 'CT Abdomen',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Complete'
    },
    {
        id: '11',
        patientName: 'Diana Evans',
        testOrderedName: 'Mammogram',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Draft'
    },
    {
        id: '12',
        patientName: 'Ethan Foster',
        testOrderedName: 'Bone Density Scan',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Pending'
    },
    {
        id: '13',
        patientName: 'Fiona Green',
        testOrderedName: 'PET Scan',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Complete'
    },
    {
        id: '14',
        patientName: 'George Harris',
        testOrderedName: 'CT Head',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Draft'
    },
    {
        id: '15',
        patientName: 'Hannah White',
        testOrderedName: 'MRI Spine',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Pending'
    },
    {
        id: '16',
        patientName: 'Ian King',
        testOrderedName: 'CT Chest',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Complete'
    },
    {
        id: '17',
        patientName: 'Jack Lee',
        testOrderedName: 'Abdominal MRI',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Draft'
    },
    {
        id: '18',
        patientName: 'Karen Martinez',
        testOrderedName: 'Pelvic Ultrasound',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Pending'
    },
    {
        id: '19',
        patientName: 'Larry Nelson',
        testOrderedName: 'CT Pelvis',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Complete'
    },
    {
        id: '20',
        patientName: 'Megan Owens',
        testOrderedName: 'Chest MRI',
        testOrderDate: new Date(2025, 1, 24),
        authorizationStatus: 'Draft'
    },
    {
        id: '21',
        patientName: 'Nathan Parker',
        testOrderedName: 'CT Angiography',
        testOrderDate: new Date(2025, 1, 25),
        authorizationStatus: 'Pending'
    },
    {
        id: '22',
        patientName: 'Olivia Quinn',
        testOrderedName: 'Cardiac MRI',
        testOrderDate: new Date(2025, 1, 25),
        authorizationStatus: 'Complete'
    },
    {
        id: '23',
        patientName: 'Paul Roberts',
        testOrderedName: 'CT Colonography',
        testOrderDate: new Date(2025, 1, 25),
        authorizationStatus: 'Draft'
    },
    {
        id: '24',
        patientName: 'Quincy Smith',
        testOrderedName: 'CT Enterography',
        testOrderDate: new Date(2025, 1, 25),
        authorizationStatus: 'Pending'
    },
    {
        id: '25',
        patientName: 'Rachel Taylor',
        testOrderedName: 'CT Urography',
        testOrderDate: new Date(2025, 1, 25),
        authorizationStatus: 'Complete'
    }
];