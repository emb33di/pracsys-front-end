type Table_data_inputs = {
    items: Claim[] // this is the type from types.tsx
}

export default function Table_info({ items }: Table_data_inputs) {
    return (
        <div className="w-full h-auto bg-[#f9f9f9] flex-col justify-start items-start inline-flex mt-10 mx-auto rounded-[15px]">
            <div className="self-stretch bg-white rounded border border-[#86b289] flex-col justify-start items-start flex overflow-hidden">
                <div className="self-stretch bg-white justify-start items-start inline-flex overflow-hidden">
                    <div className="flex w-full">
                        <div className="flex-1 bg-black/5 border-l border-t border-[#86b289] flex justify-center items-center p-2">
                            <div className="text-black text-lg font-semibold font-['Inter'] leading-none">Name of Patient</div>
                        </div>
                        <div className="flex-1 bg-black/5 border-l border-t border-[#86b289] flex justify-center items-center p-2">
                            <div className="text-black text-lg font-semibold font-['Inter'] leading-none">Test Ordered</div>
                        </div>
                        <div className="flex-1 bg-black/5 border-l border-t border-[#86b289] flex justify-center items-center p-2">
                            <div className="text-black text-lg font-semibold font-['Inter'] leading-none">Test Order Date</div>
                        </div>
                        <div className="flex-1 bg-black/5 border-l border-t border-[#86b289] flex justify-center items-center p-2">
                            <div className="text-black text-lg font-semibold font-['Inter'] leading-none">Auth Status</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch bg-white justify-start items-start inline-flex overflow-hidden">
                    <ul className="self-stretch w-full">
                        {items.map((item) => (
                            <TableItem key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

type TableItemParams = {
    item: Claim
}

function TableItem({ item }: TableItemParams) {
    return (
        <li className="flex w-full">
            <div className="flex-1 bg-white border-l border-t border-[#86b289] flex justify-center items-center p-2">
                <div className="text-black text-base font-normal font-['Inter'] leading-none">{item.patientName}</div>
            </div>
            <div className="flex-1 bg-white border-l border-t border-[#86b289] flex justify-center items-center p-2">
                <div className="text-black text-base font-normal font-['Inter'] leading-none">{item.testOrderedName}</div>
            </div>
            <div className="flex-1 bg-white border-l border-t border-[#86b289] flex justify-center items-center p-2">
                <div className="text-black text-base font-normal font-['Inter'] leading-none">{item.testOrderDate.toString()}</div>
            </div>
            <div className="flex-1 bg-white border-l border-t border-[#86b289] flex justify-center items-center p-2">
                <div className="text-black text-base font-normal font-['Inter'] leading-none">{item.authorizationStatu}</div>
            </div>
        </li>
    );
}