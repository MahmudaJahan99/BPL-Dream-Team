import { use, useContext } from "react";
import { PlayersContext } from "../../PlayersContext";

const AvailablePlayers = () => {
    const {playersPromise, handleChoosePlayer, selectPlayer} = useContext(PlayersContext)
    const playersData = use(playersPromise)
    

    return (
        <div className="grid md:grid-cols-3 gap-5">
            {playersData.map(player => {
                // ✅ Per-player disabled check instead of a single global flag
                const isSelected = selectPlayer?.some(p => p.playerName === player.playerName)

                return (
                    <div key={player.playerName} className="card bg-base-100 shadow-sm p-5">
                        <figure className="w-full h-96 rounded-md">
                            <img
                                className="w-full h-full object-cover object-top-left"
                                src={player.playerImg}
                                alt={player.playerName}
                            />
                        </figure>
                        <div className="mt-5">
                            <div className="grid gap-2 mb-5">
                                <p className="flex items-center gap-5 text-2xl font-semibold">
                                    <i className="fa-solid fa-user"></i>
                                    {player.playerName}
                                </p>
                                <p className="flex justify-between items-center">
                                    <span>
                                        <i className="fa-solid fa-flag mr-2"></i>
                                        {player.playerCountry}
                                    </span>
                                    <span className="bg-gray-100 rounded-4xl px-3">
                                        {player.playerType}
                                    </span>
                                </p>
                            </div>

                            <div className="grid gap-2">
                                <p className="flex justify-between items-center">
                                    <span>Rating</span>
                                    <span>{player.rating / 10} / 10</span>
                                </p>
                                <p className="flex justify-between items-center">
                                    <span>Batting Hand</span>
                                    <span>{player.battingStyle}</span>
                                </p>
                                <p className="flex justify-between items-center">
                                    <span>Price: ${player.price}</span>
                                    {/* ✅ Fixed JSX syntax for disabled */}
                                    <button
                                        onClick={() => handleChoosePlayer(player)}
                                        disabled={isSelected}
                                        className="btn btn-sm btn-soft btn-primary"
                                    >
                                        {isSelected ? "Selected" : "Choose Player"}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default AvailablePlayers;