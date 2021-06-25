import {useState} from 'react'
import {useNotes} from '../../contexts'
import { useNotesData } from '../../hooks';

import "./widget.css";
export const ColorPalette = ({noteID}) => {
    const [check,setCheck] = useState("")
    const {notesState,notesDispatch} = useNotes()
    const {changeNoteColor} = useNotesData()

    const circleClass = [
        {
            parentDiv:"flex justify-between w-full py-1",
            childDiv:"rounded-full h-6 w-6 flex items-center justify-center cursor-pointer",
            backgroundColor:["bg-black","bg-red-500","bg-yellow-600","bg-yellow-500","bg-green-500","bg-green-300","bg-blue-500","bg-blue-800","bg-purple-500","bg-pink-500","bg-yellow-700","bg-gray-500",""],
            hoverBorder:"hover-border"
        }
    ]

  return (
    <div className="absolute left-0 bottom-6  color-palette">
      <div className="flex flex-wrap w-36 p-1 bg-gray-800">
          {/* { 
              Array(3).fill(0).map((_,index)=>{
                return (
                    <div className={`${circleClass[0].parentDiv}`}>
                        
                      { Array(4).fill(0).map((_,index) =>{
                          return (
                              
                              <div className={`${circleClass[0].childDiv} ${circleClass[0].backgroundColor[index]} `}>

                              </div>
                          )
                       })
                       
                    }
                    </div>
                )
              })
            
          } */}
        <div className="flex justify-between w-full py-1">
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-black cursor-pointer border border-gray-500  hover-border"
            title="Default" onClick={()=>{changeNoteColor (noteID,"bg-black")}}
          >
            <i className="fas fa-check"></i>
          </div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-red-500 cursor-pointer hover-border"
            title="Red" onClick={()=>{changeNoteColor (noteID,"bg-red-500")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-yellow-600 cursor-pointer hover-border"
            title="Orange" onClick={()=>{changeNoteColor (noteID,"bg-yellow-600")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-yellow-500 cursor-pointer hover-border"
            title="Yellow" onClick={()=>{changeNoteColor (noteID,"bg-yellow-500")}}
          ></div>
        </div>
        <div className="flex justify-between w-full py-1">
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-green-500 cursor-pointer hover-border"
            title="Green"  onClick={()=>{changeNoteColor (noteID,"bg-green-500")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-green-300 cursor-pointer hover-border"
            title="Teal" onClick={()=>{changeNoteColor (noteID,"bg-green-300")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-blue-500 cursor-pointer hover-border"
            title="Blue" onClick={()=>{changeNoteColor (noteID,"bg-blue-500")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-blue-800 cursor-pointer hover-border"
            title="Dark Blue" onClick={()=>{changeNoteColor (noteID,"bg-blue-800")}}
          ></div>
        </div>
        <div className="flex justify-between w-full py-1">
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-purple-500 cursor-pointer hover-border"
            title="Purple" onClick={()=>{changeNoteColor (noteID,"bg-purple-500")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-pink-500 cursor-pointer hover-border"
            title="Pink" onClick={()=>{changeNoteColor (noteID,"bg-pink-500")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-gray-500 cursor-pointer hover-border"
            title="Brown" onClick={()=>{changeNoteColor (noteID,"bg-gray-500")}}
          ></div>
          <div
            className="rounded-full h-6 w-6 flex items-center justify-center bg-gray-500 cursor-pointer hover-border"
            title="Gray" onClick={()=>{changeNoteColor (noteID,"bg-gray-500")}}
          ></div>
        </div>
        
      </div>
    </div>
  );
};
