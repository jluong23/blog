import { createContext, useEffect, useReducer } from 'react'
import styled from 'styled-components'
import {AiFillCloseCircle} from "react-icons/ai"
export const ModalContext = createContext()


const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255, 0.3);
  z-index: 99;
`

const Modal = styled.div`
  background-color: rgba(0,0,0, 0.3);
  padding: 1em;
`

const CloseButton = styled.span`
  right: 0;
  float: right;
  position: relative;
  cursor: pointer;
  color: black;

`

const ModalContent = styled.div`
  color: black;
`

export const userReducer = (state, action) => {
  // action.payload should contain content, ie. a react component to display
  // inside the modal
  switch (action.type) {
    case 'OPEN':
      return { visible: true, content: action.payload}
    case 'CLOSE':
      return { visible: false, content: null }
    default:
      return state
  }
}

export const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { 
    visible: false,
    content: null
  })

  const closeModal = () => {
    dispatch({type: 'CLOSE'});
  }

  const backgroundClicked = (e) => {
    if(e.target.id === "modal-background"){
      closeModal();
    }
  }

  
  return (
    <ModalContext.Provider value={{ ...state, dispatch }}>
      {state.visible && 
        <ModalBackground onClick={backgroundClicked} id="modal-background">
          <Modal>
              <CloseButton onClick={closeModal}>
                <AiFillCloseCircle/>
              </CloseButton>
              <ModalContent>
                {state.content}
              </ModalContent>
          </Modal>
        </ModalBackground>
      }
      { children }
    </ModalContext.Provider>
  )
}