import StyledProvinsi from "./Provinsi.styled.js";
import data from "../../utils/constants/provinces";

function Provinsi() {
  const province = data.provinces;
  let no = 0;

  return (
    <StyledProvinsi>
      <section>
        <h2>Provinsi</h2>
        <h3>Data Covid Berdasarkan Provinsi</h3>
        <div className="prov__container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
              {province.map((provins, key) => {
                no += 1;
                return (
                  <tr key={key}>
                    <td>{no}</td>
                    <td>{provins.kota}</td>
                    <td>{provins.kasus}</td>
                    <td>{provins.sembuh}</td>
                    <td>{provins.dirawat}</td>
                    <td>{provins.meninggal}</td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </section>
    </StyledProvinsi>
  );
}

export default Provinsi;
