import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import styles from "/styles/Home.module.css";
import { AppPathState } from "./AppPath";
import { DatasState } from "./DatasContainer";
import { IntegerState } from "./IntegerGlobalState";
import { PopupCtx } from "./PopUpGlobalState";
import PopUpWindow from "./popUpWindow";
import Script from "next/script";
export default function Home({ methodId }) {
  const router = useRouter();
  const [popUpstate, setPopUpState] = useContext(PopupCtx);
  const [isInteger, setIsInteger] = useContext(IntegerState);
  const [getDatas, setDatas] = useContext(DatasState);
  const [getAppPath, setAppPath] = useContext(AppPathState);
  const [decimalCheck, setDecimalChecked] = useState(false);
  const [integerChecked, setIntegerChecked] = useState(true);
  if (!methodId) {
    return <PopUpWindow />;
    // <>oops! it seems you're in a wrong destination</>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Metode Numerik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      {popUpstate === true && <PopUpWindow />}
      <main className={styles.main}>
        <div className={styles.dataContainer}>
          <div className={styles.topNav_Gap}></div>
          <div className={styles.ioContainer}>
            <div className={styles.ioExecution}>
              {/* {(methodId === "Interpolasi Polynomial" && (
                <Interpolasipolynomial />
              )) ||
                (methodId === "Biseksi" && <Biseksi />)} */}
              {
                getDatas.methods.find((data) => data.methodId === methodId)
                  .component
              }
              {/* navbar */}
              <div className={styles.ioExecution_topNav}>
                <div className={styles.topNav_BtnContainer}>
                  <div className={styles.topNavBtn}>
                    {
                      getDatas.methods.find((data) => data.methodId == methodId)
                        .methodId
                    }
                  </div>
                </div>
              </div>
              <div className={styles.ioExecution_rightNav}>
                <div className={styles.ioExecution_rightNav_icons_container}>
                  <div
                    className={styles.ioExecution_rightNav_icons}
                    onClick={() => {
                      if (methodId === "Interpolasi Polynomial") {
                        if (getAppPath === "InterPolLenier") {
                          getDatas.datasContainer.interpol.lenier.splice(
                            0,
                            getDatas.datasContainer.interpol.lenier.length
                          );
                          router.replace(router.asPath);
                        } else if (getAppPath === "InterPolKuadratik") {
                          getDatas.datasContainer.interpol.kuadratik.splice(
                            0,
                            getDatas.datasContainer.interpol.kuadratik.length
                          );
                          router.replace(router.asPath);
                        }
                      } else if (methodId === "Biseksi") {
                        getDatas.datasContainer.biseksi.batasAtas.splice(
                          0,
                          getDatas.datasContainer.biseksi.batasAtas.length
                        );
                        getDatas.datasContainer.biseksi.batasBawah.splice(
                          0,
                          getDatas.datasContainer.biseksi.batasBawah.length
                        );
                        router.replace(router.asPath);
                      } else if (methodId === "Regula Falsi") {
                        getDatas.datasContainer.RegulaFalsi.batasAtas.splice(
                          0,
                          getDatas.datasContainer.RegulaFalsi.batasAtas.length
                        );
                        getDatas.datasContainer.RegulaFalsi.batasBawah.splice(
                          0,
                          getDatas.datasContainer.RegulaFalsi.batasBawah.length
                        );
                        router.replace(router.asPath);
                      } else if (methodId === "Secant") {
                        getDatas.datasContainer.Secant.batasAtas.splice(
                          0,
                          getDatas.datasContainer.Secant.batasAtas.length
                        );
                        getDatas.datasContainer.Secant.batasBawah.splice(
                          0,
                          getDatas.datasContainer.Secant.batasBawah.length
                        );
                        router.replace(router.asPath);
                      }
                    }}
                  >
                    <box-icon
                      name="list-minus"
                      color="#F38BA0"
                      animation="tada-hover"
                    ></box-icon>
                  </div>
                  <div className={styles.ioExecution_rightNav_icons_actionName}>
                    <h6 className={styles.text}>Erase All Datas In The List</h6>
                  </div>
                </div>
                <div className={styles.ioExecution_rightNav_icons_container}>
                  <input
                    type="radio"
                    name="isInteger"
                    checked={decimalCheck}
                    id="decimalToggle"
                    className={styles.ioExecution_rightNav_icons_Indicator}
                    onClick={() => {
                      setIsInteger(false);
                      setIntegerChecked(false);
                      setDecimalChecked(true);
                    }}
                  />
                  <div className={styles.ioExecution_rightNav_icons}>1.3</div>
                  <div className={styles.ioExecution_rightNav_icons_actionName}>
                    <h6 className={styles.text}>Show Decimal</h6>
                  </div>
                </div>
                <div className={styles.ioExecution_rightNav_icons_container}>
                  <input
                    type="radio"
                    name="isInteger"
                    checked={integerChecked}
                    id="integerToggle"
                    className={styles.ioExecution_rightNav_icons_Indicator}
                    onClick={() => {
                      {
                        setIsInteger(true);
                        setIntegerChecked(true);
                        setDecimalChecked(false);
                      }
                    }}
                  />
                  <div className={styles.ioExecution_rightNav_icons}>12</div>
                  <div className={styles.ioExecution_rightNav_icons_actionName}>
                    <h6 className={styles.text}>Show Integer</h6>
                  </div>
                </div>
                <div className={styles.ioExecution_rightNav_icons_container}>
                  <div className={styles.ioExecution_rightNav_icons}>
                    <box-icon
                      type="solid"
                      name="sun"
                      animation="tada-hover"
                      color="#F38BA0"
                    ></box-icon>
                  </div>
                  <div className={styles.ioExecution_rightNav_icons_actionName}>
                    <h6 className={styles.text}>Day/Night Mode</h6>
                  </div>
                </div>
                <div
                  className={styles.ioExecution_rightNav_icons_container}
                  onClick={() => setPopUpState(true)}
                >
                  <div className={styles.ioExecution_rightNav_icons}>
                    <box-icon
                      name="math"
                      color="#F38BA0"
                      animation="tada-hover"
                    ></box-icon>
                  </div>
                  <div className={styles.ioExecution_rightNav_icons_actionName}>
                    <h6 className={styles.text}>App List</h6>
                  </div>
                </div>
                <div className={styles.ioExecution_rightNav_icons_container}>
                  <div className={styles.ioExecution_rightNav_icons}>
                    <ion-icon name="language-outline"></ion-icon>
                  </div>
                  <div className={styles.ioExecution_rightNav_icons_actionName}>
                    <h6 className={styles.text}>Change Language</h6>
                  </div>
                </div>
              </div>
              {/* Navbar End */}
            </div>
            <div className={styles.rightNav_Gap}></div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>

      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
    </div>
  );
}
