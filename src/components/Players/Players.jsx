import { useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, handleChoosePlayer, selectPlayer, isDisabled }) => {
    const [allPlayers, setAllPlayers] = useState(true)
    return (
        <div className="max-w-300 mx-auto ">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">
                    {allPlayers ? "Available Players" : `Selected Players (${selectPlayer.length}/6)`}
                </h2>
                <div className="join">
                    <button onClick={() => setAllPlayers(true)} className={`join-item border border-r-0 rounded-s-lg px-3 py-2 ${allPlayers && "bg-amber-300 font-semibold"}`}>Available</button>
                    <button onClick={() => setAllPlayers(false)} className={`join-item border border-l-0 rounded-e-lg px-3 py-2 ${!allPlayers && "bg-amber-300 font-semibold"}`}>Selected</button>
                </div>
            </div>


            {
                allPlayers ? <AvailablePlayers playersPromise={playersPromise} handleChoosePlayer={handleChoosePlayer} selectPlayer={selectPlayer} isDisabled={isDisabled} /> : <SelectedPlayers selectPlayer={selectPlayer} />
            }
        </div>
    );
};
export default Players;