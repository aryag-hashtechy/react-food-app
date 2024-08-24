import { useEffect } from 'react'

const InfiniteScroll = ({ setCurrentPage }) => {

  const handleScroll = () => {
    if(Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight){
      setCurrentPage(prev => prev + 1)
    }
  }

  useEffect (() =>{
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, []);
}

export default InfiniteScroll
