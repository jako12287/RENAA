import styles from "./styles/landing.module.css"
import Logo from "./assets/images/logo.png"
import Hero from "./assets/images/imageHero.png"
import Map from "./assets/images/mapa.png"
import Form from "./components/Form"
const App = () => {

  return (
    <main>

      <section className={styles.sectionHeader}>
        <figcaption>
          <img src={Logo} alt="Logo del Registro Nacional Adopcion Animal" />
        </figcaption>
      </section>

      <section className={styles.sectionHero}>
        <h1 className={styles.title}>Adopciones responsables para proteger a <br /> los animales en Colombia</h1>

        <div className={styles.containerHero}>
          <div className={styles.spaceOne}>
            <img src={Hero} alt="Imagen alusiva a una adopcion de una mascota" className={styles.imageDog} />

          </div>
          <div className={styles.spaceTwo}>
            <h2 className={styles.titleSpaceTwo}>Estamos construyendo una plataforma para que los refugios se conecten, registren adoptantes y aseguren adopciones responsables</h2>
            <h3 className={styles.subTitleSpaceTwo}>¿Te interesa? </h3>
            <h3 className={styles.callToActionSpaceTwo}>Registra tu interés</h3>
          </div>
        </div>

      </section>

      <section>
        <div className={styles.whatIs}>
          <h3 className={styles.textTitle}>
            ¿Qué es
          </h3>

          <img className={styles.imageText} src={Logo} alt="Logo del Registro Nacional Adopcion Animal" />

          <h3 className={styles.textTitle}>
            ?
          </h3>
        </div>

        <div className={styles.containerWhatsIS}>
          <div className={styles.spaceOneMap}>
            <h4 className={styles.titleWhatsIS}>
            <img className={`${styles.imageText} ${styles.marginLeftZero}`} src={Logo} alt="Logo del Registro Nacional Adopcion Animal" />
              es una plataforma en desarrollo que permitirá a los refugios de animales en Colombia registrar adoptantes y compartir información para evitar que personas con antecedentes de maltrato o abandono adopten nuevamente.
            </h4>
          </div>

          <div className={styles.spaceTwoMap}>

            <img className={styles.imageMap} src={Map} alt="imagen de mapa de Registro Nacional Adopcion Animal" />

          </div>
        </div>

        <h3 className={styles.subtitleMap}>Nuestra misión es proteger a los animales y asegurar adopciones responsables</h3>
      </section>

      <section>
        <h3>¿Quieres ayudar a proteger a los animales en Colombia?</h3>
        <h3>Déjanos tus datos y te mantendremos informado sobre el lanzamiento de</h3>
        <figcaption>
          <img src={Logo} alt="Logo del Registro Nacional Adopcion Animal" />
        </figcaption>
        <Form />
        <h3>Registra tu interés</h3>
      </section>

      <section>
        <figcaption>
          <img src={Logo} alt="Logo del Registro Nacional Adopcion Animal" />
        </figcaption>

        <h5>Diseñado y desarrollado por <a href="https://www.jcmaker.com" target="_blank" rel="nofollow">JCMaker</a></h5>
      </section>



    </main>
  )
}

export default App
