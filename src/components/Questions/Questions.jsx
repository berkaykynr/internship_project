import React, { useState } from "react";
import { Panel } from 'primereact/panel';

export default function Questions(){
    const [selectedIndex,setSelectedIndex] = useState(0)

    const headerTemplate = (options) => {
        const className = `${options.className} flex flex-row align-items-center justify-content-start bg-white border-0`;

        return (
            <div className={className}>
                  <div>
                    {options.togglerElement}
                </div>
                <div className="flex align-items-center gap-2">
                    <span className="font-bold">What is web hosting ?</span>
                </div>
            </div>
        );
    };


    return(
        <div className="flex flex-column w-full align-items-center justify-content-center">
            <div className="flex flex-column gap-1">
                <span className="font-bold lg:text-5xl md:text-3xl sm:text-xl text-xl">Have a question ? Look here ...</span>
                <div className="flex flex-row align-items-center justify-content-center gap-2">  
                    <span className="font-light lg:text-lg md:text-lg sm:text-xs text-xs opacity-70"> Have another question ? </span>
                    <span className="text-cyan-500 hover:text-cyan-700 cursor-pointer underline m-3">See our Knowledge</span>
                </div>
            </div>
            <div className="flex flex-row py-6 w-full align-items-center justify-content-center   ">
                <div className=" flex flex-row px-3 align-content-center justify-content-between w-3">
                    <div className="flex flex-column gap-4">
                        <span className={`cursor-pointer ${selectedIndex === 0 && "font-bold"} lg:text-2xl md:text-xl sm:text-lg text-lg`} onClick={() => setSelectedIndex(0)}>General</span>
                        <span className={`cursor-pointer ${selectedIndex === 1 && "font-bold"} lg:text-2xl md:text-xl sm:text-lg text-lg`} onClick={() => setSelectedIndex(1)}>Service</span>
                        <span className={`cursor-pointer ${selectedIndex === 2 && "font-bold"} lg:text-2xl md:text-xl sm:text-lg text-lg`} onClick={() => setSelectedIndex(2)}>Billing</span>
                        <span className={`cursor-pointer ${selectedIndex === 3 && "font-bold"} lg:text-2xl md:text-xl sm:text-lg text-lg`} onClick={() => setSelectedIndex(3)}>Safety</span>
                    </div>
                    <div className="border-round flex flex-column h-full surface-200 " style={{width:"3px"}}>
                        <div className={`flex h-3rem ${selectedIndex === 0 ?" bg-indigo-800" : "surface-200" }`}/>
                        <div className={`flex h-3rem ${selectedIndex === 1 ?" bg-indigo-800" : "surface-200" }`}/>
                        <div className={`flex h-3rem ${selectedIndex === 2 ?" bg-indigo-800" : "surface-200" }`}/>
                        <div className={`flex h-3rem ${selectedIndex === 3 ?" bg-indigo-800" : "surface-200" }`}/>
                    </div>
                 
                </div>
                <div className=" w-8">
                <Panel className="border-0" headerTemplate={headerTemplate} collapsed toggleable collapseIcon="">
                    <p className="m-0 border-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
                <Panel className="border-0" headerTemplate={headerTemplate} collapsed toggleable>
                    <p className="m-0 border-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
                <Panel className="border-0" headerTemplate={headerTemplate} collapsed toggleable>
                    <p className="m-0 border-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
                <Panel className="border-0" headerTemplate={headerTemplate} collapsed toggleable>
                    <p className="m-0 border-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
                </div>
            </div>
        </div>
    )
}