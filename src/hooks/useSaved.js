import {useDispatch} from 'react-redux';
import {setNewElement} from '../slices/appSlice';

export default () => {
    const dispatch = useDispatch()

    const handleJustSaved = () => {
        dispatch(setNewElement(true))
        setTimeout(() => {
            dispatch(setNewElement(false))
        }, 3500);
    }

    return {handleJustSaved}
}