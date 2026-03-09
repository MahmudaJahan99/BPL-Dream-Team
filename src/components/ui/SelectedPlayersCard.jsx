import { useContext } from "react";
import { PlayersContext } from "../PlayersContext";

const SelectedPlayersCard = ({ player }) => {
    const {handleDeletePlayer} = useContext(PlayersContext)

    return (
        <div className="card card-side bg-base-100 shadow-sm flex justify-between items-center">
            <div className="flex gap-5 items-center">
                <figure className="p-3">
                    <img
                        src={player.playerImg}
                        alt={player.playerName}
                        className="h-20 w-20 object-cover object-top-left rounded-[7px]" />
                </figure>
                <div className="grid gap-3">
                    <h3 className="text-xl font-bold">{player.playerName}</h3>
                    <p className="text-sm">{player.playerType}</p>
                </div>
            </div>
            <div className="card-actions justify-end p-3">
                <button onClick={()=> handleDeletePlayer(player)} className="text-red-500 text-2xl">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

        </div>
    );
};

export default SelectedPlayersCard;