const SelectedPlayers = ({selectPlayer}) => {
        console.log(selectPlayer)

    return (
        <div>
            {selectPlayer ? <p>{selectPlayer.playerName}</p>: "No Selected Players"}
            
        </div>
    );
};

export default SelectedPlayers;