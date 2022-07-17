import axios from 'axios';
import icon from '../../assets/images/notification-icon.svg';
import { BASE_URL } from '../../utils/requests';
import './styles.css';

type Props = {
    saleId: number;
}

function NotificationButton({ saleId } : Props) {

    const handleClick = (id : number) => {
        axios.get(`${BASE_URL}/sales/${id}/notification`)
            .then(response => {
                console.log('Sucesso')
            });
    }

    return (
        <div role="button" className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;