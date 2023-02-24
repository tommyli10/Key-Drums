import Key from "./Key.jsx";

const MainBoard = () => {
    const sounds = new Array(9).fill(0);

    return (
        <>
            {sounds.map((sound, index) => (
                <Key keyName={sound} key={index} />
            ))}
        </>
    );
}

export default MainBoard;