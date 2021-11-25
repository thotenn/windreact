import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

const ProfileCardOne = ({children, name, desc, fullSize=true}) => {
    const bannerUrl = 'https://source.unsplash.com/collection/0/1600x900';
    const extra = (!fullSize ? 'md:max-w-sm' : '');
    return (
        <div className={`flex flex-col bg-white pb-6 w-11/12 ${extra} justify-center items-center rounded-lg shadow-sm pl-11`}>
            <div className="h-52 w-full">
                <img className="h-full w-full object-cover" src={bannerUrl} loading="lazy" />
            </div>
            <div className="shadow mx-auto h-32 w-20 -my-12 border-white rounded-full overflow-hidden border-4">
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
            <div className="flex justify-center items-center mt-6 pt-3 mx-6 border-t overflow-y-scroll">
                {children}
            </div>
        </div>
    )
}

export default ProfileCardOne;
