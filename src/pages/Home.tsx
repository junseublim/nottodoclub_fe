import NotToDoEmpty from '@/assets/svgs/ntd_empty.svg?react'
import PrimaryButton from '@/components/atoms/buttons/PrimaryButton';
import NottodoCarousel from '@/components/atoms/carousel/NottodoCarousel';
import HomeCalendar from '@/components/organisms/HomeCalendar';
import AddModerationCard from '@/components/organisms/AddModerationCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoModerationCard from '@/components/organisms/NoModerationCard';

const Home = () => {
  const [noNottodos] = useState(false)
  const [date, setDate] = useState<Date>(new Date())
  const [currentNottodo, setCurrentNottodo] = useState(null)
  const [moderations, setModerations] = useState([])
  const [isToday, setIsToday] = useState(false)
  const navigate = useNavigate();

  const addNotToDo = '낫투두 등록하기'

  const clickHandler = () => {
    navigate('/list/add')
  }

  const setSelectedDate = (date: Date) => {
    console.log(date)
    setDate(date)
  }

  if (noNottodos) {
    return <div className="flex justify-center items-center flex-col h-screen">
        <NotToDoEmpty />
        <div className='flex flex-col items-center my-4 w-30 text-gray-500 text-base font-bold'>
        <span>아래 버튼을 눌러</span>
        <span>새로운 낫투두를 등록해주세요.</span>
      </div>
      <PrimaryButton label={addNotToDo} onClick={clickHandler} />
    </div>
  }

  return <div>
    <NottodoCarousel />
    <HomeCalendar
      date={date}
      onDateChange={setSelectedDate}
    />
    {
      moderations.length === 0 &&
        isToday
        ? <AddModerationCard onClick={() => console.log('click')} />
        : <NoModerationCard />
    }
  </div>
}
 
export default Home;