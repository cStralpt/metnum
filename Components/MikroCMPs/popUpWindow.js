import pupStyles from "../../styles/popUp.module.css";
import { useState, createContext, useContext, useEffect } from "react";
import Link from "next/link";
import Draggable, { DraggableCore } from "react-draggable";
import Script from "next/script";
import { PopupCtx } from "../PopUpGlobalState";
import { DatasState } from "../DatasContainer";
import Head from "next/head";
function PopUpWindow() {
  const [getDraggable, setDraggable] = useState(true);
  const [isWindowCLosed, setWindowCLosed] = useState(false);
  const [triggerClosedWin, setTriggerClosedWin] = useState("awokawok");
  const [popUpstate, setPopUpState] = useContext(PopupCtx);
  const [getDatas, setDatas] = useContext(DatasState);
  useEffect(() => {
    if (isWindowCLosed == true) {
      const timer = setTimeout(() => {
        setPopUpState(false);
      }, 130);
      return () => clearTimeout(timer);
    }
  }, [isWindowCLosed]);
  return (
    <>
      <Head>
        <title>Metode Numerik</title>
        <meta name="description" content="Window for methods list" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className={[pupStyles.popupContainer]}>
        <div
          className={[
            isWindowCLosed
              ? pupStyles.container_backDropClosed
              : pupStyles.container_backDropOpened,
          ]}
        ></div>
        <Draggable disabled={getDraggable}>
          <div
            className={[
              pupStyles.popUpWindow,
              `${
                isWindowCLosed
                  ? pupStyles.popUpWindow_closed
                  : pupStyles.popUpWindow_opened
              }`,
            ]}
          >
            <header
              className={pupStyles.popUpWindow_header}
              onMouseEnter={() => {
                setDraggable(false);
              }}
              onMouseLeave={() => {
                setDraggable(true);
              }}
            >
              <h5 className={pupStyles.popUp_header_windowName}>
                <ion-icon name="calculator"></ion-icon>
                Methods List
              </h5>
              <div className={pupStyles.popUpWindow_header_actionContainer}>
                {[1, 2, 3].map((data, index) => (
                  <span
                    className={pupStyles.header_ActionBtn}
                    onClick={() => setWindowCLosed(true)}
                    onMouseEnter={() => {
                      setDraggable(false);
                    }}
                    onMouseLeave={() => {
                      setDraggable(true);
                    }}
                    key={index}
                  ></span>
                ))}
              </div>
            </header>
            <main className={pupStyles.popUpWindow_main}>
              <div className={pupStyles.popUpWindow_mainAppItem_Container}>
                {getDatas.methods.map((items, index) => (
                  <Link href={"/apps/" + items.slug} key={index} passHref>
                    <div
                      className={pupStyles.main_appItem}
                      onClick={() => setPopUpState(false)}
                      key={index}
                    >
                      <div className={pupStyles.main_appIcon}>
                        <ion-icon name="folder"></ion-icon>
                        <ion-icon name="extension-puzzle"></ion-icon>
                        <box-icon name="math" color="silver"></box-icon>
                      </div>
                      <div className={pupStyles.main_appName}>
                        {items.methodId}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </Draggable>
      </div>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
    </>
  );
}

export default PopUpWindow;
