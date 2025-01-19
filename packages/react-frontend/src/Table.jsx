// src/Table.jsx
function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
  }
  
  function TableBody(props) {
    // Map each character object into a table row
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            {/* Delete button triggers the removeCharacter prop function */}
            <button onClick={() => props.removeCharacter(index)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  
    return <tbody>{rows}</tbody>;
  }

  function Table(props){
    return (
        <table>
            <TableHeader />
            <TableBody characterData={props.characterData} 
            removeCharacter={props.removeCharacter}
            />
        </table>
        );
  }

  export default Table;