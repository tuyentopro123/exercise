import {useEffect} from 'react'

const Helmet = ({children, title}) => {
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div className='helmet'>
      {children}
    </div>
  )
}

export default Helmet