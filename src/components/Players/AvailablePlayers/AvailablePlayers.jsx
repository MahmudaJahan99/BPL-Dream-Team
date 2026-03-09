import { use, useContext } from "react";
import { PlayersContext } from "../../PlayersContext";
import AvailablePlayersCard from "../../ui/AvailablePlayersCard";

const AvailablePlayers = () => {
    const {playersPromise, selectPlayer} = useContext(PlayersContext)
    const playersData = use(playersPromise)
    

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {playersData.map(player => {
                // ✅ Per-player disabled check instead of a single global flag
                const isSelected = selectPlayer?.some(p => p.playerName === player.playerName)

                return <AvailablePlayersCard key={player.playerName} player={player} isSelected={isSelected} />
                
            })}
        </div>
    );
};

export default AvailablePlayers;