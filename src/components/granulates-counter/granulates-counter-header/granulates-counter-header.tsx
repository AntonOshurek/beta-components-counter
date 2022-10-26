import GranulatesCounterNav from '../granulates-counter-nav/granulates-counter-nav';

import './granulates-counter-header.scss';

const GranulatesCounterHeader = (): JSX.Element => {
  return (
    <header className='granulates-counter-header'>
        <div className='granulates-counter-header__wrap container'>

          <a className='granulates-counter-header__back-link'>
            <span className='visually-hidden'>return to main page</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9.95 21.475.475 12 9.95 2.525l1.325 1.325L3.125 12l8.15 8.15Z"/>
            </svg>
          </a>

          <h1 className='granulates-counter-header__title'>Granulates counter</h1>
          <GranulatesCounterNav/>
        </div>
    </header>
  )
}

export default GranulatesCounterHeader;
