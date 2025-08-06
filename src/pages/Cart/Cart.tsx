import {
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  TrashIcon
} from '@phosphor-icons/react';
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions
} from './Cart.styles';
import { Link } from 'react-router-dom';

import { coffees } from '../../assets/coffees/coffees';
import { QuantityInput } from '../../components/QuantityInput/QuantityInput';
import { Radio } from './Form/Radio/Radio';
import { TextInput } from './Form/TextInput/TextInput';

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
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                // error={errors.cep}
                // {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                // error={errors.street}
                // {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                // error={errors.number}
                // {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                // error={errors.fullAddress}
                // {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                // error={errors.neighborhood}
                // {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                // error={errors.city}
                // {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                // error={errors.state}
                // {...register('state')}
              />
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
              <div>
                <Radio isSelected={true} value="credit">
                  <CreditCardIcon size={16} />
                  <span>Cartão de débito</span>
                </Radio>
                <Radio isSelected={false} value="debit">
                  <CreditCardIcon size={16} />
                  <span>Cartão de débito</span>
                </Radio>
                <Radio isSelected={false} value="cash">
                  <CreditCardIcon size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <p>Lista de cafés selecionados será exibida aqui.</p>
        <CartTotal>
          <Coffee>
            <div>
              <img src={coffees[0].image} alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <CoffeeInfo>
                  <QuantityInput
                    quantity={1}
                    incrementQuantity={() => {}}
                    decrementQuantity={() => {}}
                  />
                  <button>
                    <TrashIcon />
                    <span>Remover</span>
                  </button>
                </CoffeeInfo>
              </div>
            </div>

            <aside>
              <span>R$ 9,90</span>
            </aside>
          </Coffee>

          <span />

          <Coffee>
            <div>
              <img src={coffees[5].image} alt="" />
              <div>
                <span>Latte</span>
                <CoffeeInfo>
                  <QuantityInput
                    quantity={1}
                    incrementQuantity={() => {}}
                    decrementQuantity={() => {}}
                  />
                  <button>
                    <TrashIcon />
                    <span>Remover</span>
                  </button>
                </CoffeeInfo>
              </div>
            </div>

            <aside>
              <span>R$ 9,90</span>
            </aside>
          </Coffee>

          <span />

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
