import React from "react";

function findDateDifference(date1, date2) {
  date1 = parseInt(date1);
  date2 = parseInt(date2);
  return Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
}

const SearchResults = props => {
  return (
    <table className="search-results-table">
      <tbody>
        <tr>
          <th>ID:</th>
          <th>Title:</th>
          <th>First Name:</th>
          <th>Surname:</th>
          <th>Email:</th>
          <th>Room ID:</th>
          <th>Check In Date:</th>
          <th>Check Out Date:</th>
          <th>Time Staying:</th>
        </tr>

        {props.results.map(person => {
          return (
            <tr>
              <td>{person.id}</td>
              <td>{person.title}</td>
              <td>{person.firstName}</td>
              <td>{person.surname}</td>
              <td>{person.email}</td>
              <td>{person.roomID}</td>
              <td>{person.checkInDate}</td>
              <td>{person.checkOutDate}</td>
              <td>
                {findDateDifference(person.checkInDate, person.checkOutDate)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;