import { useContext } from "react";
import { PlayersContext } from "../../PlayersContext";
import SelectedPlayersCard from "../../ui/SelectedPlayersCard";

const SelectedPlayers = () => {
    const { selectPlayer } = useContext(PlayersContext)

    return (
        <div className="grid gap-5">
            {selectPlayer.length ?
                selectPlayer.map(player => <SelectedPlayersCard key={player.playerName} player={player} />)
                : "No Selected Players"}
        </div>
    );
};

export default SelectedPlayers;