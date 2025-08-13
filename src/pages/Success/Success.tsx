import { useTheme } from 'styled-components';
import { Container, Heading, Info, InfoContent, Order } from './Success.styles';
import delivery from '../../assets/delivery.svg';
import {
  CurrencyDollarIcon,
  MapPinIcon,
  TimerIcon
} from '@phosphor-icons/react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Success() {
  const theme = useTheme();

  const { orders } = useContext(CartContext);
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro'
  };

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>
        <Info>
          <InfoContent>
            <div>
              <MapPinIcon
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>
                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{' '}
                  {`${orderInfo.state}`}
                </span>
              </div>
            </div>

            <div>
              <TimerIcon
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollarIcon
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
                size={32}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>
      <img src={delivery} alt="Pedido concluído" />
    </Container>
  );
}
