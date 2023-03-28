import React from "react";

function GenerateRow({index, data, deleteRecipe}){
    return(
        <tr key={index}>
            <td>{data.name}</td>
            <td>{data.cuisine}</td>
            <td><img src={data.photo}></img></td>
            <td className="content_td"><p>{data.ingredients}</p></td>
            <td className="content_td"><p>{data.preparation}</p></td>
            <td><button name="delete" onClick={()=>{deleteRecipe(data.name)}}>Delete</button></td>
        </tr>
    );
}
export default GenerateRow;