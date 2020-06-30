import React,{useState,useEffect} from 'react';

//# components
import CloseButton from './closeBtn';

//# css
import '../css/style.css';

//# icon
import  { Phone } from 'react-feather';

function Widget() {
    const [title, setTitle] = useState(undefined)
    const [number, setNumber] = useState(undefined)

      //* Fetch Api Data
    useEffect(() => {
        (async () => {
            const response = await fetch(
                'https://codifyinditest.com/script_test/api-test/')
            const data = await response.json()
            const {
                labels,
                phone_number
            } = data['script test']
            await setTitle(labels)
            await setNumber(phone_number)
        })();
    }, [])

    
  return (
    <div className="widget">
        {(title && number) && (
            <React.Fragment>
                <button className="widget-header">
                    <div>{title}</div>
                    <div>
                        <Phone size="18" color="#39ff14"/>
                        {number}
                    </div>
                </button>
                <CloseButton/>
            </React.Fragment>
        )}
    </div>
  );
}

export default Widget;
