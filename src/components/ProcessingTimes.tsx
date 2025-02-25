// Read this 3rd

// Constants and Types help build the UI
// A clear type definition allows you to build the UI as defined components
// And constants make it easier to build more of these components

// So now, if you want to add a processing time item
// You just add an item to the TEST_PROCESSING_TIMES variable in the constants.tsx file
// And when you integrate with the backend api, the api will send some data that will fit in easily
// And you don't have to copy paste all the html code every time you want a new item

// The core suggestions is:
// Build out the types.tsx file so you figure out all the data you will need
// And align with the backend so it sends data that adheres to the types.tsx
// Use constants.tsx to test realistically

// Two more:
// Any time you find yourself copy pasting html, it should probably be a component
// I can help you get started with https://ui.mantine.dev/ so you spend less time doing all the css

type ProcessingTimesProps = {
    items: ProcessingTime[]
}

export default function ProcessingTimes({ items }: ProcessingTimesProps) {
    return (
        <div className="bg-white p-4 shadow-md rounded-md col-span-1">
            <h2 className="text-xl font-semibold text-[#86b289]">
                Average processing times
            </h2>
            <ul className="mt-2 text-[#86b289] text-lg">
                {
                    items.map((item) => <ProcessingTimeItem key={item.providerName} item={item} />)
                }
            </ul>
        </div>
    )
}

type ProcessingTimeItemParams = {
    item: ProcessingTime
}

function ProcessingTimeItem({ item }: ProcessingTimeItemParams) {
    return (
        <li>
            {item.providerName} : {item.processingTime} minutes - {item.completedRequests} requests
        </li>
    )
}