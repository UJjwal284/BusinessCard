import {useState} from "react";

function CustomSpellCheck() {
    const [text, setText] = useState('');
    let textArr = text.split(' ');

    for (let i = 0; i < textArr.length; i++) {
        switch (textArr[i]) {
            case 'aple':
                textArr[i] = 'apple'
                break
            case 'baal':
                textArr[i] = 'ball'
                break
            case 'cut':
                textArr[i] = 'cat'
                break
            case 'dug':
                textArr[i] = 'dog'
                break
        }
        textArr[i] = textArr[i] + ' '
    }

    return (
        <div className={'m-3'}>
            <textarea onChange={e => setText(e.target.value)}/>
            <p>{textArr}</p>
        </div>
    );
}

export default CustomSpellCheck;