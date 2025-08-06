import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  MoneyIcon
} from '@phosphor-icons/react';
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions
} from './Cart.styles';
import { Link } from 'react-router-dom';

export function Cart() {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form id="order">
          <AddressContainer>
            <AddressHeading>
              <MapPinIcon size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <input
                type="number"
                placeholder="CEP"
                required
                pattern="[0-9]{5}-[0-9]{3}"
              />
              <input placeholder="Rua" required />
              <input placeholder="Número" required />
              <input placeholder="Complemento" />
              <input placeholder="Bairro" required />
              <input placeholder="Cidade" required />
              <input placeholder="UF" required pattern="[A-Z]{2}" />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollarIcon size={22} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <label>
                <input type="radio" name="payment" value="credit" required />
                <CreditCardIcon size={16} />
                <span>Cartão de crédito</span>
              </label>
              <label>
                <input type="radio" name="payment" value="debit" />
                <BankIcon size={16} />
                <span>Cartão de débito</span>
              </label>
              <label>
                <input type="radio" name="payment" value="money" />
                <MoneyIcon size={16} />
                <span>Dinheiro</span>
                Dinheiro
              </label>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <p>Lista de cafés selecionados será exibida aqui.</p>
        <CartTotal>
          <Coffee>
            <span>Café X</span>
            <span>R$ 12,00</span>
          </Coffee>
          <Coffee>
            <span>Café Y</span>
            <span>R$ 45,00</span>
          </Coffee>
          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ 99,00</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 5,00</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 104,00</span>
            </div>
          </CartTotalInfo>
          <CheckoutButton>
            <Link to="/success">Confirmar Pedido</Link>
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  );
}
