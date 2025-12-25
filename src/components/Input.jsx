export const Input = ( {setNumber}) => {
    return (
        <>
            <input onChange={ (e) => setNumber(e.target.value) } type="number" />
        </>
    );
};