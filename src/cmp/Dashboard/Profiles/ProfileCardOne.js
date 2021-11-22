import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

const ProfileCardOne = ({children, name, desc}) => {
    const img1 = 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80';
    return (
        <div className="bg-white pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
            <div className="relative h-40">
                <img className="absolute h-full w-full object-cover" src="https://source.unsplash.com/collection/0/1600x900" />
            </div>
            <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <MdAccountCircle color="gray" className="object-cover w-full h-full"  />
                {/* <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" /> */}
            </div>
            <div className="mt-16">
                <h1 className="text-lg text-center font-semibold">
                    {name}
                </h1>
                <p className="text-sm text-gray-600 text-center">
                    {desc}
                </p>
            </div>
            <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                {children}
            </div>
        </div>
    )
}

export default ProfileCardOne;
