import React,{useState,useEffect} from 'react';

//# components
import CloseButton from './closeBtn';

//# css
import '../css/style.css';

//# icon
import  { Phone } from 'react-feather';

function Widget(props) {
    const [title, setTitle] = useState(undefined)
    const [number, setNumber] = useState(undefined)

      //* Fetch Api Data
    useEffect(() => {
        (async () => {
            const response = await fetch(props.url)
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
Widget.defaultProps={
    url: 'https://codifyinditest.com/script_test/api-test/'
}

export default Widget;

