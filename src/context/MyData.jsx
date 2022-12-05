import React,{createContext,useState} from 'react'
export const ShareData = createContext()

const MyData = (props) => {
    const [user] = useState('Hello World')
    const editOnClick = (index) => {
        const edited = todo.at(index);
        setText(edited);
        setIndexxx(index);
        setChange(true);
      };
  return (
    <div>
      <ShareData.Provider value={{user,editOnClick}}>
        {props.children}
      </ShareData.Provider>
    </div>
  )
}

export default MyData
