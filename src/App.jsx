import styles from './App.module.css';

export default function App() {
  return (
    <div className="App">
      <span></span>
      <div className={styles.shaderTopBlack}></div>
      <div className={styles.img_fixed}></div>
      <section>
        <h1 className={styles.title}>Modelos Disponíveis</h1>
        <div className={styles.slider}>
          <img
            id="slider_1"
            src="../src/img/audi_a3.png"
            alt="img_carousel"
            title="Audi A3"
          />

          <img id="slider_2" src="../src/img/audi_a4.png" alt="img_carousel" />

          <img id="slider_3" src="../src/img/audi_a5.png" alt="img_carousel" />

          <img id="slider_4" src="../src/img/audi_a6.png" alt="img_carousel" />

          <img
            id="slider_5"
            src="../src/img/audi_e_tron.png"
            alt="img_carousel"
          />

          <img
            id="slider_6"
            src="../src/img/audi_e_tron_gt.png"
            alt="img_carousel"
          />
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
}
