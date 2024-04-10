import React from "react";

function useKeydown(key, callback){
    React.useEffect(()=>{
        function handleKeyDonw(event){
          if (event.code === key){
            callback(event);
          }
        }
        window.addEventListener('keydown', handleKeyDonw);
        return()=>{
          window.removeEventListener('keydown', handleKeyDonw)
        };
      }, [key, callback]);
}
export default useKeydown