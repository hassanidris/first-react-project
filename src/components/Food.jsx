
function Food(){

    const food1 = "Orange";
    const food2 = "Spagiti"

    return(
        <ul className="main_content">
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food