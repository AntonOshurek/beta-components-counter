import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import GranulatesCounterHeader from '../../components/granulates-counter/granulates-counter-header/granulates-counter-header';
import ThingItem from '../../components/item/thing-item';

import { useAppSelector } from '../../hooks/hooks';
import { getCurrentGranulatesSelector } from '../../store/selectors/selectors';

import './granulates-counter-page.scss';

const GranulatesCounterPage = (): JSX.Element => {

  const {UNID} = useParams();

  let foo: number = 0;
  if(UNID) {
    foo = +UNID;
  } else {
    foo = 0;
  }

  const currentItem = useAppSelector(getCurrentGranulatesSelector(foo))

  return (
    <div className='granulates-counter-page'>
      <GranulatesCounterHeader/>
      <main className='granulates-counter-page__main'>

        <div className='granulates-counter-page__wrap container'>
          <section className='granulates-counter-page__counter-info'>
            <h2 className='granulates-counter-page__title'>Counter</h2>
            <ThingItem item={currentItem}/>
          </section>

          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default GranulatesCounterPage;
