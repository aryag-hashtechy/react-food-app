import { useEffect } from 'react'

const InfiniteScroll = ({ setCurrentPage, handleFetch, searchText}) => {

  const handleScroll = () => {
  
    if(Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight){
      setCurrentPage((prev) => {
        handleFetch(prev + 1, searchText)
        return prev + 1
      })
    }
  }

  useEffect (() =>{
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, []);
}

export default InfiniteScroll
