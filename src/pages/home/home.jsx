import React from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import "./home.css"
import { Popup, usePopupConfig } from '../../reusable/popups'

const Home = ({appProps}) => {

  const navigate = useNavigate()
  const [ popupConfig, setPopupConfig ] = usePopupConfig()

  // example navigation code
  const redirectToAuth = () => {
    navigate({
      pathname: "/notes",
      search: `?${createSearchParams({
        group: encodeURIComponent(),
        timestamp: encodeURIComponent()
      })}`,
      replace:true
    })
  }

  const handlePopupOpen = () => {
    setPopupConfig({
      display: true,
      msg: `Popup Header`,
      action: null
    })
  }

  return (
  <>
  <Popup config={popupConfig} setConfig={setPopupConfig} Component={DummyPopupComponent}>  </Popup>
  <div >
    <section>
    <div>
      This is banner
    </div>
    </section>

    <section>
    <div>
      This is section 1
    </div>
    <div onClick={handlePopupOpen} > open popup</div>
    </section>

    <section>
    <div>
      This is section 2
    </div>
    </section>

  </div>  
  </>
  )
}
export default Home

const DummyPopupComponent = () => {
  return (
  <div>
    This is a popup!
  </div>  
  )
}