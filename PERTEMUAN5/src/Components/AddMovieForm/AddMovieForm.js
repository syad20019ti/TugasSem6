import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return (
      <div className={styles.container}>
        <section className={styles.AddMovieForm}>
          <div className="AddMovieForm__left">
            <img
              className={styles.AddMovieForm__image}
              src="https://th.bing.com/th/id/R.960e3602b665d116958cea26f68ce096?rik=RvMkbKFuWr7BAQ&riu=http%3a%2f%2fwalldiskpaper.com%2fwp-content%2fuploads%2f2015%2f11%2fBlue-Color-Image-1024x768.jpg&ehk=zIJE3SD%2bZGo0wtikGgTUJ7SbF5BBgVIQ8ttybu8OF44%3d&risl=&pid=ImgRaw&r=0"
              alt="placeholder"
            />
          </div>
          <div className="AddMovieForm__right">
            <h2 className={styles.AddMovieForm__title}>Add Movie</h2>
  
            <label className={styles.AddMovieForm__label}>Title</label>
            <input className={styles.AddMovieForm__input}></input>
            <label className={styles.AddMovieForm__label}>Year</label>
            <input className={styles.AddMovieForm__input}></input>
            <button className={styles.AddMovieForm__button}>Submit</button>
          </div>
        </section>
      </div>
    );
  }
  
  export default AddMovieForm;