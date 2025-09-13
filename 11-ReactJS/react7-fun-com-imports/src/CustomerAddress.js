function Address() {
  const name = "Rise";
  const add = "NH-16 Ongole";
  return (
    <div class="Address">
      <h1>Address!!</h1>{" "}
      <center>
        <h3>
          <table>
            <tr>
              <th>Name : </th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Addres : </th>
              <td>{add}</td>
            </tr>
          </table>
        </h3>
      </center>
    </div>
  );
}
export default Address;
