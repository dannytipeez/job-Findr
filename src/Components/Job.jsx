import React from 'react'

function Job(props) {
    return (
        <div className="jobCard h-full w-3/4 md:my-16 md:w-3/4 bg-slate-600 rounded p-5 text-white font-mono">
            <h3 className="text-xl ">{props.title}</h3>
            <hr />
            <br />
            <p className="">{props.description}</p>
            <br />
            <span className="flex justify-between">
                <span className="hidden md:flex md:space-x-2">
                    
                    <button className="hover:bg-white hover:text-black hover:border-black hover:border-2 border border-white p-2 rounded" type="text">Python</button>
                    
                </span>
                <button className="lg:hidden md:hidden border border-white hover:bg-white hover:text-black hover:border-black hover:border-2 p-2 rounded-sm" type="text">{props.skills[0]}</button>
                <p>{props.location}</p>
            </span>
        </div>
    )
}

export default Job


