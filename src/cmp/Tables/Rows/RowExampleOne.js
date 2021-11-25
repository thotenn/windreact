import React from 'react'

const dataExample = [
    {
        img: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Joseph",
        desc: "Programmer",
        age: "25",
        status: "Innacceptable",
        date: "17/10/1995",
        statusClass: "text-red-700 bg-red-100"
    },
    {
        img: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Joseph",
        desc: "Programmer",
        age: "25",
        status: "Pending",
        date: "17/10/1995",
        statusClass: "text-orange-700 bg-gray-100"
    },
    {
        img: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Joseph",
        desc: "Programmer",
        age: "25",
        status: "Acceptable",
        date: "17/10/1995",
        statusClass: "text-green-700 bg-green-100 "
    },
]

const RowExampleOne = ({img, name, desc, age, status, statusClass, date}) => {
    return (
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                        <p className="font-semibold text-black">{name}</p>
                        <p className="text-xs text-gray-600">{desc}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">{age}</td>
            <td className="px-4 py-3 text-xs border">
                <span className={`px-2 py-1 font-semibold leading-tight rounded-sm ${statusClass}`}> {status} </span>
            </td>
            <td className="px-4 py-3 text-sm border">{date}</td>
        </tr>
    )
}

export default RowExampleOne;