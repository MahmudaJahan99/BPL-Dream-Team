import { useContext } from "react";
import { PlayersContext } from "../../PlayersContext";

const SelectedPlayers = () => {
    const { selectPlayer } = useContext(PlayersContext)

    return (
        <div>
            {selectPlayer.length ? <p>{selectPlayer.length}</p> : "No Selected Players"}

        </div>
    );
};

export default SelectedPlayers;