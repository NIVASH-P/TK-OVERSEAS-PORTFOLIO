import './PreLoader.css'

/**
 * @author Pavithran G 
 * @description This a preloader that displays for few seconds
 * @returns {JSX.Element} A preloader skeleton
 */

const PreLoader = () => {
  return (
    <section className="pre-loader">
        <img className="pre-loader-img" src="/images/Refresh_Loader.gif" />
    </section>
  )
}
export default PreLoader