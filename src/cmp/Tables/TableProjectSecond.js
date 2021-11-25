import React from 'react';

const TableProjectSecond = ({RowCmp, data}) => {
    return (
        <section className="font-mono">
            <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="overflow-x-auto">
                    <table className="">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Age</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.map((item) => (
                                <RowCmp
                                    {...item}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TableProjectSecond;