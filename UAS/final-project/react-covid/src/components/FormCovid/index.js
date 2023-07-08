import StyledFormCovid from "./FormCovid.styled.js";
import { useState } from "react";
import data from "../../utils/constants/provinces";
import image from "../asset/heroIndex2.svg";

function FormCovid(props) {
  const provinces = data.provinces;
  const statuss = ["Positif", "Sembuh", "Dirawat", "Meninggal"];

  const { setProvinsi } = props;

  // Membuat state kota
  const [kota, setKota] = useState("");

  // Membuat state status
  const [status, setStatus] = useState("");

  // Membuat state jumlah
  const [jumlah, setJumlah] = useState("");

  // Membuat state jumlah kalo kosong
  const [setIsJumlahError] = useState("");

  // Membuat fungsi handleKota
  function handleKota(e) {
    setKota(e.target.value);
  }

  // Membuat fungsi handlestatus
  function handleStatus(e) {
    setStatus(e.target.value);
  }

  // Membuat fungsi handlejumlah
  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  // Handle form ketika disubmit
  function handleSubmit(e) {
    e.preventDefault(); // Mencegah perilaku default: refresh

    if (jumlah === "") {
      setIsJumlahError(alert("Jumlah wajib diisi!"));
    } else {
      const findIndex = provinces.findIndex((item) => item.kota === kota);
      const findProv = provinces.find((item) => item.kota === kota);

      let currentValueKasus = parseInt(findProv.kasus);
      let currentValueSembuh = parseInt(findProv.sembuh);
      let currentValueDirawat = parseInt(findProv.dirawat);
      let currentValueMeninggal = parseInt(findProv.meninggal);

      let kasusPositifSekarang =
        status === "Positif" ? parseInt(jumlah) : parseInt(0);

      let kasusSembuhSekarang =
        status === "Sembuh" ? parseInt(jumlah) : parseInt(0);

      let kasusRawatSekarang =
        status === "Dirawat" ? parseInt(jumlah) : parseInt(0);

      let kasusMeninggalSekarang =
        status === "Meninggal" ? parseInt(jumlah) : parseInt(0);

      const propinsi = {
        kota: kota,
        kasus: currentValueKasus + kasusPositifSekarang,
        sembuh: currentValueSembuh + kasusSembuhSekarang,
        dirawat: currentValueDirawat + kasusRawatSekarang,
        meninggal: currentValueMeninggal + kasusMeninggalSekarang,
      };

      provinces[findIndex] = propinsi;

      console.log(provinces[findIndex]);

      setProvinsi([...provinces]);
    }
  }

  return (
    <StyledFormCovid>
      <section>
        <StyledFormCovid>
          <img src={image} alt="placeholder" />
        </StyledFormCovid>
        <div className="AddFormCovid__right">
          <h2>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Provinsi</label>
              <select value={kota} onChange={handleKota} name="kota" id="kota">
                <option value=""> Pilih Provinsi </option>
                {provinces.map((prov, key) => {
                  return (
                    <option value={prov.kota} key={key}>
                      {prov.kota}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label>status</label>
              <select
                value={status}
                onChange={handleStatus}
                name="status"
                id="status"
              >
                <option value="">Pilih status</option>
                {statuss.map((status, key) => {
                  return (
                    <option value={status} key={key}>
                      {status}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label>Jumlah</label>
              <input
                onChange={handleJumlah}
                id="jumlah"
                name="jumlah"
                type="number"
                value={jumlah}
              ></input>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </StyledFormCovid>
  );
}

export default FormCovid;
