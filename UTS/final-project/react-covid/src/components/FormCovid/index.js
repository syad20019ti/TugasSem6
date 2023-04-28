import styles from "./FormCovid.module.css";
import { useState } from "react";
import data from "../../utils/constants/provinces";

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
    setIsJumlahError( alert("Jumlah wajib diisi!"));
    
  } else {
    const findIndex = provinces.findIndex((item) => item.kota === kota);
    const findProv = provinces.find((item) => item.kota === kota);

    let currentValueKasus = parseInt(findProv.kasus);
    let currentValueSembuh = parseInt(findProv.sembuh);
    let currentValueDirawat = parseInt(findProv.dirawat);
    let currentValueMeninggal = parseInt(findProv.meninggal);

    let kasusPositifSekarang = status === "Positif" ? parseInt(jumlah) : parseInt(0);

    let kasusSembuhSekarang = status === "Sembuh" ? parseInt(jumlah) : parseInt(0);

    let kasusRawatSekarang = status === "Dirawat" ? parseInt(jumlah) : parseInt(0);

    let kasusMeninggalSekarang = status === "Meninggal" ? parseInt(jumlah) : parseInt(0);

    const propinsi = {
      kota: kota,
      kasus: currentValueKasus + kasusPositifSekarang,
      sembuh: currentValueSembuh + kasusSembuhSekarang,
      dirawat: currentValueDirawat + kasusRawatSekarang,
      meninggal: currentValueMeninggal + kasusMeninggalSekarang,
    };

    provinces[findIndex] = propinsi;

    console.log (provinces[findIndex]);

    setProvinsi([...provinces]);
  }
}

    return (
      <div className={styles.container}>
      <section className={styles.AddFormCovid}>
        <div className="AddFormCovid__left">
          <img
            className={styles.AddFormCovid__image}
            src="https://aufaroot18.github.io/frontend-programming/static/media/Form.ab866ff8bf882bcffc2d.png"
            alt="placeholder"
          />
        </div>
        <div className="AddFormCovid__right">
        <h2 className={styles.AddFormCovid__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
              <div>
                <label className={styles.AddFormCovid__label}>Provinsi</label>
                  <select value={kota} onChange={handleKota} name="kota" id="kota" className={styles.AddFormCovid__select}>
                    <option className={styles.AddFormCovid__option} value=""> Pilih Provinsi </option>
                      {provinces.map((prov, key) => {
                        return(<option value={prov.kota} key={key} className={styles.AddFormCovid__option}>{prov.kota}</option>)
                      })}
                  </select>
              </div>

              <div>
                <label className={styles.AddFormCovid__label}>status</label>
                  <select value={status} onChange={handleStatus} name="status" id="status" className={styles.AddFormCovid__select}>
                    <option className={styles.AddFormCovid__option} value="">
                      Pilih status
                    </option>
                    {statuss.map((status, key) => {
                      return(<option value={status} key={key}  className={styles.AddFormCovid__option}>{status}</option>)
                    })}
                </select>
              </div>

              <div>
                <label className={styles.AddFormCovid__label}>Jumlah</label>
                <input onChange={handleJumlah} id="jumlah" name="jumlah" className={styles.AddFormCovid__select} type="number" value={jumlah}></input>
              </div>

              <div>
                <button className={styles.AddFormCovid__button}>Submit</button>
              </div>

          </form>
        </div>
      </section>
    </div>
    );
}

export default FormCovid;