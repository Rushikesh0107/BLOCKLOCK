import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DoorController = () => {
    const navigate = useNavigate(); // Get the navigate function

    const lock = () => {
        fetch('/lock')
        .then(res => res.text())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const unlock = () => {
        fetch('/unlock')
        .then(res => res.text())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className='flex flex-col items-center justify-center h-40'>
                <h1 className='text-4xl font-bold'>Door Controller</h1>
                <p className='text-xl'>This is the door controller page</p>
            </div>
            <div className="flex justify-center w-1/2 mx-auto">
                <button className='bg-green-500 text-white font-bold py-2 px-4 rounded w-48 mx-auto' onClick={unlock}>Unlock</button>
                <button className='bg-red-500 text-white font-bold py-2 px-4 rounded w-48 mx-auto' onClick={lock}>Lock</button>
            </div>
        </div>
    );
};

export default DoorController;
