const CharacterInfoRow = ({ name, value }) => {
    return (
        <>
            <dt>{name}</dt>
            <dd>{value}</dd>
        </>
    );
};

export default CharacterInfoRow;